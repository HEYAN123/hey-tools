/*
 * @Author: heyan 
 * @Date: 2020-08-06 10:43:50 
 * @Last Modified by: heyan
 * @Last Modified time: 2020-08-11 19:49:51
 */


'use strict';
const chai = require('chai');
const parseMoneyOfFen = require('../dist/index').parseMoneyOfFen;
const add = require('../dist/index').add;
const div = require('../dist/index').div;
const sub = require('../dist/index').sub;
const mul = require('../dist/index').mul;
const isEmpty = require('../dist/index').isEmpty;
const getType = require('../dist/index').getType;
const filterInvalidAttr = require('../dist/index').filterInvalidAttr;

chai.should();

describe('funcs_num 测试', () => {
  describe('parseMoneyOfFen', () => {
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
  describe('add 加法计算测试',() => {
    it('计算后精度正确', () => {
      add(1.01, 1.02).should.equal(2.03);
    });
  });
  // describe('div 除法计算测试',() => {
  //   it('计算后精度正确', () => {
  //     div(9.12, 100).should.equal(0.0912);
  //   });
  // });
  // describe('sub 减法计算测试',() => {
  //   it('计算后精度正确', () => {
  //     div(9.12, 100).should.equal(0.0912);
  //   });
  // });
});

describe('funcs_powerjs 测试', () => {
  describe('isEmpty 各种情况判断结果正确', () => {
    it('0, false', () => {
      isEmpty(0).should.equal(false);
    });
    it('{name: "heyan"}, false', () => {
      isEmpty({ name: 'heyan' }).should.equal(false);
    });
    it('[1], false', () => {
      isEmpty([1]).should.equal(false);
    });
    it('字符串, false', () => {
      isEmpty('abc').should.equal(false);
    });
    it('空字符串, true', () => {
      isEmpty('').should.equal(true);
    });
    it('{}, true', () => {
      isEmpty({}).should.equal(true);
    });
    it('[], true', () => {
      isEmpty({}).should.equal(true);
    });
    it('null, true', () => {
      isEmpty(null).should.equal(true);
    });
    it('undefined, true', () => {
      isEmpty(undefined).should.equal(true);
    });
  });
  describe('getType 各种类型判断正确', () => {
    it('{}, object', () => {
      getType({}).should.equal('object')
    });
    it('[], array', () => {
      getType([]).should.equal('array')
    });
  });
});

describe('funcs_obj 返回值测试', () => {
  it('filterInvalidAttr 返回属性全部有效的对象', () => {
    JSON.stringify(filterInvalidAttr({ name: '', age: 16 })).should.equal(JSON.stringify({ age: 16 }));
    JSON.stringify(filterInvalidAttr({ name: null, age: 16 })).should.equal(JSON.stringify({ age: 16 }));
    JSON.stringify(filterInvalidAttr({ name: undefined, age: 16 })).should.equal(JSON.stringify({ age: 16 }));
    JSON.stringify(filterInvalidAttr({ name: [], age: 16 })).should.equal(JSON.stringify({ age: 16 }));
    JSON.stringify(filterInvalidAttr({ name: {}, age: 16 })).should.equal(JSON.stringify({ age: 16 }));
    JSON.stringify(filterInvalidAttr({ name: 0, age: 16 })).should.equal(JSON.stringify({ name: 0, age: 16 }));
    JSON.stringify(filterInvalidAttr({ name: 'hhh', age: 16 })).should.equal(JSON.stringify({ name: 'hhh', age: 16 }));
  });
});