"use strict";
/*
 * @Author: heyan
 * @Date: 2020-08-06 10:47:04
 * @Last Modified by: heyan
 * @Last Modified time: 2020-08-07 15:26:30
 * object处理方法
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterInvalidAttr = void 0;
var power_js_1 = require("./power-js");
/**
 * 过滤掉对象中的空值，返回一个新对象
 * 空值包括：undefined,null,'',{},[]
 *
 * @param {object} obj
 * @returns {object}
 */
exports.filterInvalidAttr = function (obj) {
    var result = {};
    for (var key in obj) {
        if (!power_js_1.isEmpty(obj[key])) {
            result[key] = obj[key];
        }
    }
    return result;
};
var funcs_obj = {
    filterInvalidAttr: exports.filterInvalidAttr
};
exports.default = funcs_obj;
