/*
 * @Author: heyan 
 * @Date: 2020-08-06 10:43:50 
 * @Last Modified by: heyan
 * @Last Modified time: 2020-08-06 19:24:56
 */


'use strict';
const expect = require('chai').expect;
const parseMoneyOfFen = require('../dist/index').parseMoneyOfFen;

describe('funcs_parseMoneyOfFen', () => {
  it('应该输出千分位分割和两位小数的字符串', () => {
    const result = parseMoneyOfFen(12345, '--');
    expect(result).to.equal('123.45');
  });
});