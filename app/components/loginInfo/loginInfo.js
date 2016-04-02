import BaseComponent from "../baseComponent"
import state from "../../state"

/**
 * LoginInfo displays in the top right info about current logged in user
 */
export default class BookingCalander extends BaseComponent {
  constructor() {
    const template =
      `<div class = 'loginInfo'>
        <span>Logged in as ${state.loggedInUser.toString()}</span>
      </div>`

    super(template)
    document.body.appendChild(this.getElement())
  }

  /**
   *  any click on the calendar or the body will close the calendar, we just inspect the target to
   *  determine what action to take
   */
  addListeners() {

  }


}

