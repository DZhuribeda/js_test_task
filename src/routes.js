import React from 'react'
import { Route } from 'react-router'
import BasicLayout from './layouts/BasicLayout.jsx';
import AuthorsPage from './pages/AuthorsPage.jsx';
import BookListPage from './pages/BookListPage.jsx';

export default (
	<Route path="/" component={BasicLayout}>
		<Route path="books" component={BookListPage}/>
		<Route path="authors" component={AuthorsPage}/>
	</Route>
)