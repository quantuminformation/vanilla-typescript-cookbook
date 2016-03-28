import moment from "moment"
import BookingCalender from "./components/calendar/bookingCalender"
import "node_modules/normalize.css/normalize.css"
import "./styles/index.less!"

const mainContentElement = document.getElementById("main")

const bookingCalender = new BookingCalender()
mainContentElement.appendChild(bookingCalender.getElement())
bookingCalender.switchToWeekView(moment().startOf("week"))
