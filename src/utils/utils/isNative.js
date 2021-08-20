/*
 * @Description: 
 * @Author: caiwu
 * @CreateDate: 
 * @LastEditor: 
 * @LastEditTime: 2021-08-20 11:20:17
 */
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g
const reIsNative = RegExp(`^${
  Function.prototype.toString.call(Object.prototype.hasOwnProperty)
    .replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?')
}$`)
function isFunction(value) {
  const type = typeof value
  return value != null && type === 'function'
}
export default function isNative(value) {
  return isFunction(value) && reIsNative.test(value)
}