"use strict";
/*
 * @Author: heyan
 * @Date: 2020-08-06 10:45:28
 * @Last Modified by: heyan
 * @Last Modified time: 2020-08-06 14:01:18
 * 数字处理方法
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 将以分为单位当金额格式化为两位小数和按千分位逗号分割的字符串
 *
 * @param {(string | number)} money 以分为单位的金额字符串或数字
 * @param {(string | number)} placeholder 值无效时候的替换内容
 * @returns
 */
var parseMoneyOfFen = function (money, placeholder) {
    // 当money无效，返回占位内容
    if ((money !== 0 && !money) || Number.isNaN(Number(money))) {
        return placeholder;
    }
    // 转换为数字类型
    var money_num = Number(money);
    // 转换为元单位小数值
    var num_yuan = money_num / 100;
    var str_yuan = String(num_yuan);
    var dot_index = str_yuan.indexOf('.');
    if (dot_index < 0) {
        dot_index = str_yuan.length;
        str_yuan += '.00';
    }
    return str_yuan.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};
var funcs_num = {
    parseMoneyOfFen: parseMoneyOfFen
};
exports.default = funcs_num;
