/*
 * @Author: heyan 
 * @Date: 2020-08-06 09:43:15 
 * @Last Modified by: heyan
 * @Last Modified time: 2020-08-19 17:34:58
 * 控制台打印方法
 */

/**
 * 打印‘hey world！’字符串，用于简单的流程节点提示
 * @returns
 */
export const sayHey = () => {
  console.log('hey world!');
  return true;
}

/**
 *  打印需要查看的的任何内容，显示名称和内容
 *
 * @param {*} content
 * @returns
 */
export const printContent = (content: any) => {
  console.log(content.toString(), content);
  return true;
}

export default {
  sayHey,
  printContent
};
