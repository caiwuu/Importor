/*
 * @Author: caiwu
 * @Date: 2021-04-10 22:48:13
 * @Last Modified by: caiwu
 * @Last Modified time: 2021-08-29 23:58:39
 */
export default function htmlLoader(entry, option) {
  let defaultOpt = {
    origin: window.location.origin,
    cssScope: false,
    proxy: false,
    activeRoute: '',
    prefix: '',
    pathRewrite: {
      '': '',
    },
  }
  defaultOpt = Object.assign(defaultOpt, option)
  let entryUrl = defaultOpt.proxy ? entry : defaultOpt.origin
  return fetch(entryUrl)
    .then((res) => res.text())
    .then((data) => {
      let parser = new DOMParser()
      let dom = parser.parseFromString(data, 'text/html')
      console.log(dom.head.children)
      return domAnalysis(entry, dom, defaultOpt)
    })
}
// dom analysis
function domAnalysis(entry, dom, defaultOpt) {
  let result = { scripts: [], styles: [], template: null, preLoads: [] }
  scriptPicker(entry, dom, result, defaultOpt)
  stylePicker(entry, dom, result, defaultOpt)
  templatePicker(dom, result, defaultOpt)
  return result
}
// pcik scripts from htmlEntry
function scriptPicker(entry, dom, result, defaultOpt) {
  let scripts = dom.querySelectorAll('script')
  let origin = window.location.origin.replace(/\//g, '\\/')
  let reg = new RegExp(`(${origin})*(.*)`)
  result.scripts = Array.from(scripts).map((ele) => {
    ele.remove()
    let src = ele.src.replace(reg, '$2')
    return {
      src: markPath(src, entry, defaultOpt),
      defer: ele.defer,
      async: ele.async,
      innerHTML: ele.innerHTML,
    }
  })
}
// pcik styles from htmlEntry
function stylePicker(entry, dom, result, defaultOpt) {
  let styles = Array.from(dom.head.children).filter((ele) => ['LINK', 'STYLE'].includes(ele.tagName))
  let origin = window.location.origin.replace(/\//g, '\\/')
  let reg = new RegExp(`(${origin})*(.*)`)
  styles.map((ele) => {
    if (ele.tagName === 'LINK') {
      let href = ele.href.replace(reg, '$2')
      if (ele.rel === 'stylesheet') {
        result.styles.push({
          href: markPath(href, entry, defaultOpt),
          rel: ele.rel,
        })
      } else {
        result.preLoads.push({
          href: markPath(href, entry, defaultOpt),
          rel: ele.rel,
          as: ele.as,
          sizes: ele.sizes.value,
        })
      }
    } else {
      result.styles.push(ele.innerHTML)
    }
    ele.remove()
  })
}
// pcik template from htmlEntry
function templatePicker(dom, result) {
  let childNodes = Array.from(dom.body.childNodes)
  result.template = childNodes
}

function markPath(src, entry, defaultOpt) {
  if (src) {
    if (/^http(s){0,1}/.test(src)) {
      return src
    } else {
      const prefix = defaultOpt.prefix === undefined || defaultOpt.prefix === null ? entry : defaultOpt.prefix
      const replaceKey = Object.keys(defaultOpt.pathRewrite)[0] || '',
        replaceValue = Object.values(defaultOpt.pathRewrite)[0] || ''
      return defaultOpt.proxy ? prefix + src : defaultOpt.origin + src.replace(replaceKey, replaceValue)
    }
  } else {
    return null
  }
}
