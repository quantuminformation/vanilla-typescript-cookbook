import moment from "moment"
import BookingCalender from "./components/calendar/bookingCalender"
import mockApi from "./api/mocks/mockApi"
import state from "./state"
import LoginInfo from "./components/loginInfo/loginInfo"
import "node_modules/normalize.css/normalize.css"
import "./styles/index.less!"


/**
 * stuff that is on every page, like login status
 */
function assembleCommonParts() {
  const loginInfo = new LoginInfo()
}

function getStartupData() {
  const loginInfo = new LoginInfo()
  mockApi.getAllbookings().then(bookings => {
    state.bookings = bookings
    bookingCalender.switchToWeekView(moment("2016/03/20", "YYYY/MM/DD").startOf("week"))
  })
}

const mainContentElement = document.getElementById("main")
const bookingCalender = new BookingCalender()
mainContentElement.appendChild(bookingCalender.getElement())

assembleCommonParts()
getStartupData()

