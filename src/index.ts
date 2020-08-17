/*
 * @Author: heyan 
 * @Date: 2020-08-05 14:22:26 
 * @Last Modified by: heyan
 * @Last Modified time: 2020-08-17 16:11:22
 * 方法输出出口
 */

import funcs_print from './libs/print';
import funcs_num from './libs/num';
import funcs_powerjs from './libs/power-js';
import funcs_obj from './libs/obj';
import funcs_time from './libs/time';
import funcs_str from './libs/str';


export const sayHey = funcs_print.sayHey;
export const printContent = funcs_print.printContent;

export const parseMoneyOfFen = funcs_num.parseMoneyOfFen;
export const add = funcs_num.add;
export const sub = funcs_num.sub;
export const div = funcs_num.div;
export const mul = funcs_num.mul;

export const isEmpty = funcs_powerjs.isEmpty;
export const getType = funcs_powerjs.getType;

export const filterInvalidAttr = funcs_obj.filterInvalidAttr;

export const formateDate = funcs_time.formatDate;

export const paramsToStr = funcs_str.paramsToStr;

const HEY = {
  sayHey,
  printContent,
  parseMoneyOfFen,
  add,
  sub,
  div,
  mul,
  isEmpty,
  getType,
  filterInvalidAttr,
  formateDate,
  paramsToStr
}

export default HEY;