"use strict";
/*
 * @Author: heyan
 * @Date: 2020-08-05 14:22:26
 * @Last Modified by: heyan
 * @Last Modified time: 2020-08-07 15:27:36
 * 方法输出出口
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterInvalidAttr = exports.getType = exports.isEmpty = exports.parseMoneyOfFen = exports.printContent = exports.sayHey = void 0;
var print_1 = require("./libs/print");
var num_1 = require("./libs/num");
var power_js_1 = require("./libs/power-js");
var obj_1 = require("./libs/obj");
exports.sayHey = print_1.default.sayHey;
exports.printContent = print_1.default.printContent;
exports.parseMoneyOfFen = num_1.default.parseMoneyOfFen;
exports.isEmpty = power_js_1.default.isEmpty;
exports.getType = power_js_1.default.getType;
exports.filterInvalidAttr = obj_1.default.filterInvalidAttr;
var HEY = {
    sayHey: exports.sayHey,
    printContent: exports.printContent,
    parseMoneyOfFen: exports.parseMoneyOfFen,
    isEmpty: exports.isEmpty,
    getType: exports.getType,
    filterInvalidAttr: exports.filterInvalidAttr,
};
exports.default = HEY;
