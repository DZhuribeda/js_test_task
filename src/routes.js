import React from 'react'
import { Route } from 'react-router'
import BasicLayout from './components/BasicLayout.jsx';
import AuthorsPage from './containers/AuthorsPage.jsx';
import BookListPage from './containers/BookListPage.jsx';

export default (
	<Route path="/" component={BasicLayout}>
		<Route path="books" component={BookListPage}/>
		<Route path="authors" component={AuthorsPage}/>
	</Route>
)