import moment from "moment"
import BookingCalender from "./components/calendar/bookingCalender"
import mockApi from "./api/mocks/mockApi"
import state from "./state"
import Header from "./components/header/header"
import Login from "./components/login/login"
import "node_modules/normalize.css/normalize.css"
import "./styles/index.less!"

// reused stuff
const mainContentElement = document.createElement("div")
let bookingCalender

/**
 * dynamic stuff that is on every page, like login status and header //todo footer
 * allows us to have less maintenence of prod and dev html files
 */
function assembleCommonParts() {
  const header = new Header()

  document.body.appendChild(header.getElement())
  document.body.appendChild(mainContentElement)
  mainContentElement.id = "main"
}

function renderHomePage() {
  mainContentElement.innerHTML = `<h1>Home</h1>
                                      <p>Welcome to examples of how to build an application using
                                        only vanillaJs
                                      </p>`
}


assembleCommonParts()


window.addEventListener("hashchange", updateBasedOnLocation);
function navigateToInitialRoute() {
  window.location = "#"
}
function renderCalendar() {
  if (!bookingCalender) {
    bookingCalender = new BookingCalender()
  }
  bookingCalender.switchToWeekView(moment().startOf("week"))
  mainContentElement.appendChild(bookingCalender.getElement())
}

function updateBasedOnLocation() {
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
          renderCalendar()
        })
      } else {
        renderCalendar()
      }
      break
    }
    default:
    {
      renderHomePage()
    }
  }

}
// navigateToInitialRoute()
updateBasedOnLocation()
