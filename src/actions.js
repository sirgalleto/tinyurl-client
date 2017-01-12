/*
 * action types
 */

export const ADD_URL = 'ADD_URL';

/*
 * action creators
 */

 export function addUrl(name) {
   return { type: ADD_URL, name};
 }
