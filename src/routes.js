import React from 'react'
import { Route } from 'react-router'
import BasicLayout from './components/BasicLayout.jsx';
import AuthorsListPage from './containers/AuthorsListPage.jsx';
import BookListPage from './containers/BookListPage.jsx';
import AuthorPage from './containers/AuthorPage.jsx';
import BookPage from './containers/BookPage.jsx';
import GenrePage from './containers/GenrePage.jsx';

export default (
	<Route path="/" component={BasicLayout}>
		<Route path="books" component={BookListPage}/>
		<Route path="authors" component={AuthorsListPage}/>
		<Route path='author/:author_id' component = {AuthorPage} />
		<Route path='book/:book_id' component = {BookPage} />
		<Route path='genre/:genre_type' component = {GenrePage} />
	</Route>
)