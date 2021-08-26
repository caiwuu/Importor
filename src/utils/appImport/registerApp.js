/*
 * @Description:
 * @Author: caiwu
 * @CreateDate:
 * @LastEditor:
 * @LastEditTime: 2021-08-26 17:12:52
 */
export default function registerApp(app, entry, option) {
  const activeRoute = option.activeRoute ? option.activeRoute : entry
  const prevRoute = window.location.hash.slice(2)
  if (prevRoute !== activeRoute) {
    app.$router.push(activeRoute)
    // setTimeout(() => {
    //   console.log(window.location.hash)
    //   console.log(window.location.hash + '/eeeee')
    //   const aaaa = `#/${prevRoute}/${activeRoute}`
    //   history.pushState({}, '', aaaa)
    // })
    // Promise.resolve().then(() => {
    //   console.log(window.location.hash)
    //   console.log(window.location.hash + '/eeeee')
    //   const aaaa = `#/${prevRoute}/${activeRoute}`
    //   history.pushState({}, '', aaaa)
    // })
  }
}
