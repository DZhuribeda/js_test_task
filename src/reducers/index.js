import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux';
import books from './books';
import authors from './authors';


const reducers = combineReducers({
  authors,
  books,
  routing
});

export default reducers;