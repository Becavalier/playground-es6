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

    function countdown(n) {
        while (n --> 0)  // "n goes to zero"
            console.log(n);
    }


    /**
     * Comparation between ES5 and ES6
     */

    // ES5
    var selected = allJobs.filter(function (job) {
      return job.isSelected();
    });

    // ES6
    var selected = allJobs.filter(job => job.isSelected());
   
    // ES5
    var total = values.reduce(function (a, b) {
      return a + b;
    }, 0);

    // ES6
    var total = values.reduce((a, b) => a + b, 0);


    /**
     * Use statment block
     */

    // ES5
    $("#confetti-btn").click(function (event) {
        playTrumpet();
        fireConfettiCannon();
    });

    // ES6
    $("#confetti-btn").click(event => {
        playTrumpet();
        fireConfettiCannon();
        // return true;
        // You must add "return" statment maunally
    });


    /**
     * Return an object
     */

    // ES6
    $("#confetti-btn").click(event => {
        var chewToys = puppies.map(puppy => {});   // Wrong!
        var chewToys = puppies.map(puppy => ({})); //
    });


    /**
     * Arrow funciton will inherit "this" from his outter layer
     */

    // ES6
    {
        addAll: function addAll(pieces) {
            _.each(pieces, piece => this.add(piece));
        },
    }

    // Write a function belonging to an object with ES6 rule
    {
        addAll(pieces) {
            _.each(pieces, piece => this.add(piece));
        },
    }


    /**
     * Some customed cases
     */

    // IIFE with Arrow function
    ;(variable => { console.log(variable ); })("variable");

    ;((variable => variable + 1)(1));

    // VM263:1 Uncaught ReferenceError: arguments is not defined(…), their are no arguments array in any arrow function
    ;(variable => { console.log(arguments); })("variable");

    // Return an object on an arrow function
    ;(variable => ({ flag:variable }))("variable");

    // Arrow function with parameters
    ;((first, ...other) => { console.log(other); })(1, 2, 3, 4);

    // Arrow function with default parameters
    ;((first = 1) => { console.log(first); })();

    // Arrow function with parameters destructuring
    ;(({first = "defaultFirst", second = "defaultSecond"}) => {console.log(`${first}, ${second}`);})({first: "first", second: "second"});


})(document, window);
