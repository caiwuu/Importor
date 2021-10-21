import createSandbox from '@/importor/sandBox/index.js'
export default function exec(parseredResources, el, app, entry, option, hook) {
  console.log(parseredResources)
  let fragment = document.createDocumentFragment(),
    templateFragment = document.createDocumentFragment()
  parseredResources.template.forEach((childNode) => {
    templateFragment.appendChild(childNode)
  })
  el.appendChild(templateFragment)
  parseredResources.styles
    .filter((ele) => !ele.__mounted__)
    .forEach((style) => {
      style.__mounted__ = true
      fragment.appendChild(style)
    })
  parseredResources.preLoads
    .filter((ele) => !ele.__mounted__)
    .forEach((preLoad) => {
      preLoad.__mounted__ = true
      fragment.appendChild(preLoad)
    })
  document.head.appendChild(fragment)
  createSandbox(parseredResources.scripts, window, app, entry, option, hook)
}
