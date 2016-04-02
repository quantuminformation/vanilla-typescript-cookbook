/**
 * We are trying to copy redux here, so this global state object is a bit of an experiment
 * I will see how  it scales
 */

import User from "./model/user"

export default {
  loggedInUser: new User(1, "Nikos", {}),
}
