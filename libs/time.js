"use strict";
/*
 * @Author: heyan
 * @Date: 2020-08-11 13:50:08
 * @Last Modified by: heyan
 * @Last Modified time: 2020-08-19 17:39:23
 * 时间相关
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
/**
 * @description 格式化Date对象得到时间字符串
 *
 * @param {Date} [date=new Date()] 需要格式化的Date对象
 * @returns "YY-MM-DD hh:mm:ss"
 */
exports.formatDate = function (date) {
    if (date === void 0) { date = new Date(); }
    var year = date.getFullYear();
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : String(date.getMonth() + 1);
    var day = date.getDate() < 10 ? "0" + date.getDate() : String(date.getDate());
    var hour = date.getHours() < 10 ? "0" + date.getHours() : String(date.getHours());
    var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : String(date.getMinutes());
    var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : String(date.getSeconds());
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
};
exports.default = {
    formatDate: exports.formatDate
};
