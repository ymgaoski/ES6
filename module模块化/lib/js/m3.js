'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 默认暴露
function show3() {
  console.log('show', '默认暴露');
}

function say3() {
  console.log('say', '默认暴露');
}

// export {
//   show:show,
//   say:say
// }

// default只能一个，默认导出是什么就是什么，导出对象外面就是对象，导出函数外面就是函数
exports.default = {
  show3: show3,
  say3: say3
};