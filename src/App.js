import React, { Component, PropTypes } from 'react';

import { createStore,  compose,combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
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


export default class App extends Component {
  render() {
	return (
	  <div>
		  <ReduxRouter>
  			<Route path="/" component={BasicLayout}>
  				<Route path="books" component={BookListPage}/>
  				<Route path="authors" component={AuthorsPage}/>

  			</Route>
		  </ReduxRouter>
	  </div>
	);
  }
}