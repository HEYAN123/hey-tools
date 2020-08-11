/*
 * @Author: heyan 
 * @Date: 2020-08-06 10:47:04 
 * @Last Modified by: heyan
 * @Last Modified time: 2020-08-11 14:22:15
 * object处理方法
 */

import { isEmpty } from './power-js'

/**
 * 过滤掉对象中的空值，返回一个新对象
 * 空值包括：undefined,null,'',{},[]
 *
 * @param {object} obj
 * @returns {object}
 */
export const filterInvalidAttr = (obj:object): object => {
  let result = {};
  for (let key in obj) {
    if (!isEmpty(obj[key])) {
      result[key] = obj[key];
    }
  }
  return result;
}

const funcs_obj = {
  filterInvalidAttr
}

export default funcs_obj;