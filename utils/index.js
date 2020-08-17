"use strict";
/*
 * @Author: heyan
 * @Date: 2020-08-07 11:52:39
 * @Last Modified by: heyan
 * @Last Modified time: 2020-08-17 16:11:18
 * 辅助函数
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeOfObject = void 0;
/**
 * @description 解析出Object.prototype.toString.call方法返回的类型字符串
 *
 * @param {object} obj
 * @returns
 */
exports.getTypeOfObject = function (obj) {
    var typeArr = Object.prototype.toString.call(obj);
    return typeArr.split(' ')[1].split(']')[0].toLocaleLowerCase();
};
