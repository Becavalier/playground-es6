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
     * A string interpolation case with template string;
     *
     * `${user.name} ${action}`
     *
     */

    function authorize(user, action) {
        if (!user.hasPrivilege(action)) {
            throw new Error(`用户 ${user.name} 未被授权执行 ${action} 操作。`);
        }
    }


    /**
     * Use expression in template string;
     */
    var user = {
        name: "Jone",
        salary: 1000,
        toString: function(){
            return "[USER OBJECT]";
        }
    };
    console.log(`${user.name} will get salary \$${user.salary / 10}`);
    console.log(`${user}`);


    /**
     * Write template string in multiple lines;
     * Seems like <pre></pre>
     */

    console.log(`
        ${user.name} will get salary \$${user.salary / 10}
    `);


    /**
     * Tagged templates;
     * Seems like "var message = SaferHTML(templateData, user.name);"
     *
     * templateData includes the string exclude the tempate strings;
     *
     */

    function SaferHTML(templateData) {
        var s = templateData[0];
        for (var i = 1; i < arguments.length; i++) {
            var arg = String(arguments[i]);

            s += arg.replace(/&/g, "&").replace(/</g, "<").replace(/</g, ">");
            s += templateData[i];
        }
        return s;
    }

    var message = SaferHTML`<p>${user.name} Hello world, salary \$${user.salary}!</p>`;


    /**
     * [Array[3], "Jone", 1000]
     * 
     */

    function PrintArguments(templateData) {
        console.log(templateData + "\n");
        console.log(arguments);
    }

    var message = PrintArguments`<p>${user.name} Hello world, salary \$${user.salary}!</p>`;


    /**
     * Internationalization?
     */

    var str = i18n`Hello ${name}, you have ${amount}:c(CAD) in your bank account.`
    // => Hallo Bob, Sie haben 1.234,56 $CA auf Ihrem Bankkonto.



    /**
     * Support loop function in template string
     */

    function HashTemplate(templateData){

    }

    var libraryHtml = HashTemplate`
        <ul>
            #for book in ${myBooks}
                <li><i>#{book.title}</i> by #{book.author}</li>
            #end
        </ul>
    `;


    /**
     * Support Markdown like this
     */

    To display a message, write ``alert(`hello world!`)``.


})(document, window);
