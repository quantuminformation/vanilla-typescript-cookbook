import DialogueForm from "../dialogueForm/dialogueForm"


/**
 * Login component
 * I cheat here and just use the dialogue form with the fields
 */
export default class Login {
  constructor() {

    const title = "Login "
    const description = "Please supply your email and password"
    const subtitle = "Hint the filled"
    const fields = [
      {
        name: "username",
        type: "text",
        placeholder: "username",
        editable: true,
      },
      {
        name: "password",
        type: "password",
      },
    ]

    const dialogueForm = new DialogueForm(title, subtitle, description, fields)
    dialogueForm.addEventListener("onSubmit", this.onLoginRequest.bind(this))
    dialogueForm.show()
  }

  onLoginRequest(event) {
    UserApi.attemptLogin().then(function (result) {

    }).catch(function (error) {

    });
  }
}


