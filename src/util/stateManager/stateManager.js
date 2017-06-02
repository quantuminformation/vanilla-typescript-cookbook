/**
 * We are trying to copy redux here, so this global state object is a bit of an experiment
 * I will see how  it scales
 */

import User from "../../model/user"

let previousStates = []
let currentStateIndex = 0
let subscriptions = []

export default function StateManager(state = {}) {
  this._state = state
}

StateManager.prototype = {
  getState(){
    return currentState
  },
  updateState(property, value){
    //forget any redo steps once we update the state

    state[property] = value
    if (state !== newState) {
      previousStates.push()
    }
    previousStates.splice(currentStateIndex)
  },
  undo(){
    if (previousStates.length) {
      currentStateIndex--
      return previousStates[currentStateIndex]
    }
    return undefined
  },
  subscribe(callback){
    subscriptions.push(callback)
  }
}
