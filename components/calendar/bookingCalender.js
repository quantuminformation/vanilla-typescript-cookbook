import BaseComponent from "../baseComponent"
import moment from "moment"
import globalBookingSettings from "../../configuration/globalBookingSettings"

/**
 * BookingCalander
 * The component allow the parent to delegate the task of sorting and filter to itself, but the
 * parent can still pass filtering to the component which will save time. Bookings are applied
 * by use query selectors on data-moment attributes
 *
 * CONVENTIONS
 * data attributes in dom take the object (booking) and use camel casing to append the attribute,
 * ie data-booking-id and date-booking-date for id and the date propson booking objects
 *
 */
export default class BookingCalander extends BaseComponent {
  constructor() {
    const template =
      `<div class = 'bookingCalender'>
        <h1>bookingCalender</h1>
        <div class="weekCalendarView"></div>
      </div>`


    super(template)


    this.me = {
      name: "Nikos",
      age: 9,
      defaultSkier: true,
    }


    // this.updateWeek(moment().startOf('week'))
  }

  /**
   * renders a calendar for a given week
   * all the data is then stored in the dom which simplifies handling user interaction
   *
   * //todo whenever data changes rerender
   *
   * @param {moment} start of that week to render, dates are worked out from this
   */
  getWeekTable(weekStart) {
    const totalSlots = (globalBookingSettings.endHours - globalBookingSettings.startHours) * 2 + 2
    let trackingIndex = 0 // used to increment the day for each td renderered
    const currentTime = weekStart.hours(globalBookingSettings.startHours)


    const timeSlots = Array(totalSlots).fill(0).map((e, i) => i).map(i => {

      let newRow = "<tr>"
      for (trackingIndex = 0; trackingIndex < 8; trackingIndex++) {
        if (trackingIndex === 0) { // render the time column
          newRow += `<td class="time">${currentTime.format("HH:mm")}</td>`
        } else {
          const nextDay = weekStart.clone().add(trackingIndex - 1, "days")
          newRow += `<td class="timeSlot" data-booking-date="${nextDay.toISOString()}"></td>`
        }
      }
      newRow += "</tr>"
      currentTime.add(30, "minutes")
      return newRow
    }).join()

    return `<h1>${weekStart.format("MMMM YYYY")}</h1>
             <table border="0" cellspacing="0" cellpadding="0">
               <thead>
                 <tr>
                   <td></td>
                   <td>${weekStart.clone().add(1, "day").format("DD dddd")}</td>
                   <td>${weekStart.clone().add(2, "day").format("DD dddd")}</td>
                   <td>${weekStart.clone().add(3, "day").format("DD dddd")}</td>
                   <td>${weekStart.clone().add(4, "day").format("DD dddd")}</td>
                   <td>${weekStart.clone().add(5, "day").format("DD dddd")}</td>
                   <td>${weekStart.clone().add(6, "day").format("DD dddd")}</td>
                   <td>${weekStart.clone().add(7, "day").format("DD dddd")}</td>
                 </tr>
                 </thead>
                 ${timeSlots}
             </table>`
  }

  /**
   * @param {moment} weekStart
   * @param any number of bookings
   */
  switchToWeekView(weekStart, bookings) {
    this._element.querySelector(".weekCalendarView").innerHTML = this.getWeekTable(weekStart)
    this._applyBookings(
      bookings,
      weekStart.clone().add(1, "days"),
      weekStart.clone().add(7, "days"))
  }

  _applyBookings(bookings, start, end) {
    // filter the bookings for just this booking calendar week (next mon - end of next sun)
    bookings = bookings.filter(booking => {
      return booking.date.isBetween(start, end)
    }).forEach(booking => {
      console.log(this._element.className)
      const currentElement = this._element.querySelector(
        `[data-booking-date="${booking.date.toISOString()}"]`
      )
      currentElement.dataset["bookingId"] = booking.id
    })

    // update the dom with each booking
  }

}

