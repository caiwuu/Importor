/*
 * @Description:
 * @Author: caiwu
 * @CreateDate:
 * @LastEditor:
 * @LastEditTime: 2021-08-25 17:22:04
 */
import isNative from '../utils/isNative'

const initCode = `const window = this;const self = this;`
function execCode(code) {
  code = `with (proxyTarget){\n ${initCode}\n${code}\n}`
  return new Function('proxyTarget', code)
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
    'Date',
    'RegExp'
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
export default function createSandbox(code, target = window || this || self, app = {}, entry, option= {}, hook) {
  let proxy = proxyTarget(target, app, entry, option, hook)
  execCode(code).call(proxy, proxy)
}
