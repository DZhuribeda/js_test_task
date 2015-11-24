import * as types from '../constants';

export function addAuthor(author) {
  return {
    type: types.ADD_AUTHOR,
    author
  };
}