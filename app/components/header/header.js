import BaseComponent from "../baseComponent"

/**
 * Header shows the header and also takes car of the nav (and what nav items are
 * shown based on the logged in state)
 */
export default class Header extends BaseComponent {
  constructor() {
    const template =
      `<header>
         <nav>
            <article class="logo">
              <a href="#"><h3>VanillaJs</h3>
              <span>cookbook!</span></a>
            </article>
            <ul class="left">
              <li><a href="#bookings">Booking Calendar</a></li>
            </ul>
            <ul class="right">
               <li>
                  <a id="account-toggle" href="#"><img src="http://lorempixel.com/24/25/sports/1/"></a>
                  <article id="account-info" aria-label="Account Information" style="display: none">
                    <p>Signed in as Nikos</p>
                    <a href="#logout">Logout</a>
                  </article>
                </li>
           </ul>
          </nav>
        </header>`

    super(template)
    document.body.appendChild(this.getElement())
    this.addListeners()
  }

  /**
   *  any click on the calendar or the body will close the calendar, we just inspect the target to
   *  determine what action to take
   */
  addListeners() {
    const accountToggleEl = this._element.querySelector("#account-toggle")
    const accountInfoEl = this._element.querySelector("#account-info")
    accountToggleEl.addEventListener("click", function toggleAccount(event) {
      accountInfoEl.style.display = (window.getComputedStyle(accountInfoEl).display === "block"
        ? "none" : "block")
    })
  }


}

