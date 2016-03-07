import React from 'react'
import { Route } from 'react-router'

import BasicLayout from './components/BasicLayout.js'
import AuthorsListPage from './containers/AuthorsListPage.js'
import BookListPage from './containers/BookListPage.js'
import AuthorPage from './containers/AuthorPage.js'
import BookPage from './containers/BookPage.js'
import GenrePage from './containers/GenrePage.js'

export default (
	<Route path="/" component={BasicLayout}>
		<Route path="books" component={BookListPage}/>
		<Route path="authors" component={AuthorsListPage}/>
		<Route path="author/:author_id" component = {AuthorPage} />
		<Route path="book/:book_id" component = {BookPage} />
		<Route path="genre/:genre_type" component = {GenrePage} />
	</Route>
)