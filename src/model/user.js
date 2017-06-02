/**
 * Generic booking object
 */

export default class User {
  /**
   * @param {int} id
   * @param {string} username this is an email address //todo use social logins
   * @param data ad-hoc data that is not essential to the user domain ( it may contain and id
   * and date but they will not be used)
   */
  constructor (id, username, data) {
    this.id = id
    this.username = username
    this.data = data
  }

  toString () {
    return `${this.username}`
  }
}
