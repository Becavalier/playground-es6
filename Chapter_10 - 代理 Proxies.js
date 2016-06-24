;(function(dom, win){

    /**
     * @license
     * Copyright (C) 2016 YHSPY <yhorg@hotmail.com>
     *
     * Licensed under the Apache License, Version 2.0 (the "License"); you may not
     * use this file except in compliance with the License. You may obtain a copy
     * of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
     * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
     * License for the specific language governing permissions and limitations under
     * the License.
     */


    /**
     * Finally block fo generator
     *
     * The finally block can be automatically ran before exit
     */

    var obj = new Proxy({}, {
        get: function (target, key, receiver) {
            console.log(`getting ${key}!`);
            return Reflect.get(target, key, receiver);
        },
        set: function (target, key, value, receiver) {
            console.log(`setting ${key}!`);
            return Reflect.set(target, key, value, receiver);
        }
    });

    //
    var target = {};
    var handler = {
        set: function (target, key, value, receiver) {
            throw new Error("Dont set any attributes on this object!");
        }
    };
    var proxy = new Proxy(target, handler);


    // Self generation tree object
    function Tree() {
        return new Proxy({}, handler);
    }
    var handler = {
        get: function (target, key, receiver) {
            if (!(key in target)) {
                target[key] = Tree(); 
            }

            // Call default method "get"
            return Reflect.get(target, key, receiver);
        }
    };


    // Read only set (not well enough)
    function NOPE() {
        throw new Error("can't modify read-only view");
    }
    var handler = {
        set: NOPE,
        defineProperty: NOPE,
        deleteProperty: NOPE,
        preventExtensions: NOPE,
        setPrototypeOf: NOPE
    };

    function readOnlyView(target) {
        return new Proxy(target, handler);
    }


})(document, window);
