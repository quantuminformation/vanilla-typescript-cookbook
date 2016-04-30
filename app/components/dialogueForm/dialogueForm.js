import BaseComponent from "../baseComponent"

/**
 * dialogueForm
 *
 * Allows user to edit or create a new model in a popup dialogue.
 *
 * The cosuming componnent subscribes to events when the data entry is complete
 * the popup is a modal with the fields passed from the consumer used to dynamically generate the form.
 * Some fields are passed that are non editable
 *
 *
 */
//todo allow uneditible to fields to be rendered in disabled inputs
// todo add field dynamic validation
//todo config option to render or hide uneditable fields
export default class DialogueForm extends BaseComponent {

  /**
   *
   * @param {string} title the title of the dialogue
   * @param {string} description some helper text to tell the user what it is for
   * @param fields a description of the form fields. Some are optional based on the type of input.
   * fields that are used to pass data through to the other end, uneditable ones will be hidden
   * This is an object of the following format:
   *
   `{
      fields: [
        {
          name: "foo",
          required: boolean,
          type: *
          placeholder: string
        }
      ]
    }`
   * @param {string} isEditMode if not in edit mode it is in "add" mode
   * note: it is the event handler that will inspect this prop and decide what to do with the data
   *
   */
  constructor(title, subtitle, description, fields, isEditMode) {
    // we render the fields to work with a flexbox form layout

    const fullFieldHTML = fields

    /*     .filter(field => {
     return field.editable
     })*/

      .map(field => {
        if (field.editable) {
          return `<div class="field">
                   <input name="${field.name}" type="${field.type}"  value="${field.value}"
                       placeholder="${field.placeholder}">
                  </div> `
        }
        return `<div class="field">
                  <input name="${field.name}" type = "hidden" value="${field.value}">
                 </div>`
      }).join("")

    // todo, generate form validation
    const template =
      `<article data-componenent="dialogueForm" data-is-initialising="true">
        <a class="closeDialogue">Close ✕</a>
        <h3>${title}</h3>
        <span class="subtitle">${subtitle}</span>
        <p>${description}</p>
        <div class="fields">${fullFieldHTML}</div>
        <button style="margin-top: 10px" class="btn-block">
          ${isEditMode ? "Save edits" : "Save and add"}
        </button>
      </article>`

    super(template)

    this.fields = fields
    // we need to store this because we need this 'context'
    this._destroyBoundWithThis = this.destroy.bind(this)
  }

  /**
   * Renders the map
   */
  show() {
    const el = document.createElement("DIV")
    el.className = "modal-background"
    document.body.appendChild(el)
    document.body.appendChild(this._element)
    setTimeout(() => {
      this._element.dataset.isInitialising = false
    }, 50)
    this.addListeners()
  }

  addListeners() {
    const closeElement = this._element.querySelector("a")
    closeElement.addEventListener("click", this._destroyBoundWithThis)
    this._element.classList.remove("offscreen")

    // wrap up the form fields values into an event to be handled by listeners of the dialogue
    this._element.querySelector("button").addEventListener("click", function () { //eslint ignore-line
      const data = {}
      this.fields.forEach(function (field) {
        console.log(this._element.querySelector(`[name=${field.name}`))
        data[field.name] = this._element.querySelector(`[name=${field.name}`).value
      }.bind(this))
      const newEvent = new CustomEvent("onSubmit", {"detail": data})

      this.dispatchEvent(newEvent)
      this.destroy()
    }.bind(this))
  }

  destroy() {
    document.body.removeChild(document.querySelector('.modal-background'));
    document.removeEventListener("mouseup", this._destroyBoundWithThis)

    this._element.parentElement.removeChild(this._element)
  }
}

