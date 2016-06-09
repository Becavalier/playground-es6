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
     * Traditional method - arguments
     */

    function containsAll(haystack) {
        for (var i = 1; i < arguments.length; i++) {
            var needle = arguments[i];
            if (haystack.indexOf(needle) === -1) {
                return false;
            }
        }
        return true;
    }


    /**
     * ES6 -  rest parameters
     *
     * The rest parameters must be set on the last parameter
     */

    function containsAll(haystack, ...needles) {
        for (var needle of needles) {
            if (haystack.indexOf(needle) === -1) {
                return false;
            }
        }
        return true;
    }


    /**
     * ES6 - default parameters
     */

    function animalSentence(animals2 = "tigers", animals3 = "bears") {
        return `Lions and ${animals2} and ${animals3}! Oh my!`;
    }


    /**
     * ES6 - insert expressions into default parameters
     */

    function animalSentenceFancy(animals2 = "tigers",
        animals3 = (animals2 == "bears") ? "sealions" : "bears") {
        return `Lions and ${animals2} and ${animals3}! Oh my!`;
    }

    

})(document, window);
