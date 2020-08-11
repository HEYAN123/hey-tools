/*
 * @Author: heyan 
 * @Date: 2020-08-11 13:50:08 
 * @Last Modified by: heyan
 * @Last Modified time: 2020-08-11 18:36:45
 * 时间相关
 */


/**
 * @description 格式化Date对象得到时间字符串
 *
 * @param {Date} [date=new Date()] 需要格式化的Date对象
 * @returns "YY-MM-DD hh:mm:ss"
 */
export const formatDate = (date: Date = new Date()): string => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : String(date.getMonth() + 1);
  let day = date.getDate() < 10 ? `0${date.getDate()}` : String(date.getDate());
  let hour = date.getHours() < 10 ? `0${date.getHours()}` : String(date.getHours());
  let minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : String(date.getMinutes());
  let second = date.getSeconds() < 10 ? `0${date.getSeconds()}` : String(date.getSeconds());
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}


const funcs_time = {
  formatDate
}

export default funcs_time;