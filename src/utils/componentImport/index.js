/*
 * @Author: caiwu
 * @Date: 2021-04-10 22:45:01
 * @Last Modified by: caiwu
 * @Last Modified time: 2021-08-27 01:15:55
 */
import { SyncHook } from '../hooks/syncHook'
import { htmlLoader, resourceParser } from '../core'
import defaultConfig from './config'
import exec from './exec'

export default class ComponentImport {
  syncHook = new SyncHook()
  initLifecycle = null
  mountedCb = null
  unmountedCb = null
  beforeCreateCb = null
  createdCb = null
  sourcesCache = {}
  constructor(config = {}) {
    let conf = Object.assign(defaultConfig, config)
    this.init(conf)
  }
  init(conf) {
    // 注入生命周期
    this.initLifecycle = conf.initLifecycle
    this.syncHook.tap('registerApp', conf.registerApp)
    this.syncHook.tap('bootstrap', async (entry, option, el, app) => {
      let parseredResources = this.sourcesCache[entry]
      if (parseredResources) {
        exec(parseredResources, el, app, entry, option, this.syncHook)
      } else {
        let resources = await htmlLoader(entry, option)
        console.log(resources);
        resourceParser(resources, entry, option, el, this).then((parseredResources) => {
          exec(parseredResources, el, app, entry, option, this.syncHook)
          this.sourcesCache[entry] = parseredResources
        })
      }
    })
    this.syncHook.tap('beforeCreateCb', (app, entry) => {
      this.beforeCreateCb && this.beforeCreateCb(app, entry)
    })
    this.syncHook.tap('createdCb', (app, entry) => {
      this.createdCb && this.createdCb(app, entry)
    })
    this.syncHook.tap('mountedCb', (app, entry) => {
      this.mountedCb && this.mountedCb(app, entry)
    })
    this.syncHook.tap('unmountedCb', (app, entry) => {
      this.rollBcak(entry)
      this.unmountedCb && this.unmountedCb(app, entry)
    })
    // 微应用创建之前
    this.syncHook.tap('beforeCreate', (fn) => {
      this.beforeCreateCb = fn
    })
    // 微应用创建但未挂载
    this.syncHook.tap('created', (fn) => {
      this.createdCb = fn
    })
    // 微应用已经挂载
    this.syncHook.tap('mounted', (fn) => {
      this.mountedCb = fn
    })
    // 微应用卸载
    this.syncHook.tap('unmounted', (fn) => {
      this.unmountedCb = fn
    })
  }
  rollBcak(entry) {
    let parseredResources = this.sourcesCache[entry] || {}
    ;(parseredResources.styles || [])
      .filter((ele) => ele.mountedCb)
      .forEach((style) => {
        style.mountedCb = false
        style.remove()
      })
    ;(parseredResources.preLoads || [])
      .filter((ele) => ele.mountedCb)
      .forEach((preLoad) => {
        preLoad.mountedCb = false
        preLoad.remove()
      })
  }
  on(targetName, ...args) {
    this.syncHook.call(targetName, ...args)
    return this
  }
  Import = function(component, entry, option) {
    // Return import without side effects if no entry is passed in
    if (!entry) {
      return component
    }
    if (component instanceof Promise) {
      return component.then((data) => {
        this.initLifecycle(data.default || data, entry, option, this.syncHook)
        return data
      })
    }else{
      this.initLifecycle(component,entry, option, this.syncHook)
      return component
    }
  }.bind(this)
}
