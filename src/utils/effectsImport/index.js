/*
 * @Author: caiwu
 * @Date: 2021-04-10 22:45:01
 * @Last Modified by: caiwu
 * @Last Modified time: 2021-04-19 00:31:07
 */
import efficts from './efficts'
import { SyncHook } from '../tapable/syncHook'
import { htmlLoader } from '@/utils/core'
import { resourceParser } from '@/utils/core'
import createSandbox from '@/utils/sandBox'

export default class EffectsImport {
  __hook__ = new SyncHook()
  __effcts__ = null
  __mounted__ = null
  __unmounted__ = null
  __beforeCreate__ = null
  __created__ = null
  __cache__ = {}
  __deactive__ = []
  constructor() {
    if (EffectsImport.prototype.Instance === void 0) {
      window.webpackJsonpLength = window.webpackJsonp.length
      this.initSyncHook()
      this.__hook__.call('createEffect', efficts)
      EffectsImport.prototype.Instance = this
    }
    return EffectsImport.prototype.Instance
  }
  exec(parseredResources, el) {
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

    createSandbox(parseredResources.scripts, window)
  }
  initSyncHook() {
    this.__hook__.tap('bootstrap', async (entry, option, el) => {
      let parseredResources = EffectsImport.prototype.Instance.__cache__[entry]
      if (parseredResources) {
        this.exec(parseredResources, el)
      } else {
        let resources = await htmlLoader(entry, option)
        console.log(resources)
        resourceParser(resources, entry, option, el, this).then((parseredResources) => {
          console.log(parseredResources)
          this.exec(parseredResources, el)
          EffectsImport.prototype.Instance.__cache__[entry] = parseredResources
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
  rollBcak(entry) {
    let parseredResources = EffectsImport.prototype.Instance.__cache__[entry]
    window.webpackJsonp.splice(webpackJsonpLength, window.webpackJsonp.length - webpackJsonpLength)
    for (let key in window._SANDBOX_WINDOW_) {
      window[key] = null
    }
    parseredResources.styles
      .filter((ele) => ele.__mounted__)
      .forEach((style) => {
        style.__mounted__ = false
        style.remove()
      })
    parseredResources.preLoads
      .filter((ele) => ele.__mounted__)
      .forEach((preLoad) => {
        preLoad.__mounted__ = false
        preLoad.remove()
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
        EffectsImport.prototype.Instance.__effcts__(data.default || data, entry, option, EffectsImport.prototype.Instance.__hook__)
        return data
      })
    }
  }
}
