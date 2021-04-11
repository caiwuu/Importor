/*
 * @Author: caiwu
 * @Date: 2021-04-10 22:49:03
 * @Last Modified by: caiwu
 * @Last Modified time: 2021-04-11 00:07:53
 */
import CustomError from '@/utils/error'
export class AsyncHook {
  constructor(args) {
    this.args = args
    this.tasks = {}
  }
  tap(hookName, task) {
    if (!this.tasks[hookName]) {
      this.tasks[hookName] = task
    } else {
      throw CustomError(
        'AsyncHookTapError',
        `A AsyncHook named ${hookName} already exists, But you can run Instance.remove(hookName) before defining it `
      )
    }
  }
  call(hookName, ...args) {
    if (!this.tasks[hookName]) {
      throw new CustomError('AsyncHookCallError', `The AsyncHook named ${hookName} not exists;`)
    }
    let done
    if (this.args) {
      if (args.length < this.args.length) {
        throw new CustomError(
          'AsyncHookCallError',
          `${this.args.length} arguments required;but ${args.length} provided`
        )
      }
      done = args.pop()
      args = args.slice(0, this.args.length)
    } else {
      done = args.pop()
    }
    if (!done) {
      throw new CustomError('AsyncHookCallError', `arguments 'done' is required`)
    }
    this.tasks[hookName](...args, done)
  }
  remove(hookName) {
    if (!this.tasks[hookName]) {
      throw new CustomError('AsyncHookCallError', `The AsyncHook named ${hookName} not exists;`)
    }
    this.tasks[hookName] = null
  }
}
