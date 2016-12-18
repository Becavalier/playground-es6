let {add,  minus} = require("./modules/calc.js");
let $ = require("jquery");

let result = add(1, 2);

$("#text").html(`Result is ${result}`);
