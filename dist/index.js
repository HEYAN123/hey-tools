"use strict";
/*
 * @Author: heyan
 * @Date: 2020-08-05 14:22:26
 * @Last Modified by: heyan
 * @Last Modified time: 2020-08-06 14:00:35
 * 方法输出出口
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMoneyOfFen = exports.printContent = exports.sayHey = void 0;
var print_1 = require("./funcs/print");
var num_1 = require("./funcs/num");
exports.sayHey = print_1.default.sayHey;
exports.printContent = print_1.default.printContent;
exports.parseMoneyOfFen = num_1.default.parseMoneyOfFen;
var HEY = {
    sayHey: exports.sayHey,
    printContent: exports.printContent,
    parseMoneyOfFen: exports.parseMoneyOfFen
};
exports.default = HEY;
