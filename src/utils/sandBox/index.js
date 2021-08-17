/*
 * @Description:
 * @Author: caiwu
 * @CreateDate:
 * @LastEditor:
 * @LastEditTime: 2021-08-17 21:16:02
 */

const initCode = `const window = this;const self = this;`

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
    'setTimeout',
    'clearTimeout',
    'setInterval',
    'requestAnimationFrame',
    'cancelAnimationFrame',
    'addEventListener',
    'getComputedStyle',
    'postMessage',
  ]
  let ignoreList2 = [
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
      if (ignoreList2.includes(key)) {
        return Reflect.get(target, key)
      }
      const value = Reflect.get(target, key)
      if(isNative(value)){
        console.log(key);
        console.log(value.toString());
        return Reflect.get(target, key).bind(null)
      }
      // if (ignoreList.includes(key)) {
      //   return Reflect.get(target, key).bind(null)
      // }
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
      !descriptor.writable && console.error('禁止子应用在window中定义writable为false的变量;这会造成子应用在第二次打开发生redefine错误')
      return Reflect.defineProperty(window, prop, descriptor)
    },
  })
  return proxyTarget
}
export default function createSandbox(src, target, app, entry, option, hook) {
  let proxy = proxyTarget(target, app, entry, option, hook)
  execCode(src).call(proxy, proxy)
}

const reRegExpChar = /[\\^$.*+?()[\]{}|]/g

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
