/*
 * @Author: caiwu
 * @Date: 2021-04-10 22:45:01
 * @Last Modified by: caiwu
 * @Last Modified time: 2021-04-11 21:06:04
 */
import efficts from './efficts'
import { SyncHook } from '../tapable/syncHook'
import { htmlLoader } from '@/utils/core'
import { resourceParser } from '@/utils/core'

export default class EffectsImport {
  __hook__ = new SyncHook()
  __effcts__ = null
  __mounted__ = null
  __unmounted__ = null
  __beforeCreate__ = null
  __created__ = null
  __cache__ = {}
  __deactive__ = []
  // __bootstrap__ = null
  constructor() {
    if (EffectsImport.prototype.Instance === void 0) {
      this.initSyncHook()
      this.__hook__.call('createEffect', efficts)
      EffectsImport.prototype.Instance = this
    }
    return EffectsImport.prototype.Instance
  }
  initSyncHook() {
    this.__hook__.tap('bootstrap', async (entry, option, el) => {
      let resources = await htmlLoader(entry, option)
      resourceParser(resources, entry, option, el, this).then((data) => {
        console.log(data)
        EffectsImport.prototype.Instance.__cache__['entry'] = data
      })
      console.log(resources)
    })
    this.__hook__.tap('execBeforeCreate', (app) => {
      this.__beforeCreate__ && this.__beforeCreate__(app)
    })
    this.__hook__.tap('execCreated', (app) => {
      this.__created__ && this.__created__(app)
    })
    this.__hook__.tap('execMounted', (app) => {
      this.__mounted__ && this.__mounted__(app)
    })
    this.__hook__.tap('execUnmounted', (app) => {
      this.__unmounted__ && this.__unmounted__(app)
    })
    // lifeCycle
    this.__hook__.tap('createEffect', (fn) => {
      this.__effcts__ = fn
    })
    this.__hook__.tap('beforeCreate', (fn) => {
      this.__beforeCreate__ = fn
    })
    this.__hook__.tap('created', (fn) => {
      this.__created__ = fn
    })
    this.__hook__.tap('mounted', (fn) => {
      this.__mounted__ = fn
    })
    this.__hook__.tap('unmounted', (fn) => {
      this.__unmounted__ = fn
    })
  }
  tap(targetName, ...args) {
    this.__hook__.call(targetName, ...args)
    return this
  }
  effectsImport(component, entry, option) {
    // Return import without side effects if no entry is passed in
    if (!entry) {
      return component
    }
    if (component instanceof Promise) {
      return component.then((data) => {
        EffectsImport.prototype.Instance.__effcts__(
          data.default || data,
          entry,
          option,
          EffectsImport.prototype.Instance.__hook__
        )
        return data
      })
    }
  }
}
