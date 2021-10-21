/*
 * @Author: caiwu
 * @Date: 2021-04-10 22:49:03
 * @Last Modified by: caiwu
 * @Last Modified time: 2021-10-22 01:13:39
 */
import CustomError from '@/importor/error/index.js'
export class SyncHook {
  constructor(args) {
    this.args = args
    this.tasks = {}
  }
  tap(hookName, task) {
    if (!this.tasks[hookName]) {
      this.tasks[hookName] = task
    } else {
      throw CustomError(
        'SyncHookTapError',
        `A SyncHook named ${hookName} already exists, But you can run Instance.remove(hookName) before defining it `
      )
    }
  }
  call(hookName, ...args) {
    if (!this.tasks[hookName]) {
      throw new CustomError('SyncHookCallError', `The SyncHook named ${hookName} not exists;`)
    }
    if (this.args) {
      if (args.length < this.args.length) {
        throw new CustomError(
          'SyncHookCallError',
          `${this.args.length} arguments required;but ${args.length} provided`
        )
      }
      args = args.slice(0, this.args.length)
    }
    this.tasks[hookName](...args)
  }
  remove(hookName) {
    if (!this.tasks[hookName]) {
      throw new CustomError('SyncHookCallError', `The SyncHook named ${hookName} not exists;`)
    }
    this.tasks[hookName] = null
  }
}
