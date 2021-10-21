/*
 * @Author: caiwu
 * @Date: 2021-04-10 22:48:51
 * @Last Modified by:   caiwu
 * @Last Modified time: 2021-04-10 22:48:51
 */
export default class customError extends Error {
  constructor(name, message) {
    super(message)
    this.name = name
    Error.captureStackTrace(this, this.constructor)
  }
}
