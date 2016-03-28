import BaseComponent from "../baseComponent"
import moment from "moment"
import globalBookingSettings from "../../configuration/globalBookingSettings"
import mockApi from "../../api/mocks/mockApi"

/**
 * Login component
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

    this.parsedBookings = [0, 1, 2, 3, 4, 5, 6].map(dayIndex => {
      return mockApi.bookings().filter(rawBooking => {
        return moment(rawBooking.bookingDate).day() === dayIndex
      }).map(booking=> {
        booking.bookingDate = new moment(booking.bookingDate)
        return booking
      })
    })

    // this.updateWeek(moment().startOf('week'))
  }

  /**
   * renders a calendar for a given week
   * all the data is stored in the dom which simplifies handling user interaction
   *
   * //todo whenever data changes rerender
   *
   * @param {moment} start of that week to render, dates are worked out from this
   */
  getWeekTable(weekStart) {
    const totalSlots = (globalBookingSettings.endHours - globalBookingSettings.startHours) * 2 + 2
    let trackingIndex = 0 // used to increment the day for each td renderered

    const timeSlots = Array(totalSlots).fill(0).map((e, i) => i).map(i => {
      const currentTime = weekStart.add(i * 30, "minutes")

      let newRow = "<tr>"
      for (trackingIndex = 0; trackingIndex < 8; trackingIndex++) {
        if (trackingIndex === 0) { // render the time column
          newRow += `<td class="time">${currentTime.format("HH:MM")}</td>`
        } else {
          const nextDay = weekStart.clone().add(trackingIndex - 1, "days")
          newRow += `<td class="timeSlot" data-day="${nextDay.toISOString()}"></td>`
        }
      }
      newRow += "</tr>"
      return newRow
    }).join()

    return `<h1> ${weekStart.format("MMMM YYYY")}  </h1>
                    <table>
                        <thead>
                            <tr>
                                <td></td>
                                <td>MO</td>
                                <td>TU</td>
                                <td>WE</td>
                                <td>TH</td>
                                <td>FR</td>
                                <td>SA</td>
                                <td>SU</td>
                            </tr>
                        </thead>
                        ${timeSlots}
                    </table>`
  }

  /**
   *
   * @param {moment} weekStart
   */
  switchToWeekView(weekStart) {
    this._element.querySelector(".weekCalendarView").innerHTML = this.getWeekTable(weekStart)
  }

}

