"use strict";
/*
 * @Author: heyan
 * @Date: 2020-08-05 14:22:26
 * @Last Modified by: heyan
 * @Last Modified time: 2020-08-11 18:21:36
 * 方法输出出口
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.formateDate = exports.filterInvalidAttr = exports.getType = exports.isEmpty = exports.mul = exports.div = exports.sub = exports.add = exports.parseMoneyOfFen = exports.printContent = exports.sayHey = void 0;
var print_1 = require("./libs/print");
var num_1 = require("./libs/num");
var power_js_1 = require("./libs/power-js");
var obj_1 = require("./libs/obj");
var time_1 = require("./libs/time");
exports.sayHey = print_1.default.sayHey;
exports.printContent = print_1.default.printContent;
exports.parseMoneyOfFen = num_1.default.parseMoneyOfFen;
exports.add = num_1.default.add;
exports.sub = num_1.default.sub;
exports.div = num_1.default.div;
exports.mul = num_1.default.mul;
exports.isEmpty = power_js_1.default.isEmpty;
exports.getType = power_js_1.default.getType;
exports.filterInvalidAttr = obj_1.default.filterInvalidAttr;
exports.formateDate = time_1.default.formatDate;
var HEY = {
    sayHey: exports.sayHey,
    printContent: exports.printContent,
    parseMoneyOfFen: exports.parseMoneyOfFen,
    add: exports.add,
    sub: exports.sub,
    div: exports.div,
    mul: exports.mul,
    isEmpty: exports.isEmpty,
    getType: exports.getType,
    filterInvalidAttr: exports.filterInvalidAttr,
    formateDate: exports.formateDate
};
exports.default = HEY;
