/*
 * @Author: heyan 
 * @Date: 2020-08-05 14:22:26 
 * @Last Modified by: heyan
 * @Last Modified time: 2020-08-06 14:00:35
 * 方法输出出口
 */

import funcs_print from './funcs/print'
import funcs_num from './funcs/num'


export const sayHey = funcs_print.sayHey;
export const printContent = funcs_print.printContent;

export const parseMoneyOfFen = funcs_num.parseMoneyOfFen;

const HEY = {
  sayHey,
  printContent,
  parseMoneyOfFen
}

export default HEY;