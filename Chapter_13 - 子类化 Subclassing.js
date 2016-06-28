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
     * Construct a class
     */

    class Shape {
        get color() {
            return this._color;
        }
        set color(c) {
            this._color = parseColorAsRGB(c);
            this.markChanged(); 
        }
    }


    /**
     * Old method of inheriting a parent class
     */

    class Circle {}

    Object.setPrototypeOf(Circle.prototype, Shape.prototype);

    Object.setPrototypeOf(Circle, Shape);


    /**
     * New method of inheriting a parent class
     */

    class Circle extends Shape {}


    /**
     * Use "super" keyword to call a parent method
     */

    class ScalableCircle extends Circle {
        get radius() {
            return this.scalingFactor * super.radius;
        }
        set radius() {
            throw new Error(" ... ");
        }
    }



        

})(document, window);
