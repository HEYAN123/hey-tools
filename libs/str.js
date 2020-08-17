"use strict";
/*
 * @Author: heyan
 * @Date: 2020-08-06 10:44:57
 * @Last Modified by:   heyan
 * @Last Modified time: 2020-08-06 10:44:57
 * 字符串处理方法
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.paramsToStr = void 0;
var obj_1 = require("./obj");
/**
 * @description 将请求参数对象转化为用于url拼接参数的字符串形式
 *
 * @param {object} obj
 * @returns {string}
 */
exports.paramsToStr = function (obj) {
    var obj_v = obj_1.filterInvalidAttr(obj);
    var keyArr = Object.keys(obj_v);
    var res = '';
    if (keyArr.length === 0)
        return res;
    for (var index = 0; index < keyArr.length; index++) {
        if (index === 0)
            res += "?" + keyArr[index] + "=" + obj_v[keyArr[index]];
        else {
            res += "&" + keyArr[index] + "=" + obj_v[keyArr[index]];
        }
    }
    return res;
};
var funcs_str = {
    paramsToStr: exports.paramsToStr,
};
exports.default = funcs_str;
