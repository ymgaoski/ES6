'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.show = show;
exports.say = say;
// 分别暴露
function show() {
  console.log('show', '分别暴露');
}

function say() {
  console.log('say', '分别暴露');
}