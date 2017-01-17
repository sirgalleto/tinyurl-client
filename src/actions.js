import fetch from 'isomorphic-fetch';
/*
* action types
*/

export const REQUEST_URLS = 'REQUEST_URLS';
export const RECEIVE_URLS = 'RECEIVE_URLS';
export const RECEIVE_NEW_URL = 'RECEIVE_NEW_URL';
export const INVALIDATE_URLS = 'INVALIDATE_URLS';

/*
* action creators
*/

export function requestUrls() {
  return {
    type: REQUEST_URLS
  };
}

export function receiveUrls(urls) {
  return {
    type: RECEIVE_URLS,
    urls: urls,
    receivedAt: Date.now()
  };
}

export function receiveNewUrl(url) {
  return {
    type: RECEIVE_NEW_URL,
    url,
    receivedAt: Date.now()
  }
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
    .then(response => {
      if(response.ok) return response.json();
      else Promise.reject(response.json());
    })
    .then(json => dispatch(receiveUrls(json.data)))
    .catch(json => dispatch(invalidateUrls(json.data)));
  }
}

export function createUrl(name) {
  return function(dispatch) {
    dispatch(requestUrls());

    return fetch(`http://localhost:8080/api/urls`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name
      })
    })
    .then(response => {
      if(response.ok ) return response.json();
      else Promise.reject(response.json());
    })
    .then(json => dispatch(receiveNewUrl(json.data)))
    .catch(json => dispatch(invalidateUrls(json.data)));
  }
}
