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
     * Set
     */

    var mySet = new Set("mySet");

    console.log(mySet.size);

    mySet.add("s");


    // Add element
    mySet.add(" is a bucket.");
    mySet.has(" is a bucket.");
    mySet.delete(" is a bucket.");


    // Initial a set from an array
    var myArr = ["m", "y", "S", "e", "t", "t"];
    // This will remove the repeat element
    var mySetFromArray = new Set(myArr); 


    // Initial a set from an iterator
    var obj = {
        flag: 0,
        [Symbol.iterator]: function() {
            return this;
        },
        next: function() {
            this.flag ++;
            if(this.flag < 5) {
                return {
                    done: false,
                    value: {
                        fruit: "apple"
                    }
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }

    var mySetFromObj = new Set(obj);


    // Extra method of a set
    mySet.clear();
    mySet.forEach(function(value, value, set){
        console.log(value);
        console.log(value);
        console.log(set);
    });


    /**
     * Map
     */

    var myMap = new Map([["fruit", "apple"],["color", "red"],["flavour", "sweet"]]);

    myMap.set("feeling", "great");

    myMap.size();
    myMap.has("fruit");
    myMap.get("fruit");
    myMap.delete("fruit");
    myMap.clear();

    // Return an iterator
    var keysIterator = myMap.keys();
    var valuesIterator = myMap.values();
    var entriesIterator = myMap.entries();



    /**
     * WeakSet
     */

    




})(document, window);
