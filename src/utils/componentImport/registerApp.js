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
  }
}
