import uuid from '@/utils/utils/uuid'
import createSandbox from '@/utils/sandBox'
export default async function resourceParser(resources, entry, option, el, ctx) {
  let preLoads, styles, scripts
  el.appendChild(resources.template)
  preLoads = dealPreloads(resources.preLoads, el)
  styles = await dealStyles(resources.styles, option, el)
  scripts = await dealScripts(resources.scripts)
  return { preLoads, styles, template: resources.template, scripts }
}
function dealScripts(scripts) {
  let promiseList = []
  scripts.forEach((ele) => {
    promiseList.push(
      ele.innerHTML
        ? ele.innerHTML
        : fetch(ele.src)
            .then((res) => res.text())
            .then((data) => data)
    )
  })

  return Promise.all(promiseList).then((res) => {
    let code
    code = res.join(';\n')
    // console.log(code)
    console.log(window)
    // createSandbox(code, window)
    Function(code)()
    return code
  })
}
function dealStyles(styles, option, el) {
  let styleList = []
  if (!option.cssScope) {
    let fragment = document.createDocumentFragment()
    styles.forEach((ele) => {
      let style
      if (typeof ele === 'string') {
        style = document.createElement('style')
        style.innerHTML = ele
      } else {
        style = document.createElement('link')
        style = Object.assign(style, ele)
      }
      styleList.push(style)
      fragment.appendChild(style)
    })
    document.head.appendChild(fragment)
    return styleList
  } else {
    let promiseList = []
    styles.forEach((ele) => {
      promiseList.push(
        typeof ele === 'string'
          ? ele
          : fetch(ele.href)
              .then((res) => res.text())
              .then((data) => data)
      )
    })

    return Promise.all(promiseList).then((res) => {
      console.log(res)
      let innerHTML, className, style
      className = typeof option.cssScope === 'string' ? option.cssScope : uuid()
      //   innerHTML = `.${className}{${res.join('')}}`
      innerHTML = res.join('')
      style = document.createElement('style')
      style.innerHTML = innerHTML
      el.classList.add(className)
      document.head.appendChild(style)
      return [style]
    })
  }
}
function dealPreloads(preLoads) {
  let fragment = document.createDocumentFragment()
  let links = []
  preLoads.forEach((ele) => {
    let link = document.createElement('link')
    link = Object.assign(link, ele)
    links.push(link)
    fragment.appendChild(link)
  })
  document.head.appendChild(fragment)
  return links
}
