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
     * Module and Script
     *
     * 在 ES6 模块中，无论你是否加入 "use strict" 语句，默认情况下模块都是在严格模式下运行;
     * 在模块中你可以使用 "import" 和 "export" 关键字;
     */


    // kittydar.js
    export function detectCats(canvas, options) {
        var kittydar = new Kittydar(options);
        return kittydar.detectCats(canvas);
    }

    export class Kittydar {}

    // No "export" keyword
    function resizeCanvas() {}


    // main.js
    // Import more than one parameters from a JS module

    // "import" 关键字的执行顺序：
    // 1、加载被导入的模块；
    // 2、利用图的深度优先搜索执行每一个模块的主体代码；
    // 3、为避免回环，已执行代码会被忽略；
    import {detectCats, Kittydar} from "kittydar.js";
    function go() {
        var canvas = document.getElementById("catpix");
        var cats = detectCats(canvas);
        drawRectangles(canvas, cats);
    }


    /**
     * Export list
     */

    export {detectCats, Kittydar};
    function detectCats(canvas, options) {}
    class Kittydar {}


    /**
     * Rename export and import list
     */

    // suburbia.js
    // Import functions with same name from different modules, rename the import name and do it;
    import {flip as flipOmelet} from "eggs.js";
    import {flip as flipHouse} from "real-estate.js";

    function v1() { ... }
    function v2() { ... }

    export {
      v1 as streamV1,
      v2 as streamV2,
      v2 as streamLatestVersion
    };







        

})(document, window);
