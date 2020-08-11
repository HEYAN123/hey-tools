"use strict";
/*
 * @Author: heyan
 * @Date: 2020-08-06 10:45:28
 * @Last Modified by: heyan
 * @Last Modified time: 2020-08-11 18:38:30
 * 数字处理方法
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMoneyOfFen = exports.sub = exports.add = void 0;
/**
 * @description 不丢失精度的加法
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
exports.add = function (num1, num2) {
    var r1, r2, m;
    try {
        // num1小数部分长度
        r1 = num1.toString().split('.')[1].length;
    }
    catch (err) {
        r1 = 0;
    }
    try {
        // num2小数部分长度
        r2 = num2.toString().split('.')[1].length;
    }
    catch (err) {
        r2 = 0;
    }
    // 指数
    m = Math.pow(10, Math.max(r1, r2));
    // 进位取整然后相加
    return Math.round(num1 * m + num2 * m) / m;
};
/**
 * @description 不丢失精度的减法
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
exports.sub = function (num1, num2) {
    var r1, r2, m, n;
    try {
        r1 = num1.toString().split('.')[1].length;
    }
    catch (err) {
        r1 = 0;
    }
    try {
        r2 = num2.toString().split('.')[1].length;
    }
    catch (err) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    n = r1 > r2 ? r1 : r2;
    return Number((Math.round(num1 * m - num2 * m) / m).toFixed(n));
};
/**
 * @description 不丢失精度的除法
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
var div = function (num1, num2) {
    var t1, t2, r1, r2;
    try {
        r1 = num1.toString().split('.')[1].length;
    }
    catch (err) {
        r1 = 0;
    }
    try {
        r2 = num2.toString().split('.')[1].length;
    }
    catch (err) {
        r2 = 0;
    }
    t1 = Number(num1.toString().replace('.', ''));
    t2 = Number(num2.toString().replace('.', ''));
    return (t1 / t2) * Math.pow(10, r2 - r1);
};
/**
 * @description 不丢失精度的乘法
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
var mul = function (num1, num2) {
    var m, s1, s2;
    m = 0;
    s1 = num1.toString();
    s2 = num2.toString();
    try {
        m += s1.split('.')[1].length;
    }
    catch (err) { }
    try {
        m += s2.split('.')[1].length;
    }
    catch (err) { }
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
};
/**
 * @description 将以分为单位当金额格式化为两位小数和按千分位逗号分割的字符串
 *
 * @param {(string | number)} money 以分为单位的金额字符串或数字
 * @param {(string | number)} placeholder 值无效时候的替换内容
 * @returns
 */
exports.parseMoneyOfFen = function (money, placeholder) {
    // 当money无效，返回占位内容
    if ((money !== 0 && !money) || isNaN(Number(money))) {
        return placeholder;
    }
    // 转换为数字类型
    var money_num = Number(money);
    // 转换为元单位小数值
    var num_yuan = div(money_num, 100);
    var str_yuan = String(num_yuan);
    var dot_index = str_yuan.indexOf('.');
    if (dot_index < 0) {
        dot_index = str_yuan.length;
        str_yuan += '.00';
    }
    return str_yuan.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};
var funcs_num = {
    parseMoneyOfFen: exports.parseMoneyOfFen,
    add: exports.add,
    sub: exports.sub,
    div: div,
    mul: mul
};
exports.default = funcs_num;
