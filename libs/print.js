"use strict";
/*
 * @Author: heyan
 * @Date: 2020-08-06 09:43:15
 * @Last Modified by: heyan
 * @Last Modified time: 2020-08-06 10:14:49
 * 控制台打印方法
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 打印‘hey world！’字符串，用于简单的流程节点提示
 * @returns
 */
var sayHey = function () {
    console.log('hey world!');
    return true;
};
/**
 *  打印需要查看的的任何内容，显示名称和内容
 *
 * @param {*} content
 * @returns
 */
var printContent = function (content) {
    console.log(content.toString(), content);
    return true;
};
var funcs_print = {
    sayHey: sayHey,
    printContent: printContent
};
exports.default = funcs_print;
