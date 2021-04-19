/*
 * @Author: caiwu
 * @Date: 2021-04-10 22:48:13
 * @Last Modified by: caiwu
 * @Last Modified time: 2021-04-20 00:06:37
 */

export default function htmlLoader(entry, option) {
  let defaultOpt = {
    origin: window.location.origin,
    cssScope: false,
    proxy: true,
  }
  defaultOpt = Object.assign(defaultOpt, option)
  return fetch(entry)
    .then((res) => res.text())
    .then((data) => {
      let parser = new DOMParser()
      let dom = parser.parseFromString(data, 'text/html')
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
      src: src ? (/^http(s){0,1}/.test(src) ? src : (defaultOpt.proxy ? entry : defaultOpt.origin) + src) : null,
      defer: ele.defer,
      async: ele.async,
      innerHTML: ele.innerHTML,
    }
  })
}
// pcik styles from htmlEntry
function stylePicker(entry, dom, result, defaultOpt) {
  let styles = Array.from(dom.head.childNodes).filter((ele) => ['LINK', 'STYLE'].includes(ele.tagName))
  let origin = window.location.origin.replace(/\//g, '\\/')
  let reg = new RegExp(`(${origin})*(.*)`)
  styles.map((ele) => {
    if (ele.tagName === 'LINK') {
      let href = ele.href.replace(reg, '$2')
      if (ele.rel === 'stylesheet') {
        result.styles.push({
          href: /^http(s){0,1}/.test(href) ? href : (defaultOpt.proxy ? entry : defaultOpt.origin) + href || null,
          rel: ele.rel,
        })
      } else {
        result.preLoads.push({
          href: /^http(s){0,1}/.test(href) ? href : (defaultOpt.proxy ? entry : defaultOpt.origin) + href || null,
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
  let fragment = document.createDocumentFragment()
  let childNodes = Array.from(dom.body.childNodes)
  result.template = childNodes
}
