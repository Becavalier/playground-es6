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
     * A generator case of a speaking kitty
     *
     * Here, when you call a generator function, it will return an iterator for you.
     * Every time you call (iterator).next(), you will be moved to the next "yield" keyword.
     */

    function* quips(name) {
        yield "Hello " + name + "!";
        yield "Hope you like this case.";
        if (name.startsWith("X")) {
            yield "You name " + name + " 's first character is X，really cool!";
        }
        yield "See you!";
    }


    /**
     * A generator in a loop
     */

    function* loopGenerator() {
        var i = 0;
        for(; i < 10; i ++)
        {
            yield "Current number is: " + i;
        }
    }


    /**
     * RangeIterator class
     */

    class RangeIterator {
        constructor(start, stop) {
            this.value = start;
            this.stop = stop;
        }

        [Symbol.iterator]() { return this; }

        next() {
            var value = this.value;
            if (value < this.stop) {
                this.value++;
                return {done: false, value: value};
            } else {
                return {done: true, value: undefined};
            }
        }
    }

    // This method will return a generator object
    function range(start, stop) {
        return new RangeIterator(start, stop);
    }


    /**
     * Another implementation of range method
     */

    // This method will also return a generator object
    function* range(start, stop) {
        for (var i = start; i < stop; i++)
            yield i;
    }

    // Call range(), a generator is just a iterator
    for(var value of range(0, 3))
        console.log(value);



})(document, window);
