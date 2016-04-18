import BaseComponent from "../baseComponent"

/**
 * Header shows the header and also takes car of the nav (and what nav items are
 * shown based on the logged in state)
 */
export default class Header extends BaseComponent {
  constructor() {
    const template =
      `<header>
          <article class="logo">
            <a href="#"><h3>VanillaJs</h3>
            <span>cookbook!</span></a>
          </article>
          <nav>
            <ul>
              <li><a href="#bookings">Booking Calendar</a></li>
            </ul>
           </nav>
        </header>`

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

