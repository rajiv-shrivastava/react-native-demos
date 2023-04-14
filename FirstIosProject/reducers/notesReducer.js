// import the dependency
import remove from 'lodash.remove';
import {ADD_NOTE, DELETE_NOTE} from '../constants';
// reducer

const initialState = [];

function notesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          id: action.payload.id,
          note: action.payload.note,
        },
      ];

    case DELETE_NOTE:
      const deletedNewArray = remove(state, obj => {
        return obj.id != action.payload;
      });
      return deletedNewArray;

    default:
      return state;
  }
}

export default notesReducer;
