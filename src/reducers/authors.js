import { AUTHOR_REQUEST, AUTHOR_SUCCESS, AUTHOR_FAILURE } from '../actions';

export default function authors(state = [], action) {
  switch(action.type){
	case AUTHOR_SUCCESS:
	  return [...action.data];
	case AUTHOR_FAILURE:
	  console.log(action.message);
	case AUTHOR_REQUEST:
	  return [];
  }
  return state;
}