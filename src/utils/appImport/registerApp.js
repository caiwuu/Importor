export default function registerApp(subapp, entry, option) {
  const activeMenu = option.active ? option.active : entry
  if (window.location.hash.slice(2) !== activeMenu) {
    subapp.$router.push(activeMenu)
  }
}
