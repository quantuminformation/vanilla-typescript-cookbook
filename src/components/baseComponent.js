import EventTarget from '../util/EventTarget'

/**
 * Other classes extend this
 */
export default class BaseComponent extends EventTarget {
  /**
   * takes a template and returns an actual dom element
   * @param template
   */
  constructor (template) {
    super()
    const tempElement = document.createElement('DIV')
    tempElement.innerHTML = template
    this._hostElement = tempElement.firstChild
  }

  /**
   * returns the actual dom of the whole component
   * @returns {Node}
   */
  getElement () {
    return this._hostElement
  }

  destroy () {

  }
}
