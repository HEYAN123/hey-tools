/*
 * @Author: heyan 
 * @Date: 2020-08-06 10:43:50 
 * @Last Modified by: heyan
 * @Last Modified time: 2020-08-06 20:27:41
 */


'use strict';
const chai = require('chai');
const parseMoneyOfFen = require('../dist/index').parseMoneyOfFen;

chai.should();

describe('funcs_num_parseMoneyOfFen 返回值测试', () => {
  it('各种入参情况返回正确', () => {
    parseMoneyOfFen(12345, '--').should.equal('123.45');
    parseMoneyOfFen('12345', '--').should.equal('123.45');
    parseMoneyOfFen(12300, '--').should.equal('123.00');
    parseMoneyOfFen(undefined, '--').should.equal('--');
    parseMoneyOfFen(null, '--').should.equal('--');
    parseMoneyOfFen('hdiufhisdf', '--').should.equal('--');
    parseMoneyOfFen({}, '--').should.equal('--');
  });
});