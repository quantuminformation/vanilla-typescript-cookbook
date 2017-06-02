/**
 * Generic booking object
 */

export default class Booking {
  /**
   * @param {int} id the booking id
   * @param {User} the user
   * @param {moment} date
   * @param {string} additionalInfo extra info for the booking)
   */
  constructor (id, user, date, durationMinutes, additionalInfo) {
    this.id = id
    this.user = user
    this.date = date
    this.durationMinutes = durationMinutes
    this.additionalInfo = additionalInfo
  }

  toString () {
    return `${this.date.toString()} ${this.data.user.name}`
  }
}
