import moment from "moment"
import BookingCalender from "./components/calendar/bookingCalender"
import mockApi from "./api/mocks/mockApi"
import state from "./state"
import LoginInfo from "./components/loginInfo/loginInfo"
import Header from "./components/header/header"
import Login from "./components/login/login"
import "node_modules/normalize.css/normalize.css"
import "./styles/index.less!"

// reused stuff
const mainContentElement = document.createElement("div")
const bookingCalender = new BookingCalender()


/**
 * dynamic stuff that is on every page, like login status and header //todo footer
 * allows us to have less maintenence of prod and dev html files
 */
function assembleCommonParts() {
  const header = new Header()
  const loginInfo = new LoginInfo()

  document.body.appendChild(header.getElement())
  document.body.appendChild(loginInfo.getElement())
  document.body.appendChild(mainContentElement)
  mainContentElement.id = "main"
}


assembleCommonParts()

const onhashchange = function () {
  mainContentElement.innerHTML = ""   // clear content


  switch (window.location.hash) {

    case "#login":
    {
      const login = new Login()
      mainContentElement.appendChild(login.getElement())
      break;
    }
    case "#bookings":
    {
      if (!state.bookings.length) {
        mockApi.getAllbookings().then(bookings => {
          state.bookings = bookings
        })
      }
      bookingCalender.switchToWeekView(moment().startOf("week"))
      mainContentElement.appendChild(bookingCalender.getElement())
      break
    }
    default:
    {
      mainContentElement.innerHTML = "<h1>Home page</h1>"
    }
  }
};

window.addEventListener("hashchange", onhashchange);
function navigateToInitialRoute() {
  window.location = "#"
}
navigateToInitialRoute()

