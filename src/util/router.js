export function Router({hostElement,routes}) {
  this.history = []
}

Router.prototype = {

  urlHashChange(){
    switch (window.location.hash) {

      case '#login': {
        const login = new Login()
        mainContentElement.appendChild(login.getElement())
        break
      }
      case '#bookings': {

      }
      default: {
        renderHomePage()
      }
    }
  },

  addListeners(){
    window.addEventListener('hashchange', updateBasedOnLocation);
    function chooseInitialRoute() {
      if (!state.loggedInUser) {
        window.location = '#login'
      }
      updateBasedOnLocation()
    }

  }
}

