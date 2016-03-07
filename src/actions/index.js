import { CALL_API } from 'redux-api-middleware';

export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const URL = 'URL';

export function loadAuthors() {
  return {
    [CALL_API]: {
      endpoint: URL,
      method: 'GET',
      types: [REQUEST, SUCCESS, FAILURE]
    }
  };
}

export function loadBooks() {
  return {
    [CALL_API]: {
      endpoint: URL,
      method: 'GET',
      types: [REQUEST, SUCCESS, FAILURE]
    }
  };
}