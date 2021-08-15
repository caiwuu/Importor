/*
 * @Description:
 * @Author: caiwu
 * @CreateDate:
 * @LastEditor:
 * @LastEditTime: 2021-07-20 11:11:32
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
  let proxyTarget = new Proxy(target, {
    get(target, key) {
      if (key === Symbol.unscopables) {
        return undefined
      }
      if (ignoreList.includes(key)) {
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
