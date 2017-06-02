
/**
 * Header shows the header and also takes car of the nav (and what nav items are
 * shown based on the logged in state)
 */
export default class Header {
  constructor () {
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

    var el = document.createElement('DIV')
    el.innerHTML = template
    this._hostElement = el.firstChild
    // document.getElementById("header-container").appendChild(this._hostElement)
    this.addListeners()
  }

  getElement () {
    return this._hostElement
  }

  /**
   *  any click on the calendar or the body will close the calendar, we just inspect the target to
   *  determine what action to take
   */
  addListeners () {
    const accountToggleEl = this._hostElement.querySelector('#account-toggle')
    const accountInfoEl = this._hostElement.querySelector('#account-info')

    // here we open and close the account dropdown for clicking on the logged in icon or the body
    accountToggleEl.addEventListener('click', function toggleAccount (event) {
      if ((window.getComputedStyle(accountInfoEl).display === 'none')) {
        accountInfoEl.style.display = 'block'
        document.addEventListener('click', function closeAccount (event) {
          accountInfoEl.style.display = 'none'
          document.removeEventListener('click', closeAccount)
        })
      } else {
        accountInfoEl.style.display = 'none'
      }
      event.stopPropagation()
    })
  }
}
