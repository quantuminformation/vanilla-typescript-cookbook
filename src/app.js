import moment from 'moment'
import BookingCalender from './components/calendar/bookingCalender'
import mockApi from './api/mocks/mockApi'
import stateManager from './util/stateManager/stateManager'
import Header from './components/header/header'
import Login from './components/login/login'
import 'normalize.css'
import './styles/index.pcss'

function App() {

  this.hostElement = document.createElement('div')
  this.router = new Router()

  this.assembleCommonParts()

  chooseInitialRoute()

  this.stateManager = new StateManager()

}
App.prototype = {

  /**
   * dynamic stuff that is on every page, like login status and header //todo footer
   * allows us to have less maintenence of prod and dev html files
   */
  assembleCommonParts() {
    const header = new Header()

    document.body.appendChild(header.getElement())
    document.body.appendChild(mainContentElement)
    mainContentElement.id = 'main'
  },


  /**
   * The router expects an array of objects with the route and the content function
   */
  createRoutes(){
    let routes = [
      {
        route: '',
        contentFunction: () => this.hostElement.innerHTML = `<h1>Home</h1>
                                      <p>Welcome to examples of how to build an application using
                                        only vanillaJs
                                      </p>`
      },
      {
        route: 'bookings',
        contentFunction: () => {

          if (!stateManager.getState().bookings.length) {
            mockApi.getAllbookings().then(bookings => {
              state.bookings = bookings
              renderCalendar()
            })
          } else {
            renderCalendar()
          }
        }
      }
    ]
  }


}

// reused stuff
let bookingCalender

function renderCalendar() {
  if (!bookingCalender) {
    bookingCalender = new BookingCalender()
  }
  bookingCalender.switchToWeekView(moment().startOf('week'))
  mainContentElement.appendChild(bookingCalender.getElement())
}




