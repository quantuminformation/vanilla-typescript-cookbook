/**
 * We are trying to copy redux here, so this global state object is a bit of an experiment
 * I will see how  it scales
 */

import User from "./model/user"

export default {
  loggedInUser: new User(1, "Nikos", {}),

  // when we add to the booking we don't refresh the booking calendar, 
  // we let the calendar do it immediatly after
  bookings: {},
}
