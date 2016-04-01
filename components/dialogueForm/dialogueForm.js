import BaseComponent from "../baseComponent"
import moment from "moment"
import defaultSettings from "../../configuration/defaultSettings"

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

   *
   */
  constructor(title, description, fields) {
    // we render the fields to work with a flexbox form layout

    const fullFieldHTML = fields.map(field => {
      const fieldHTML = `<div class="field">
                           <input name="${field.name}" type="${field.type}">
                         </div>
                        `
      return fieldHTML
    })

    const template =
      `<div class = 'dialogueForm'>
        <h1>title</h1>
        <div class="fields">${fullFieldHTML}</div>
      </div>`

    super(template)

    // we need to store this because we need this 'context'
    this._destroyBoundWithThis = this.destroy.bind(this)
  }

  /**
   * Renders the map
   */
  show() {
    document.body.appendChild(this._element)
    this._element.classList.remove("offscreen")
  }

  destroy() {
    document.removeEventListener("mouseup", this._destroyBoundWithThis)

    this._element.parentElement.removeChild(this._element)
  }
}

