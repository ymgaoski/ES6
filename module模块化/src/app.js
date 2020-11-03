// 模块引入 
// 分别暴露 接受方式
import {show,say} from './js/m1'
// 统一暴露 接受方式
import {show2,say2} from './js/m2'
// 默认暴露 接受方式（m3可能是对象或函数，看里面导出的是什么）
import m3 from './js/m3'

// 引入第三方的模块插件
import $ from 'jquery'


// 调用方法
show();
say();

show2();
say2();

m3.show3();
m3.say3();

// 使用juqery插件
$('body').css('background','green').css("color","white");
