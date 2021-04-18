function compileCode(src) {
  src = `with (proxyObj){\n let window = this;\n ${src}\n}`
  return new Function('proxyObj', src)
}

function proxyObj(target) {
  target._SANDBOX_WINDOW_ = {}
  let proxyObj = new Proxy(target, {
    get(target, key) {
      let ignoreList = [
        'setTimeout',
        'clearTimeout',
        'setInterval',
        'requestAnimationFrame',
        'cancelAnimationFrame',
        'addEventListener',
        'getComputedStyle',
      ]
      if (ignoreList.includes(key)) {
        return Reflect.get(target, key).bind(null)
      }
      if (key === 'window' || key === '_SANDBOX_WINDOW_') {
        return target['_SANDBOX_WINDOW_']
      }
      return Reflect.get(target._SANDBOX_WINDOW_, key) || Reflect.get(target, key)
    },
    set(target, key, value) {
      console.log(`======set====${key}:${value}`)
      let ignoreList = ['webpackJsonp']
      Reflect.set(target, key, value)
      if (!ignoreList.includes(key)) Reflect.set(target._SANDBOX_WINDOW_, key, value)
      return true
    },
    defineProperty: function(target, prop, descriptor) {
      !descriptor.writable && console.error('禁止子应用在window中定义writable为false的变量;这会子应用在第二次打开发生redefine错误')
      Reflect.defineProperty(target, prop, descriptor)
      return true
    },
  })
  return proxyObj
}

export default function createSandbox(src, target) {
  target.customWindow = {}
  let proxy = proxyObj(target)
  compileCode(src).call(proxy, proxy)
}
