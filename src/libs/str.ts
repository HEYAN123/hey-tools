/*
 * @Author: heyan 
 * @Date: 2020-08-06 10:44:57 
 * @Last Modified by: heyan
 * @Last Modified time: 2020-08-19 17:39:12
 * 字符串处理方法
 */

import { filterInvalidAttr } from './obj';

/**
 * @description 将请求参数对象转化为用于url拼接参数的字符串形式
 *
 * @param {object} obj
 * @returns {string}
 */
export const paramsToStr = (obj: object): string => {
  const obj_v = filterInvalidAttr(obj);
  const keyArr = Object.keys(obj_v);
  let res = '';
  if(keyArr.length === 0) return res;
  for (let index = 0; index < keyArr.length; index++) {
    if(index === 0) res += `?${keyArr[index]}=${obj_v[keyArr[index]]}`;
    else {
      res += `&${keyArr[index]}=${obj_v[keyArr[index]]}`;
    }
  }
  return res;
}

export default {
  paramsToStr,
};