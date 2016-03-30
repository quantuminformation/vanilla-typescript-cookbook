import moment from "moment"
import BookingCalender from "./components/calendar/bookingCalender"
import mockApi from "../../api/mocks/mockApi"
import "node_modules/normalize.css/normalize.css"
import "./styles/index.less!"

// convert static format from api to more useful app format
const parsedBookings = mockApi.bookings().map(booking=> {
  booking.date = moment(booking.date)
  return booking
})

const mainContentElement = document.getElementById("main")

const bookingCalender = new BookingCalender()
mainContentElement.appendChild(bookingCalender.getElement())

// bookingCalender.switchToWeekView(moment().startOf("week"), parsedBookings)
bookingCalender.switchToWeekView(moment("2016/03/20", "YYYY/MM/DD").startOf("week"), parsedBookings)
