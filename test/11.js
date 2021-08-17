/*
 * @Description: 
 * @Author: caiwu
 * @CreateDate: 
 * @LastEditor: 
 * @LastEditTime: 2021-08-17 21:02:05
 */
function isFunction(value) {
  const type = typeof value
  return value != null && type === 'function'
}

const reIsNative = RegExp(`^${
  Function.prototype.toString.call(Object.prototype.hasOwnProperty)
    .replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?')
}$`)
function isNative(value) {
  return isFunction(value) && reIsNative.test(value)
}
