/**
 * Component logger
 *
 * Logs stuff to the screen
 */
const BaseComponent = require('../baseComponent');


class Logger extends BaseComponent {
  constructor() {
    
    super("n");
  }

  /**
   * appends a line of text, terminated with line break
   * @param text
   */
  appendLine(text) {
    this._element.innerHTML = this._element.innerHTML += text;
  }
}


module.exports = Logger;

