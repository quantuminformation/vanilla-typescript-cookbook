import moment from 'moment'
import BookingCalender from './calendar/bookingCalender'
import mockApi from '../api/mocks/mockApi'
import StateManager from '../util/stateManager/stateManager'
import Header from './header/header'
import Login from './login/login'
import {Router} from '../util/router'
import 'normalize.css'
import '../styles/index.pcss'

/**
 * @param {string} selector
 * @constructor
 */
export function App(selector) {

  this.hostElement = document.querySelector(selector)

  //create app components
  const header = new Header()
  const bookingCalender = new BookingCalender()

  //append neccessary element
  this.hostElement.appendChild(header.getElement())
  const routingContainer = document.createElement('ARTICLE')
  routingContainer.className = 'routing-container'
  this.hostElement.appendChild(routingContainer)

  const routerConfig = {routes: this.createRoutes(), hostElement: routingContainer}
  this.router = new Router(routerConfig)

  const stateManager = new StateManager()

}
App.prototype = {

  /**
   * The router expects an array of objects with the route and the content function
   */
  createRoutes(){
    return [
      {
        route: '',
        contentFunction: () => this.hostElement.innerHTML = `<h1>Home</h1>
                                      <p>Welcome to examples of how to build an application using
                                        only vanillaJs
                                      </p>`
      }, {
        route: 'bookings',
        contentFunction: () => {

          if (!stateManager.getState().bookings.length) {
            mockApi.getAllbookings().then(bookings => {
              state.bookings = bookings
              if (!bookingCalender) {
                bookingCalender = new BookingCalender()
              }
              bookingCalender.switchToWeekView(moment().startOf('week'))
              mainContentElement.appendChild(bookingCalender.getElement())

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





