import DialogueForm from "../dialogueForm/dialogueForm"
import LoginRequest from '../../model/loginRequest'
//import FormBuilder from '../formBuilder/fromBuilder'


/**
 * Login component
 * I cheat here and just use the dialogue form with the fields
 */
export default class Login {
  constructor() {

    const title = "Login "
    const description = "Please supply your email and password"
    const subtitle = "Hint the filled"
    const loginRequest = new LoginRequest()
    mainContentElement.appendChild(login.getElement())

    const dialogueForm = new DialogueForm(title, subtitle, description, fields)
    dialogueForm.addEventListener("onSubmit", this.onLoginRequest.bind(this))
    dialogueForm.show()

  //  this.form = new FormBuilder(loginRequest)

  }

  onLoginRequest(event) {
    UserApi.attemptLogin().then(function (result) {

    }).catch(function (error) {

    });
  }
}


