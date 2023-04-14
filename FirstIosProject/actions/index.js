import { ADD_NOTE,DELETE_NOTE } from "../constants"
let noteID = 0

export function addnote(note) {
  return {
    type: ADD_NOTE,
    payload: note
  }
}

export function deletenote(id) {
  return {
    type: DELETE_NOTE,
    payload: id
  }
}