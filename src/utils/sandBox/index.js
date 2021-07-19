/*
 * @Description:
 * @Author: caiwu
 * @CreateDate:
 * @LastEditor:
 * @LastEditTime: 2021-07-19 16:47:36
 */
function compileCode(src) {
  src = `with (proxyObj){\n const window = this;\n ${src}\n}`
  return new Function('proxyObj', src)
}

function proxyObj(target) {
  let window = { webpackJsonp: null, webpackHotUpdate: null }
  let ignoreList = ['setTimeout', 'clearTimeout', 'setInterval', 'requestAnimationFrame', 'cancelAnimationFrame', 'addEventListener', 'getComputedStyle']
  let proxyObj = new Proxy(target, {
    get(target, key) {
      if (key === Symbol.unscopables) {
        return undefined
      }
      if(key==='WINDOW'){
        console.log('getter:', 'window.' + key)
      }
      if (ignoreList.includes(key)) {
        return Reflect.get(target, key).bind(null)
      }
      if (key === 'window' || key === 'self') {
        console.log('get window');
        return window
      }
      if (key === 'WINDOW') {
        console.log('get WINDOW');
        return target
      }
      if (key === 'webpackJsonp') {
        return Reflect.get(window, key)
      }
      if (key === 'webpackHotUpdate') {
        console.log(Reflect.get(target, key))
        return Reflect.get(target, key)
      }
      return Reflect.get(window, key) || Reflect.get(target, key)
    },
    set(target, key, value) {
      // console.log(`setter:${key}=${value}`)
      Reflect.set(window, key, value)
      return true
    },
    defineProperty: function(target, prop, descriptor) {
      !descriptor.writable && console.error('禁止子应用在window中定义writable为false的变量;这会造成子应用在第二次打开发生redefine错误')
      return Reflect.defineProperty(window, prop, descriptor)
    },
  })
  return proxyObj
}
export default function createSandbox(src, target) {
  let proxy = proxyObj(target)
  compileCode(src).call(proxy, proxy)
}
