import moment from "moment"
import BookingCalender from "./components/calendar/bookingCalender"
import mockApi from "./api/mocks/mockApi"
import Booking from "./model/booking"
import LoginInfo from "./components/loginInfo/loginInfo"
import "node_modules/normalize.css/normalize.css"
import "./styles/index.less!"

//todo have top level state to mamnage the bookings so as to fit in a more real world 
// application

const mainContentElement = document.getElementById("main")

const bookingCalender = new BookingCalender()
mainContentElement.appendChild(bookingCalender.getElement())

// bookingCalender.switchToWeekView(moment().startOf("week"), parsedBookings)
bookingCalender.switchToWeekView(moment("2016/03/20", "YYYY/MM/DD").startOf("week"), mockApi.bookings())

assembleCommonParts()

/**
 * stuff that is on every page, like login status
 */
function assembleCommonParts() {
  const loginInfo = new LoginInfo()
}
