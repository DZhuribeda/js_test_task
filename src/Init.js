import React, { Component } from 'react';

import { createStore,  compose,combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import {
  routerStateReducer,
  reduxReactRouter
} from 'redux-router';

import { Route, Link, DefaultRoute } from 'react-router';
import { createHistory } from 'history';
import * as reducers from './reducers';
import App from './App';


// export let createStore = initialCreateStore;
const reducer = combineReducers({
  router: routerStateReducer,
  reducers
});

const store = compose(
  reduxReactRouter({ createHistory })
)(createStore)(reducer);


export default class Init extends Component {
  render() {
	return (
	  <div>
		<Provider store={store}>
		  <App/>
		</Provider>
	  </div>
	);
  }
}