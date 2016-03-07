import { REQUEST, SUCCESS, FAILURE } from '../actions';
import mock_json from './../mock_data';

export default function books(state = [], action) {
  switch(action.type){
    case SUCCESS:
      return [...mock_json.books];
    case FAILURE:
      console.log(action.message);
      return [];
    case REQUEST: 
      return [];
    default:
      return [];
  }
}