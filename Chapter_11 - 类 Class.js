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
     * Traditional method of building a class
     */

    function Circle(radius) {
        this.radius = radius;
        Circle.circlesMade++;
    }

    Circle.draw = function draw(circle, canvas) { /* Canvas绘制代码 */ }

    Object.defineProperty(Circle, "circlesMade", {
        get: function() {
            return !this._count ? 0 : this._count;
        },
        set: function(val) {
            this._count = val;
        }
    });

    Circle.prototype = {
        area: function area() {
            return Math.pow(this.radius, 2) * Math.PI;
        }
    };

    Object.defineProperty(Circle.prototype, "radius", {
        get: function() {
            return this._radius;
        },
        set: function(radius) {
            if (!Number.isInteger(radius))
                throw new Error("圆的半径必须为整数。");
            this._radius = radius;
        }
    });



    /**
     * ES6 method of building a class
     */

    class Circle {
        // Constructor method
        constructor(radius) {
            this.radius = radius;
            Circle.circlesMade++;
        };
        // Define stativ method, called with class name
        static draw(circle, canvas) {
            // Canvas绘制代码
        };
        static get circlesMade() {
            return !this._count ? 0 : this._count;
        };
        static set circlesMade(val) {
            this._count = val;
        };
        // Object method
        area() {
            return Math.pow(this.radius, 2) * Math.PI;
        };
        // Define access control method of constant "radius"
        get radius() {
            return this._radius;
        };
        set radius(radius) {
            if (!Number.isInteger(radius))
                throw new Error("圆的半径必须为整数。");
            this._radius = radius;
        };
    }
    
 

})(document, window);
