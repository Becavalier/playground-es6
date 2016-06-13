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
     * Six fundamental types of Javascript
     */

    Undefined 未定义
    Null 空值
    Boolean 布尔类型
    Number 数字类型
    String 字符串类型
    Object 对象类型


    /**
     * Use "Symbol" as an attribute name
     */

    obj[mySymbol] = "ok!";  // Never conflict with other attribute name
    console.log(obj[mySymbol]);  // ok!
    

    /**
     * Use description of Symbol
     */

    var isMoving = Symbol("isMoving");
    if (element[isMoving]) {
      smoothAnimations(element);
    }
    element[isMoving] = true;   


    /**
     * Deal with Symbol as normal attribute
     */

    var mySymbol = Symbol();
    obj = [];
    obj[mySymbol] = "mySymbol";

    console.log(mySymbol in obj); // True
    delete obj[mySymbol];


    /**
     * Type of Symbol()
     */

    typeof Symbol()
    // "symbol"


    /**
     * Symbol() can not be automatically transformed to a string
     */

    var sym = Symbol("<3");
    console.log("your symbol is " + sym);
    // TypeError: can't convert symbol to string
    console.log(`your symbol is ${sym}`);
    // TypeError: can't convert symbol to string

    console.log("your symbol is " + String(sym));
    // your symbol is Symbol(<3)
    console.log("your symbol is " + sym.toString());
    // your symbol is Symbol(<3)


    /**
     * Three ways to get a symbol instance
     */

    var mySymbol = Symbol("mySymbol");

    // This method will access Symbol register table 
    var mySymbol = Symbol.for("mySymbol");


    /**
     * Some customed cases
     */

    var mySymbolFunc = Symbol("mySymbol");
    var mySymbolVari = Symbol("mySymbol");

    var obj = [];
    obj[mySymbolFunc] = function(){
        console.log("obj[mySymbol]");
    }
    obj[mySymbolVari] = true;

    mySymbolFunc === mySymbolVari;

    mySymbolFunc = Symbol.for("mySymbol");
    mySymbolVari = Symbol.for("mySymbol");

    mySymbolFunc === mySymbolVari;


})(document, window);
