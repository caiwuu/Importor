/*
 * @Author: caiwu
 * @Date: 2021-04-10 22:47:07
 * @Last Modified by: caiwu
 * @Last Modified time: 2021-08-27 01:17:56
 */
export default function initLifecycle(vueOptions, entry, option, hook) {
  let { created, mounted, destroyed } = vueOptions
  vueOptions.beforeCreate.push(function() {
    this.$nextTick(() => {
      hook.call('bootstrap', entry, option, this.$el, this)
    })
    hook.call('beforeCreateCb', this, entry)
  })
  vueOptions.created = async function() {
    created && created.call(this)
    hook.call('createdCb', this, entry)
  }
  vueOptions.mounted = function() {
    mounted && mounted.call(this)
    hook.call('mountedCb', this, entry)
  }
  vueOptions.destroyed = function() {
    destroyed && destroyed.call(this)
    hook.call('unmountedCb', this, entry)
  }
}
