/**
 * @description 不丢失精度的加法
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
export declare const add: (num1: number, num2: number) => number;
/**
 * @description 不丢失精度的减法
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
export declare const sub: (num1: number, num2: number) => number;
/**
 * @description 将以分为单位当金额格式化为两位小数和按千分位逗号分割的字符串
 *
 * @param {(string | number)} money 以分为单位的金额字符串或数字
 * @param {(string | number)} placeholder 值无效时候的替换内容
 * @returns
 */
export declare const parseMoneyOfFen: (money: string | number, placeholder: string | number) => string | number;
declare const funcs_num: {
    parseMoneyOfFen: (money: string | number, placeholder: string | number) => string | number;
    add: (num1: number, num2: number) => number;
    sub: (num1: number, num2: number) => number;
    div: (num1: number, num2: number) => number;
    mul: (num1: number, num2: number) => number;
};
export default funcs_num;
