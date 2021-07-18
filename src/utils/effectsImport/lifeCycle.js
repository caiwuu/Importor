/*
 * @Author: caiwu
 * @Date: 2021-04-10 22:47:07
 * @Last Modified by: caiwu
 * @Last Modified time: 2021-07-18 16:36:01
 */
export default function lifeCycle(vueOptions, entry, option, hook) {
  let created = vueOptions.created
  let mounted = vueOptions.mounted
  let destroyed = vueOptions.destroyed
  vueOptions.beforeCreate.push(function() {
    this.$nextTick(() => {
      hook.call('bootstrap', entry, option, this.$el)
    })
    hook.call('execBeforeCreate', this, entry)
  })
  vueOptions.created = async function() {
    created && created.call(this)
    hook.call('execCreated', this, entry)
  }
  vueOptions.mounted = function() {
    mounted && mounted.call(this)
    hook.call('execMounted', this, entry)
  }
  vueOptions.destroyed = function() {
    destroyed && destroyed.call(this)
    hook.call('execUnmounted', this, entry)
  }
}
