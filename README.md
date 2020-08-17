# hey-tools

[![Build Status](https://travis-ci.org/HEYAN123/hey-tools.svg?branch=master)](https://travis-ci.org/HEYAN123/hey-tools)

前端开发常用JS工具函数集合

## Instruction for Use

```bash
import HEY from 'hey-tools';
import { sayHello } from 'hey-tools';

HEY.sayHello();
sayHello();
```

## Function List

### v1.0.6

- paramsToStr 将请求参数对象转化为用于url拼接参数的字符串形式
- div 不丢失精度的除法
- mul 不丢失精度的乘法
- sub 不丢失精度的减法
- add 不丢失精度的加法
- formatDate 式化Date对象得到时间字符串
- getType 获取目标的具体类型字符串
- isEmpty 判断目标是否是空值（空值范围：null,undefined,{},'',[]）
- filterInvalidAttr 过滤掉对象中的空值（isEmpty方法标准），返回一个新对象
- parseMoneyOfFen 金额格式化：将以分为单位当金额格式化为两位小数和按千分位逗号分割的字符串
- printContent 打印输入的参数
- sayHey 打印“hey world!”

### v1.0.5

- div 不丢失精度的除法
- mul 不丢失精度的乘法
- sub 不丢失精度的减法
- add 不丢失精度的加法
- formatDate 式化Date对象得到时间字符串
- getType 获取目标的具体类型字符串
- isEmpty 判断目标是否是空值（空值范围：null,undefined,{},'',[]）
- filterInvalidAttr 过滤掉对象中的空值（isEmpty方法标准），返回一个新对象
- parseMoneyOfFen 金额格式化：将以分为单位当金额格式化为两位小数和按千分位逗号分割的字符串
- printContent 打印输入的参数
- sayHey 打印“hey world!”

### v1.0.3

- getType 获取目标的具体类型字符串
- isEmpty 判断目标是否是空值（空值范围：null,undefined,{},'',[]）
- filterInvalidAttr 过滤掉对象中的空值（isEmpty方法标准），返回一个新对象
- parseMoneyOfFen 金额格式化：将以分为单位当金额格式化为两位小数和按千分位逗号分割的字符串
- printContent 打印输入的参数
- sayHey 打印“hey world!”

### v1.0.2

- parseMoneyOfFen 金额格式化
- printContent 打印输入的参数
- sayHey 打印“hey world!”

### v1.0.0

- sayHello 打印“hey world!”字符串

## CHANGELOG

### v1.0.6

- 增加方法paramsToStr

### v1.0.5

- 增加方法formateDate,add,sub,div,mul

### v1.0.4

- 修复导致包引用无效的路径问题

### v1.0.3

- 增加filterInvalidAttr、isEmpty、getType方法及测试

### v1.0.2

- 配置ts和测试
- 模块开发配置
- 新增方法

### v1.0.1

- 补充changelog和readme

### v1.0.0

```2020-08-05```

- 初始化项目
- 初始第一个方法sayHello
