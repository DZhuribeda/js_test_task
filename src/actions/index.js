import { LOAD_DATA } from '../middleware/api';

export const AUTHOR_REQUEST = 'AUTHOR_REQUEST';
export const AUTHOR_SUCCESS = 'AUTHOR_SUCCESS';
export const AUTHOR_FAILURE = 'DATA_FAILURE';
export const AUTHOR_URL = 'AUTHOR_URL';

export function loadAuthors() {
  return {
    [LOAD_DATA]: {
      types: [AUTHOR_REQUEST, AUTHOR_SUCCESS, AUTHOR_FAILURE],
      fullUrl: AUTHOR_URL
    }
  };
}

export const BOOK_REQUEST = 'BOOK_REQUEST';
export const BOOK_SUCCESS = 'BOOK_SUCCESS';
export const BOOK_FAILURE = 'BOOK_FAILURE';
export const BOOK_URL = 'BOOK_URL'; 

export function loadBooks() {
  return {
    [LOAD_DATA]: {
      types: [BOOK_REQUEST, BOOK_SUCCESS, BOOK_FAILURE],
      fullUrl: BOOK_URL
    }
  };
}