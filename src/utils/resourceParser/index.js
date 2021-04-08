/*
 * @Description:
 * @Author: caiwu
 * @CreateDate:
 * @LastEditor:
 * @LastEditTime: 2021-04-08 19:45:23
 */

export default function importHtml(url, option) {
  let defaultOpt = {
    origin: window.location.origin,
    cssScope: false,
  }
  defaultOpt = Object.assign(defaultOpt, option)
  return fetch(url)
    .then((res) => res.text())
    .then((data) => {
      let parser = new DOMParser()
      let dom = parser.parseFromString(data, 'text/html')
      return domAnalysis(dom, defaultOpt)
    })
}
// dom analysis
function domAnalysis(dom, defaultOpt) {
  let result = { scripts: [], styles: [], template: null, preLoads: [] }
  scriptPicker(dom, result, defaultOpt)
  stylePicker(dom, result, defaultOpt)
  templatePicker(dom, result, defaultOpt)
  return result
}
// pcik scripts from htmlEntry
function scriptPicker(dom, result, defaultOpt) {
  let scripts = dom.querySelectorAll('script')
  let origin = window.location.origin.replace(/\//g, '\\/')
  let reg = new RegExp(`(${origin})*(.*)`)
  result.scripts = Array.from(scripts).map((ele) => {
    ele.remove()
    let src = ele.src.replace(reg, '$2')
    return {
      src: src ? defaultOpt.origin + src : null,
      defer: ele.defer,
      async: ele.async,
      innerHTML: ele.innerHTML,
    }
  })
}
// pcik styles from htmlEntry
function stylePicker(dom, result, defaultOpt) {
  let styles = Array.from(dom.head.childNodes).filter((ele) => ['LINK', 'STYLE'].includes(ele.tagName))
  let origin = window.location.origin.replace(/\//g, '\\/')
  let reg = new RegExp(`(${origin})*(.*)`)
  styles.map((ele) => {
    if (ele.tagName === 'LINK') {
      let href = ele.href.replace(reg, '$2')
      if (ele.rel === 'stylesheet') {
        result.styles.push({
          href: defaultOpt.origin + href || null,
          rel: ele.rel,
        })
      } else {
        result.preLoads.push({
          href: defaultOpt.origin + href || null,
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
function templatePicker(dom, result, defaultOpt) {
  let fragment = document.createDocumentFragment()
  let childNodes = Array.from(dom.body.childNodes)
  let node
  while ((node = childNodes.shift())) {
    fragment.appendChild(node)
  }
  result.template = fragment
}
