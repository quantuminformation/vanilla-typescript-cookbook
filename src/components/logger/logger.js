/**
 * Component logger
 *
 * Logs stuff to the screen
 */
import BaseComponent from '../baseComponent'


class Logger extends BaseComponent {
  constructor() {

    super("n");
  }

  /**
   * appends a line of text, terminated with line break
   * @param text
   */
  appendLine(text) {
    this._hostElement.innerHTML = this._hostElement.innerHTML += text;
  }
}


module.exports = Logger;

