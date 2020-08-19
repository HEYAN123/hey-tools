/**
 * 判断目标是否是空值（包括null,undefined,{},'',[]）
 *
 * @param {*} target 需要判断的任何类型目标
 * @returns 是否为空值的布尔值
 */
export declare const isEmpty: (target: any) => boolean;
/**
 * 判断目标的类型
 *
 * @param {*} target
 * @returns object,function,array,number,string,null,undefined,boolean,symbol,regexp,global,htmldocument,error,date
 */
export declare const getType: (target: any) => string;
declare const _default: {
    getType: (target: any) => string;
    isEmpty: (target: any) => boolean;
};
export default _default;
