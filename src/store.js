import { createStore } from 'redux';

let comments = [
  'hello',
  'world'
]

function commentReducer(state = [] , action) {
  return state;
}

let store = createStore(commentReducer,comments);

export default store;
