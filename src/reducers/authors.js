import ApiClient from '../api/ApiClient'
import * as types from '../constants';

const initialState = {
	authors : []
}

export default function authors(state = initialState, action) {
  switch (action.type) {
  	case types.ADD_AUTHOR:
  		return state.authors.push(action.author);
    default:
      return state;
  }
}

export function getAuthors(state) {
  return new ApiClient().getAuthors();
}