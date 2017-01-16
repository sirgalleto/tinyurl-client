import fetch from 'isomorphic-fetch';
/*
 * action types
 */

export const ADD_URL = 'ADD_URL';
export const REQUEST_URLS = 'REQUEST_URLS';
export const RECEIVE_URLS = 'RECEIVE_URLS';
export const INVALIDATE_URLS = 'INVALIDATE_URLS';

/*
 * action creators
 */

 export function addUrl(name) {
   return { type: ADD_URL, name};
 }


 export function requestUrls() {
   return {
     type: REQUEST_URLS
   };
 }

 export function receiveUrls(json) {
   return {
     type: RECEIVE_URLS,
     urls: json.data,
     receivedAt: Date.now()
   };
 }

export function invalidateUrls() {
  return {
    type: INVALIDATE_URLS
  }
}

export function fetchUrls() {
  return function(dispatch) {
    dispatch(requestUrls());

    return fetch(`http://localhost:8080/api/urls`)
    .then(response => response.json())
    .then(json => dispatch(receiveUrls(json)))
  }
}
