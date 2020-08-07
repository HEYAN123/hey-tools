/*
 * @Author: heyan 
 * @Date: 2020-08-07 11:52:39 
 * @Last Modified by: heyan
 * @Last Modified time: 2020-08-07 13:42:20
 * 辅助函数
 */


export const getTypeOfObject = (obj:object) => {
  const typeArr = Object.prototype.toString.call(obj);
  return typeArr.split(' ')[1].split(']')[0].toLocaleLowerCase();
}