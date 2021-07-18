/*
 * @Author: caiwu
 * @Date: 2021-04-10 22:45:01
 * @Last Modified by: caiwu
 * @Last Modified time: 2021-07-18 21:19:52
 */
import lifeCycle from './lifeCycle'
import { SyncHook } from '../tapable/syncHook'
import { htmlLoader } from '@/utils/core'
import { resourceParser } from '@/utils/core'
import exec from './exec'

export default class AppImport {
  __hook__ = new SyncHook()
  __bootstrap__ = null
  __mounted__ = null
  __unmounted__ = null
  __beforeCreate__ = null
  __created__ = null
  __cache__ = {}
  __deactive__ = []
  constructor(liftCycle = lifeCycle) {
    window.webpackJsonpLength = window.webpackJsonp.length
    this.init()
    // 注入生命周期（vue）
    this.on('registerLifeCycle', liftCycle)
  }
  init() {
    this.__hook__.tap('bootstrap', async (entry, option, el) => {
      let parseredResources = this.__cache__[entry]
      if (parseredResources) {
        exec(parseredResources, el)
      } else {
        let resources = await htmlLoader(entry, option)
        console.log(resources)
        resourceParser(resources, entry, option, el, this).then((parseredResources) => {
          exec(parseredResources, el)
          this.__cache__[entry] = parseredResources
        })
      }
    })
    this.__hook__.tap('execBeforeCreate', (app, entry) => {
      this.__beforeCreate__ && this.__beforeCreate__(app, entry)
    })
    this.__hook__.tap('execCreated', (app, entry) => {
      this.__created__ && this.__created__(app, entry)
    })
    this.__hook__.tap('execMounted', (app, entry) => {
      this.__mounted__ && this.__mounted__(app, entry)
    })
    this.__hook__.tap('execUnmounted', (app, entry) => {
      this.rollBcak(entry)
      this.__unmounted__ && this.__unmounted__(app, entry)
    })
    // 副作用钩子,框架相关、平台相关的代码通过该钩子注入
    this.__hook__.tap('registerLifeCycle', (fn) => {
      this.__bootstrap__ = fn
    })
    // 微应用创建之前
    this.__hook__.tap('beforeCreate', (fn) => {
      this.__beforeCreate__ = fn
    })
    // 微应用创建但为挂载
    this.__hook__.tap('created', (fn) => {
      this.__created__ = fn
    })
    // 微应用已经挂载
    this.__hook__.tap('mounted', (fn) => {
      this.__mounted__ = fn
    })
    // 微应用卸载
    this.__hook__.tap('unmounted', (fn) => {
      this.__unmounted__ = fn
    })
  }
  // 运行时状态回滚;恢复为运行时环境变量
  rollBcak(entry) {
    let parseredResources = this.__cache__[entry] || {}
    ;(parseredResources.styles || [])
      .filter((ele) => ele.__mounted__)
      .forEach((style) => {
        style.__mounted__ = false
        style.remove()
      })
    ;(parseredResources.preLoads || [])
      .filter((ele) => ele.__mounted__)
      .forEach((preLoad) => {
        preLoad.__mounted__ = false
        preLoad.remove()
      })
  }
  on(targetName, ...args) {
    this.__hook__.call(targetName, ...args)
    return this
  }
  appImport = function(component, entry, option) {
    // Return import without side effects if no entry is passed in
    if (!entry) {
      return component
    }
    if (component instanceof Promise) {
      return component.then((data) => {
        this.__bootstrap__(data.default || data, entry, option, this.__hook__)
        return data
      })
    }
  }.bind(this)
}
