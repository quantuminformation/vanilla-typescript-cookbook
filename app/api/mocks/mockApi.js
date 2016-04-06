import bookings from "./bookings.json"
import Booking from "../../model/booking"
import moment from "moment"

export default {
  bookings() {
    return bookings
  },

  /**
   * when the booking comes back from the server we give it its id
   * @param userId
   * @param date
   * @param dat
   */
  saveBooking(userId, date, data){
    return new Promise((resolve, reject) => {
      // fake id 
      const newBooking = new Booking(Math.random() * 1000, userId, moment(date), data)
      resolve(newBooking)
    })
  },
}
