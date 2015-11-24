import React, { Component } from 'react';

import { createStore, compose,combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {
  ReduxRouter,
  routerStateReducer,
  reduxReactRouter,
  pushState
} from 'redux-router';

import { Route, Link, DefaultRoute } from 'react-router';
import { createHistory } from 'history';
import * as reducers from './reducers';

import BasicLayout from './layouts/BasicLayout.jsx';
import AuthorsPage from './pages/AuthorsPage.jsx';
import BookListPage from './pages/BookListPage.jsx';




// export let createStore = initialCreateStore;
const reducer = combineReducers({
  router: routerStateReducer,
  reducers
});

const store = compose(
  reduxReactRouter({ createHistory })
)(createStore)(reducer);


export default class App extends Component {
  render() {
	return (
	  <div>
		<Provider store={store}>
		  <ReduxRouter>
			<Route path="/" component={BasicLayout}>
				<Route path="books" component={BookListPage}/>
				<Route path="authors" component={AuthorsPage}/>

			</Route>
		  </ReduxRouter>
		</Provider>
	  </div>
	);
  }
}
