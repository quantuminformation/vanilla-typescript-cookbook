/**
 * Form builder
 *
 * creates froms on the fly based on a model type {@ see ''}
 *
 * @param model
 * @param isEditMode
 * @constructor
 */
export default function FromBuilder(model, isEditMode) {
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
    `<article data-componenent="form" >
        <div class="fields">${fullFieldHTML}</div>
        <button style="margin-top: 10px" class="btn-block">
          ${isEditMode ? "Save edits" : "Save and add"}
        </button>
      </article>`


  this.fields = fields
  // we need to store this because we need this 'context'
  this._destroyBoundWithThis = this.destroy.bind(this)
}

FormBuilder.prototype ={
  
}

