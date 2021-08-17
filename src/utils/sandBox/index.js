/*
 * @Description:
 * @Author: caiwu
 * @CreateDate:
 * @LastEditor:
 * @LastEditTime: 2021-08-17 23:14:39
 */
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g
const reIsNative = RegExp(`^${
  Function.prototype.toString.call(Object.prototype.hasOwnProperty)
    .replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?')
}$`)
const initCode = `const window = this;const self = this;`

function isFunction(value) {
  const type = typeof value
  return value != null && type === 'function'
}
function isNative(value) {
  return isFunction(value) && reIsNative.test(value)
}
function execCode(src) {
  src = `with (proxyTarget){\n ${initCode}\n${src}\n}`
  return new Function('proxyTarget', src)
}

function proxyTarget(target, app, entry, option, hook) {
  let window = {
    webpackJsonp: null,
    webpackHotUpdate: null,
    __BaseApp__: app,
    __isSandBox__: true,
    registerApp: (childApp) => {
      hook.call('registerApp', childApp, entry, option)
    },
  }
  let ignoreList = [
    'Object',
    'eval',
    'String',
    'Number',
    'Function',
    'Array',
    'Promise',
    'Date'
  ]
  let proxyTarget = new Proxy(target, {
    get(target, key) {
      if (key === Symbol.unscopables) {
        return undefined
      }
      if (ignoreList.includes(key)) {
        return Reflect.get(target, key)
      }
      const value = Reflect.get(target, key)
      if(isNative(value)){
        return Reflect.get(target, key).bind(null)
      }
      if (key === 'window' || key === 'self') {
        return window
      }
      if (key === 'WINDOW') {
        return target
      }
      if (key === 'webpackJsonp') {
        return Reflect.get(window, key)
      }
      if (key === 'webpackHotUpdate') {
        return Reflect.get(target, key)
      }
      return Reflect.get(window, key) || Reflect.get(target, key)
    },
    has(target, key) {
      return true
    },
    set(target, key, value) {
      Reflect.set(window, key, value)
      return true
    },
    defineProperty: function(target, prop, descriptor) {
      return Reflect.defineProperty(window, prop, descriptor)
    },
  })
  return proxyTarget
}
export default function createSandbox(src, target, app, entry, option, hook) {
  let proxy = proxyTarget(target, app, entry, option, hook)
  execCode(src).call(proxy, proxy)
}
