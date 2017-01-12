import { combineReducers } from 'redux';
import { ADD_URL } from './actions';

let urlsState = [
  {
    id: 1,
    name: 'facebook.com',
    short: 'alssfz',
    clicks: 1
  },
  {
    id: 2,
    name: 'google.com',
    short: 'a24xloa',
    clicks: 20
  }
];

function urls(state = urlsState, action) {
  switch(action.type) {
    case ADD_URL:
      return [
        ...state,
        action.url
      ]
    default:
      return state;
  }
}

const tinyApp = combineReducers({
  urls
});

export default tinyApp
