import * as types from '../constants';

export function getBooks(books) {
  return {
    type: types.GET_BOOKS,
    books
  };
}