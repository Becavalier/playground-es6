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
     * How to get values from an array?
     *
     * Traditional
     */

    var myArray = [1, 2, 3, "string", {obj:"obj"}];

    var arrayValOne = myArray[0];
    var arrayValTwo = myArray[1];
    var arrayValThree = myArray[2];


    /**
     * How to get values from an array?
     *
     * ES6
     */

    var [arrayValOne, arrayValTwo, arrayValThree] = myArray;
    let [arrayValOne, arrayValTwo, arrayValThree] = myArray;
    const [arrayValOne, arrayValTwo, arrayValThree] = myArray;


    /**
     * How to get values from an array?
     *
     * ES6 - Destructuring features
     */

    var [foo, [[bar], baz]] = [1, [[2] , 3]];

    var [,, third] = [1, 2, 3];

    var [foo, ...rest] = [1, 2, 3];


    /**
     * Use destructuring for an generator
     */

    function* fibs() {
        var a = 0;

        while (true) {
            a++;
            yield a;
        }
    }

    var [first, second, third, fourth, fifth, sixth] = fibs();


    /**
     * Use destructuring for an object
     */

    var robotA = { name: "Bender" };
    var robotB = { name: "Flexo" };
    var { name: nameA } = robotA;
    var { name: nameB } = robotB;
     
    var { foo, bar } = { foo: "lorem", bar: "ipsum" };

    var complicatedObj = {
        arrayProp: [
            "Zapp",
            { second: "Brannigan" }
        ]
    };
    var { arrayProp: [first, { second }] } = complicatedObj;


    /**
     * Default value is "undefined" if a variable has no destructuring value
     */

    var { missing } = {};
    // missing is "undefined"


    /**
     * If you do not want to declare a variable when use it
     */

    // { blowUp } = { blowUp: 10 };  // Wrong
    ( { blowUp } = { blowUp: 10 } );  // Right


    /**
     * If you want to destructuring "null" or "undefined", you will get an error
     *
     * "null" and "undefined" can not be converted to an object
     *
     * When you do array destructuring, you must make sure the array must contain an iterator
     */

    var {blowUp} = null;
    // TypeError: null has no properties

    var {wtf} = NaN;
    console.log(wtf);
    // undefined


    /**
     * You can set a default value when destructuring
     */

    var [missing = true] = [];
    console.log(missing);
    // true

    var { message: msg = "Something went wrong" } = {};
    console.log(msg);
    // "Something went wrong"

    var { x = 3 } = {};
    console.log(x);
    // 3


    /**
     * The real meaning of destructuring
     *
     * You can set a destructuring object as the only parameter of a function,
     * so we can just ignore the sequence of parameters, instead inputting the parameter we
     * use in an object.
     */

    function removeBreakpoint({ url, line, column }) {
        console.log(arguments);
    }

    jQuery.ajax = function (url, {
        async = true,
        beforeSend = noop,
        cache = true,
        complete = noop,
        crossDomain = false,
        global = true,
        // ... more settings with default values
    }) {
      // ... do stuff
    };


    /**
     * Destructuring for Map object
     */

    var map = new Map();
    map.set(window, "the global");
    map.set(document, "the document");
    for (var [key, value] of map) {
      console.log(key + " is " + value);
    }
    // "[object Window] is the global"
    // "[object HTMLDocument] is the document"

    for (var [key] of map) {
      // ...
    }

    for (var [,value] of map) {
      // ...
    }

    /**
     * Multiple returning values
     */

    function returnMultipleValues() {
        return [1, 2];
    }
    var [foo, bar] = returnMultipleValues();

    function returnMultipleValues() {
        return {
            foo: 1,
            bar: 2
        };
    }
    var { foo, bar } = returnMultipleValues();

    // CPS transform
    function returnMultipleValues(k) {
        k(1, 2);
    }
    returnMultipleValues((foo, bar) => ...);


})(document, window);
