import uuid from 'uuid';
import { combineReducers } from 'redux';
import {
  ADD_URL, REQUEST_URLS, RECEIVE_URLS, INVALIDATE_URLS
} from './actions';

const baseUrls = [
  {
    _id: uuid.v4(),
    name: 'facebook.com',
    short: 'alssfz',
    clicks: 1
  },
  {
    _id: uuid.v4(),
    name: 'google.com',
    short: 'a24xloa',
    clicks: 20
  }
];

const urlsState = {
  isFetching: false,
  didInvalidate: false,
  items: baseUrls
};

function urls(state = urlsState,  action) {
  switch(action.type) {
    case INVALIDATE_URLS:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case REQUEST_URLS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_URLS:
      return Object.assign({}, {
        isFetching: false,
        didInvalidate: false,
        items: action.urls,
        lastUpdated: action.receivedAt
      });
    case ADD_URL:
    return {
      isFetching: false,
      didInvalidate: false,
      items: [...state.items, {
        _id: uuid.v4(),
        name: action.name,
        clicks: 0,
        short: 'axwlioq'
      }]
    }
    default:
    return state;
  }
}

const tinyApp = combineReducers({
  urls
});

export default tinyApp
