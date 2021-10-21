/*
 * @Description:
 * @Author: caiwu
 * @CreateDate:
 * @LastEditor:
 * @LastEditTime: 2021-07-16 17:10:43
 */
import uuid from '@/importor/utils/uuid.js'
export default async function resourceParser(resources, entry, option, el, ctx) {
  let preLoads, styles, scripts
  const preLoadScript = resources.preLoads.filter((ele) => /.*\.js$/.test(ele.href))
  preLoads = dealPreloads(resources.preLoads, el)
  styles = await dealStyles(resources.styles, option, el)
  scripts = await dealScripts([...preLoadScript, ...resources.scripts])
  return { preLoads, styles, template: resources.template, scripts }
}
function dealScripts(scripts) {
  let promiseList = []
  scripts.forEach((ele) => {
    promiseList.push(
      ele.innerHTML
        ? ele.innerHTML
        : fetch(ele.src || ele.href)
            .then((res) => res.text())
            .then((data) => data)
            .catch((error) => {
              throw new Error('dealScripts error:', error)
            })
    )
  })

  return Promise.all(promiseList).then((res) => {
    let code
    code = res.join(';\n')
    return code
  })
}
function dealStyles(styles, option, el) {
  let styleList = []
  if (!option.cssScope) {
    styles.forEach((ele) => {
      let style
      if (typeof ele === 'string') {
        style = document.createElement('style')
        style.innerHTML = ele
      } else {
        style = document.createElement('link')
        style = Object.assign(style, ele)
      }
    })
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
              .catch((error) => {
                throw new Error('dealStyles error:', error)
              })
      )
    })

    return Promise.all(promiseList).then((res) => {
      let innerHTML, className, style
      className = typeof option.cssScope === 'string' ? option.cssScope : 'u' + uuid()
      el.classList.add(className)
      innerHTML = res.join('')
      style = document.createElement('style')
      const reg = /(\s*)([\.|#]?.*?)(\s*{\s*[^\}]*?\s*\})/g
      innerHTML = innerHTML.replace(reg, (match, $1, $2, $3) => {
        if ($2 === 'body') $2 = ''
        return `${$1} .${className} ${$2} ${$3}`
      })
      style.innerHTML = innerHTML
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
    ele.__mounted__ = true
    links.push(link)
    fragment.appendChild(link)
  })
  document.head.appendChild(fragment)
  return links
}
