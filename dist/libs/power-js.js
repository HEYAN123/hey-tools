"use strict";
/*
 * @Author: heyan
 * @Date: 2020-08-07 11:24:56
 * @Last Modified by: heyan
 * @Last Modified time: 2020-08-07 15:24:18
 * js方法封装
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getType = exports.isEmpty = void 0;
var index_1 = require("../utils/index");
/**
 * 判断目标是否是空值（包括null,undefined,{},'',[]）
 *
 * @param {*} target 需要判断的任何类型目标
 * @returns 是否为空值的布尔值
 */
exports.isEmpty = function (target) {
    switch (exports.getType(target)) {
        case 'null':
        case 'undefined':
            return true;
        case 'string':
        case 'array':
            return target.length === 0 ? true : false;
        case 'object':
            return JSON.stringify(target) === '{}' ? true : false;
        default:
            return false;
    }
};
/**
 * 判断目标的类型
 *
 * @param {*} target
 * @returns object,function,array,number,string,null,undefined,boolean,symbol,regexp,global,htmldocument,errr,date
 */
exports.getType = function (target) {
    switch (typeof target) {
        case 'object':
            return index_1.getTypeOfObject(target);
        default:
            return typeof target;
    }
};
var funcs_powerjs = {
    getType: exports.getType,
    isEmpty: exports.isEmpty
};
exports.default = funcs_powerjs;
