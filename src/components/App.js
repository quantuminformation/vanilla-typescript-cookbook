import moment from 'moment'
import BookingCalender from './calendar/bookingCalender'
import mockApi from '../api/mocks/mockApi'
import stateManager from '../util/stateManager/stateManager'
import Header from './header/header'
import Login from './login/login'
import 'normalize.css'
import '../styles/index.pcss'

/**
 * @param selector
 * @constructor
 */
function App(selector) {

  this.hostElement = document.querySelector(selector)
  this.router = new Router()

  this.assembleCommonParts()

  chooseInitialRoute()

  this.stateManager = new StateManager()

}
App.prototype = {

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




