import moment from "moment"
import BookingCalender from "./components/calendar/bookingCalender"
import mockApi from "../../api/mocks/mockApi"
import Booking from "./model/booking"
import "node_modules/normalize.css/normalize.css"
import "./styles/index.less!"

// convert static format from api to more useful app format
const parsedBookings = mockApi.bookings().map(booking=> {
  const newBooking = new Booking(booking.id, moment(booking.date), booking)
  return newBooking
})

const mainContentElement = document.getElementById("main")

const bookingCalender = new BookingCalender()
mainContentElement.appendChild(bookingCalender.getElement())

// bookingCalender.switchToWeekView(moment().startOf("week"), parsedBookings)
bookingCalender.switchToWeekView(moment("2016/03/20", "YYYY/MM/DD").startOf("week"), parsedBookings)
