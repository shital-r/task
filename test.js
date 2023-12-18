"use strict";
exports.__esModule = true;
var emp_1 = require("./class/emp");
var add_1 = require("./function/add");
var obj = new emp_1.emp();
obj.setvalue("mike", 1, "angular developer", 20000);
obj.print();
(0, add_1.add)(2, 2);
