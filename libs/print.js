"use strict";
/*
 * @Author: heyan
 * @Date: 2020-08-06 09:43:15
 * @Last Modified by: heyan
 * @Last Modified time: 2020-08-19 17:34:58
 * 控制台打印方法
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.printContent = exports.sayHey = void 0;
/**
 * 打印‘hey world！’字符串，用于简单的流程节点提示
 * @returns
 */
exports.sayHey = function () {
    console.log('hey world!');
    return true;
};
/**
 *  打印需要查看的的任何内容，显示名称和内容
 *
 * @param {*} content
 * @returns
 */
exports.printContent = function (content) {
    console.log(content.toString(), content);
    return true;
};
exports.default = {
    sayHey: exports.sayHey,
    printContent: exports.printContent
};
