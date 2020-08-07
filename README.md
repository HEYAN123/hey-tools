# hey-tools

[![Build Status](https://travis-ci.org/HEYAN123/hey-tools.svg?branch=master)](https://travis-ci.org/HEYAN123/hey-tools)

前端开发常用JS工具函数集合

## 使用方法

```bash
import HEY from 'hey-tools';
import { sayHello } from 'hey-tools';

HEY.sayHello();
sayHello();
```

## 方法列表

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
