/*
 * @Author: heyan 
 * @Date: 2020-08-05 14:22:26 
 * @Last Modified by: heyan
 * @Last Modified time: 2020-08-07 15:27:36
 * 方法输出出口
 */

import funcs_print from './libs/print';
import funcs_num from './libs/num';
import funcs_powerjs from './libs/power-js';
import funcs_obj from './libs/obj';


export const sayHey = funcs_print.sayHey;
export const printContent = funcs_print.printContent;

export const parseMoneyOfFen = funcs_num.parseMoneyOfFen;

export const isEmpty = funcs_powerjs.isEmpty;
export const getType = funcs_powerjs.getType;

export const filterInvalidAttr = funcs_obj.filterInvalidAttr;

const HEY = {
  sayHey,
  printContent,
  parseMoneyOfFen,
  isEmpty,
  getType,
  filterInvalidAttr,
}

export default HEY;