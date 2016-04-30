import Booking from "../../model/booking"
import User from "../../model/user"
import state from "../../state"
import moment from "moment"
import defaultSettings from "../../configuration/defaultSettings"

export default {

  /**
   *
   * @returns {Promise}
   */
  getAllbookings() {
    return new Promise((resolve, reject) => {
    /*  // convert static format from api to more useful app format
      const parsedBookings = bookings.map(booking=> {
        const newBooking = new Booking(
          booking.id,
          state.loggedInUser,
          moment(booking.date),
          booking.durationMinutes,
          "foo")
        return newBooking
      })*/

      const bookings = []
      bookings.push(new Booking(
        1,
        "Nikos",
        moment().startOf("hour"),
        defaultSettings.bookingDurationMinutes,
        "additional info"
      ))

      resolve(bookings)
    })
  },

  /**
   * when the booking comes back from the server we give it its id
   * @param {User} user
   * @param isoDate
   * @param data
   * @returns {Promise}
   */
  saveBooking(user, isoDate, durationMinutes, additionalInfo) {
    return new Promise((resolve, reject) => {
      const newBooking = new Booking(
        Math.random() * 1000,      // fake id
        user,
        moment(isoDate),
        durationMinutes,
        additionalInfo)
      resolve(newBooking)
    })
  },

  /**
   *
   * @param username
   * @param password
   * @returns {Promise}
   */
  attemptLogin(username, password) {
    return new Promise((resolve, reject) => {
      const newBooking = new Booking(
        Math.random() * 1000,      // fake id
        user,
        moment(isoDate),
        durationMinutes,
        additionalInfo)
      resolve(newBooking)
    })
  },
}
