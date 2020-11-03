'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 统一暴露
function show2() {
  console.log('show', '统一暴露');
}

function say2() {
  console.log('say', '统一暴露');
}

// export {
//   show:show,
//   say:say
// }

// ES6 JSON简写
exports.show2 = show2;
exports.say2 = say2;