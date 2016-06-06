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
     * How to create and initial an array
     */

    // Use constructor
    var arr = new Array();
    for(var i = 0; i < 5; i ++) {
        arr[i] = i;
    }
    console.log(arr);

    // Abbreviate style
    var arr = [];
    for(var j = 0; j < 5; j ++) {
        arr[j] = j;
    }
    console.log(arr);



    /**
     * How to ergodic an array
     */

    // Normal method
    var len = arr.length;
    for(var i = 0; i < len; i ++) {
        if(i == 4) {
            break;
        }
    }

    // ES5 method
    arr.forEach(function(val) {
        console.log(val);
        // You can not use @break and @return in forEach() 
    });

    // ES6 method
    for(var val of arr) {
        if(val == 4){
            break;
        }
    }

    function instance(arr) {
        for(var val of arr) {
            if(val == 4) {
                return { result: true };
            }
        }
    }



    /**
     * How to create an object
     */

    // Use constructor
    var obj = new Object();
    obj.thisAttrOne = "thisAttrOne";
    obj.thisFuncOne = function() {
        console.log(arguments.callee);
    };

    // Abbreviate style
    var obj = {
        thisAttrOne: "attrOne",
        thisFuncOne: function() {
            console.log(arguments.callee);
        }
    };



    /**
     * How to create a function object
     */

    // Functional expression style
    var func = function(){
        this.objAttrOne = "objAttrOne";
        this.objFuncOne = function(){
            console.log(arguments.callee);
        }
    };
    func.prototype = {
        constructor: func,  
        protoAttrOne: "protoAttrOne",
        protoFuncOne: function(){
            console.log(arguments.callee); 
        }
    }

    // Normal style
    function func(){
        this.objAttrOne = "objAttrOne";
        this.objFuncOne = function(){
            console.log(arguments.callee);
        }
    };
    func.prototype.protoFuncOne = function(){
        console.log(arguments.callee);
    };
    func.prototype.protoAttrOne = "protoAttrOne";



    /**
     * How to ergodic an object
     */

    // Object
    for(var key in obj){
        console.log(attr + ": " + obj[key]);
    }

    // Function object
    var funcObject = new func();
    for(var attr in funcObject){
        console.log(attr + ": " + obj[key]);
    }

    // Object.keys
    for (var key of Object.keys(obj)) {
        console.log(key + ": " + obj[key]);
    }



    /**
     * How to ergodic a string
     */

    // ES6 method
    for(var char of "STRING"){
        console.log(char);
    }


    /**
     * How to build an iterator of an object
     */

    // For object (Abbreviation)
    var object = {
        [Symbol.iterator]: function(){
            return this;
        },
        next: function(){
            this.iteratorFlag ++;
            if(this.iteratorFlag > 5){
                return {
                    done: true
                };
            }

            return {
                done: false, 
                value: this.iteratorFlag
            };
        },
        toString: function(){
            return "OBJECT-TOSTRING";
        },
        iteratorFlag: 0,
        objectAttrOne: "objectAttrOne",
        objectFuncOne: function(args){
            console.log(arguments.callee);
        }
    };

    // For object (Closure)
    var object = {
        [Symbol.iterator]: function(){
            return {
                iteratorFlag: 0,
                next: function(){
                    this.iteratorFlag ++;
                    if(this.iteratorFlag > 5){
                        return {
                            done: true
                        };
                    }

                    return {
                        done: false, 
                        value: this.iteratorFlag
                    };
                }
            };
        },
        toString: function(){
            return "OBJECT-TOSTRING";
        },
        objectAttrOne: "objectAttrOne",
        objectFuncOne: function(args){
            console.log(arguments.callee);
        }
    };

    /**
     * How to write a common iterator for an array (Not in ES6, 
     * just imitate arr[Symbol.iterator]();), then you can use method
     * .next() for iteration
     */
    function makeIterator(array){
        var nextIndex = 0;
        
        return {
           next: function(){
                return 
                nextIndex < array.length ?
                {
                    value: array[nextIndex++], 
                    done: false
                } 
                :
                {
                    done: true
                };
            }
        }
    }

})(document, window);
