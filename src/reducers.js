import { combineReducers } from 'redux';
import {
  REQUEST_URLS, RECEIVE_URLS, INVALIDATE_URLS, RECEIVE_NEW_URL
} from './actions';

const urlsState = {
  isFetching: false,
  didInvalidate: false,
  items: []
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
    case RECEIVE_NEW_URL:
    return Object.assign({}, {
      isFetching: false,
      didInvalidate: false,
      items: [ ...state.items, action.url]
    });
    default:
    return state;
  }
}

const tinyApp = combineReducers({
  urls
});

export default tinyApp
