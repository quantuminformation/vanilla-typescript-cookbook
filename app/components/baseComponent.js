import EventTarget from "../util/EventTarget"

/**
 * Other classes extend this
 */
export default class BaseComponent extends EventTarget {

  /**
   * takes a template and returns an actual dom element
   * @param template
   */
  constructor(template) {
    super()
    const tempElement = document.createElement("DIV")
    tempElement.innerHTML = template
    this._element = tempElement.firstChild
  }

  /**
   * returns the actual dom of the whole component
   * @returns {Node}
   */
  getElement() {
    return this._element
  }

  /**
   * returns a new element from an html string
   * useful for components that create a lot of internal children
   * @returns {Node}
   */
  getNewElement(template) {
    const tempElement = document.createElement("DIV")
    tempElement.innerHTML = template
    return tempElement.firstChild
  }

}
