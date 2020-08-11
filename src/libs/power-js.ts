/*
 * @Author: heyan 
 * @Date: 2020-08-07 11:24:56 
 * @Last Modified by: heyan
 * @Last Modified time: 2020-08-11 13:49:51
 * js方法封装
 */

import { getTypeOfObject } from '../utils/index';

/**
 * 判断目标是否是空值（包括null,undefined,{},'',[]）
 *
 * @param {*} target 需要判断的任何类型目标
 * @returns 是否为空值的布尔值
 */
export const isEmpty = (target:any) => {
  switch (getType(target)) {
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
}

/**
 * 判断目标的类型
 *
 * @param {*} target
 * @returns object,function,array,number,string,null,undefined,boolean,symbol,regexp,global,htmldocument,error,date
 */
export const getType = (target:any) => {
  switch (typeof target) {
    case 'object':
      return getTypeOfObject(target);
    default:
      return typeof target;
  }
}

const funcs_powerjs = {
  getType,
  isEmpty
}


export default funcs_powerjs;
