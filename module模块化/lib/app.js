'use strict';

var _m = require('./js/m1');

var _m2 = require('./js/m2');

var _m3 = require('./js/m3');

var _m4 = _interopRequireDefault(_m3);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 调用方法

// 默认暴露 接受方式（m3可能是对象或函数，看里面导出的是什么）
// 模块引入 
// 分别暴露 接受方式
(0, _m.show)();

// 引入第三方的模块插件

// 统一暴露 接受方式

(0, _m.say)();

(0, _m2.show2)();
(0, _m2.say2)();

_m4.default.show3();
_m4.default.say3();

// 使用juqery插件
(0, _jquery2.default)('body').css('background', 'green').css("color", "white");