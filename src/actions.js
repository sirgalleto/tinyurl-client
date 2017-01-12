/*
 * action types
 */

export const ADD_URL = 'ADD_URL';

/*
 * action creators
 */

 export function addUrl(url) {
   return { type: ADD_URL, url};
 }
