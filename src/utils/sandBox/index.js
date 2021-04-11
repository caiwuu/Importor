function compileCode(src) {
  src = `with (exposeObj) {
       ${src} 
    }`
  return new Function('exposeObj', src)
}

function proxyObj(originObj) {
  let exposeObj = new Proxy(originObj, {
    // has: (target, key) => {
    //   //   if (['console', 'Math', 'Date'].indexOf(key) >= 0) {
    //   //     return target[key]
    //   //   }
    //   //   if (!target.hasOwnProperty(key)) {
    //   //     throw new Error(`Illegal operation for key ${key}`)
    //   //   }
    //   return target[key]
    // },
  })
  return exposeObj
}

export default function createSandbox(src, originObj) {
  let proxy = proxyObj(originObj)
  compileCode(src).call(proxy, proxy) //绑定this 防止this访问window
}
