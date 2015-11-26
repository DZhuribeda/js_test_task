import ApiClient from '../api/ApiClient'
import * as types from '../constants';


export default function authors(state = [], action) {
  switch (action.type) {
  	case types.ADD_AUTHOR:
  		return [...state, action.author];
    default:
      return state;
  }
}

export function getAuthors() {
  return new ApiClient().getAuthors();
}