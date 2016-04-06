/**
 * Generic booking object
 */

export default class Booking {

  /**
   * @param {int} id
   * @param {moment} date
   * @param data ad-hoc data that is not essential to the booking domain ( it may contain and id
   * and date but they will not be used)
   */
  constructor(id, userId, date, data) {
    this.id = id
    this.userId = userId
    this.date = date
    this.data = data
  }

  toString() {
    return `${this.date.toString()} ${this.data.user.name}`
  }
}
