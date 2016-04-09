import bookings from "./bookings.json"
import Booking from "../../model/booking"
import User from "../../model/user"
import moment from "moment"

export default {
  bookings() {
    // convert static format from api to more useful app format
    const parsedBookings = bookings.map(booking=> {
      const user = new User(booking.id, booking.username, booking.data)
      const newBooking = new Booking(booking.id, user, moment(booking.date), booking)
      return newBooking
    })
    return parsedBookings
  },

  /**
   * when the booking comes back from the server we give it its id
   * @param {User} user
   * @param date
   * @param dat
   */
  saveBooking(user, date, data){
    return new Promise((resolve, reject) => {
      // fake id
      const newBooking = new Booking(Math.random() * 1000, user, moment(date), data)
      resolve(newBooking)
    })
  },
}
