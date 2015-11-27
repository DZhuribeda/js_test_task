'use strict';

import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import BookCard from './../components/BookCard.jsx'
import {loadBooks} from '../actions';

class GenrePage extends Component {

	
	componentWillMount(){
		this.setState({
			booksLoaded: false
		});
		this.props.loadBooks();
	}

	componentWillReceiveProps (nextProps){

		let result = {}
		if(nextProps.books) {
			result = {booksLoaded: true};
		} else{
			result = {booksLoaded: false};  
		}

		this.setState(result);
	}

	render() {
		const { books } = this.props;
		const { booksLoaded } = this.state;
		const { genre_type } = this.props.params;
		let Books;
		if (booksLoaded) {		
		  Books=books.filter((book)=>genre_type === book.genre).map((book) => ( <BookCard key={book.id} data={book}/>));
		}
		return (
			<div>
				<div className="mdl-grid">
					{Books}
				</div>
			</div>
			);
	}
}


GenrePage.propTypes = {
	books: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
	return {
		books: state.books
	}
}

export default connect(
	mapStateToProps,
	{loadBooks}
	)(GenrePage)


