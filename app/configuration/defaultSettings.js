/**
 * Wraps the data for a day including time slots
 */
export default {

  // config for the client
  // todo make service for this + adjust for working week . have array of hours
  startHours: 10,
  startMinutes: 0,
  endHours: 23,
  endMinutes: 0,

  // the resolution of time slots (bookings are multiples of this)
  bookingTimeResolution: 30,
  bookingDurationMinutes: 30,
}
