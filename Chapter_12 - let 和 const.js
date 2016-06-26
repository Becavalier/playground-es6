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
     * var, let and const
     */

    // Decalre a variable
    let variableOne = "variableOne";
    var variableTwo = "variableTwo";

    // Declare a constant
    const CONSTANT_ONE = "CONSTANT_ONE";

    // CONSTANT_ONE = "CONSTANT_TWO"
    // [Error] Uncaught TypeError: Assignment to constant variable


    /**
     * The issue on traditional "var"
     *
     * "var" 关键字的作用域是整个函数，而不是块级作用域。意味着在函数任意地方声明的变量将会影响整个函数内同名的所有变量； 
     * 用 "var" 关键字声明的变量会在声明处分别向其前后影响函数内所有同名的变量；
     */

    function issueCase() {

        var t = "outter";
        var e = document.querySelector("html");
        e.addEventListener("click", function(){
            var t = "inner";
            console.log(t);
        });
        console.log(t);

    }


    /**
     * A case of variable and function hositing in Javascript
     *
     * 在JS中存在着“函数提升”和“方法提升”两个特性：
     * 1、在函数中以非函数式写法声明的函数都会被“提升”，即可以先调用后声明；
     * 2、在函数中以 "var" 声明的变量或函数也会被提升，但得到提升的只是“声明”的部分；
     * 3、在JS中用 "var" 声明的变量或方法其过程分为“声明”和“定义”两部分；
     */

    function hoistingCase() {

        // Output：true
        console.info(innerMethodTwo == this.innerMethodTwo);

        // Output：function
        console.info(typeof innerMethodOne);

        // Output：function
        console.info(typeof this.innerMethodTwo);

        // Output：Undefined
        console.info(typeof innerMethodThree);

        // Output：Undefined
        console.info(typeof innerVariableOne);

        // Output：string
        console.info(typeof innerVariableTwo);

        function innerMethodOne() {
            console.log(arguments.callee);
        } ;

        this.innerMethodTwo = function() {
            console.log(arguments.callee);
        };

        // The same as 'var innerMethodThree; innerMethodThree = function(){ ... }'
        var innerMethodThree = function() {
            console.log(arguments.callee);
        }

        // The same as 'var innerVariable; innerVariable = "innerVariableOne";'
        var innerVariable = "innerVariableOne";

        this.innerVariableTwo = "innerVariableTwo";
    }


    /**
     * Another case which caused by "var"
     */

    var messages = ["Hello", "World!", "I love callback!"];
    for (var i = 0; i < messages.length; i++) {
        setTimeout(function () {
            // Output is three times of "undefined", why? 
            console.log(messages[i]);
        }, i * 1500);
    }


    /**
     * One solution of above issue
     */

    var messages = ["Hello", "World!", "I love callback!"];
    messages.forEach(function(message, i){
        setTimeout(function () {
            console.log(messages[i]);
        }, i * 1500);
    });


    /**
     * Use "let" to solve the issue
     *
     * 1、"let" 是块级作用域；
     * 2、"let" 声明的全局变量不是全局对象的属性；
     * 3、形如 'for (let x...)' 的循环在每次迭代时都为 'x' 创建新的绑定；
     * 4、"let" 相对 "var" 而言比较慢；
     */

    var messages = ["Hello", "World!", "I love callback!"];
    for (let i = 0; i < messages.length; i++) {
        setTimeout(function () {
            console.log(messages[i]);
        }, i * 1500);
    }


    /**
     * User "const" to define a constant
     */
    const CONSTANT_ONE = "CONSTANT_ONE";

    // cosnt CONSTANT_ONE;
    // Output: Uncaught SyntaxError: Missing initializer in const declaration

        

})(document, window);
