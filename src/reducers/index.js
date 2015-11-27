import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux';
import books from "./books";
import authors from "./authors";


const rootReducer = combineReducers({
	authors,
	books,
	router
});

export default rootReducer;