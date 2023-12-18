"use strict";
exports.__esModule = true;
exports.emp = void 0;
var emp = /** @class */ (function () {
    function emp() {
        this.empname = " ";
        this.empid = 0;
        this.designation = "";
        this.salary = 0;
    }
    emp.prototype.setvalue = function (emp_name, emp_id, designation, salary) {
        this.empname = emp_name;
        this.empid = emp_id;
        this.designation = designation;
    };
    emp.prototype.print = function () {
        console.log("employee name:" + this.empname + " designation:" + this.designation);
    };
    return emp;
}());
exports.emp = emp;
