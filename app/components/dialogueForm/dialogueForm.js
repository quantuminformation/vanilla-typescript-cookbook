import BaseComponent from "../baseComponent"

/**
 * dialogueForm.js
 * The component allow the parent to delegate the task of a form to appear with space to fill in
 * new information and to subscribe to events when the data entry is complete
 *
 */
// todo add field dynamic validation
export default class DialogueForm extends BaseComponent {

  /**
   *
   * @param {string} title the title of the dialogue
   * @param {string} description some helper text to tell the user what it is for
   * @param fields a description of the form fields. Some are optional based on the type of input.
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

    const fullFieldHTML = fields.map(field => {
      const fieldHTML = `<div class="field">
                           <input name="${field.name}" type="${field.type}" placeholder="${field.placeholder}">
                         </div>
                        `
      return fieldHTML
    })

    //todo, generate form validation
    const template =
      `<div class = 'dialogueForm offscreen'>
        <a href="#" class="closeDialogue">Close ✕</a>
        <h3>${title}</h3>
        <span class="subtitle">${subtitle}</span>
        <p>${description}</p>
        <div class="fields">${fullFieldHTML}</div>
        <button style="margin-top: 10px" class="btn-block">${isEditMode ? "Save edits" : "Save and add"}</button>
      </div>`

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
    this.addListeners()
  }

  addListeners() {
    const closeElement = this._element.querySelector('a')
    closeElement.addEventListener("click", this._destroyBoundWithThis)
    this._element.classList.remove("offscreen")

    //wrap up the form fields values into an event to be handled by listeners of the dialogue
    this._element.querySelector("button").addEventListener("click", event => {

      const data = {}
      this.fields.forEach(field => {
        data[field.name] = this._element.querySelector(`[name=${field.name}`).value
      })
      const newEvent = new CustomEvent("onSubmit",{"detail":data})

      this.dispatchEvent(newEvent)
    })
  }

  destroy() {
    document.body.removeChild(document.querySelector('.modal-background'));
    document.removeEventListener("mouseup", this._destroyBoundWithThis)

    this._element.parentElement.removeChild(this._element)
  }
}

