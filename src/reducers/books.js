import { BOOK_REQUEST, BOOK_SUCCESS, BOOK_FAILURE } from '../actions';


export default function books(state = [], action) {
  switch(action.type){
	case BOOK_SUCCESS:
	  return [...action.data];
	case BOOK_FAILURE:
	  console.log(action.message);
	case BOOK_REQUEST: 
	  return [];
  }
  return state;
}