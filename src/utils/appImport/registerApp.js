/*
 * @Description: 
 * @Author: caiwu
 * @CreateDate: 
 * @LastEditor: 
 * @LastEditTime: 2021-07-27 11:09:48
 */
export default function registerApp(app, entry, option) {
  const activeMenu = option.active ? option.active : entry
  if (window.location.hash.slice(2) !== activeMenu) {
    app.$router.push(activeMenu)
  }
}
