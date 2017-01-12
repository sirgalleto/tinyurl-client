import uuid from 'uuid';
import { combineReducers } from 'redux';
import { ADD_URL } from './actions';

let urlsState = [
  {
    id: uuid.v4(),
    name: 'facebook.com',
    short: 'alssfz',
    clicks: 1
  },
  {
    id: uuid.v4(),
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
        {
          id: uuid.v4(),
          name: action.name,
          clicks: 0,
          short: 'axwlioq'
        }
      ]
    default:
      return state;
  }
}

const tinyApp = combineReducers({
  urls
});

export default tinyApp
