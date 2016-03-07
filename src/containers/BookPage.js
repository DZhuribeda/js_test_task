'use strict';

import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {loadAuthors, loadBooks} from '../actions';
import BookView from './../components/BookView.js'

class BookPage extends Component {

  componentWillMount(){
    this.props.loadBooks();  
    this.props.loadAuthors();
  }

  render() {
    const { books } = this.props
    const { book_id } = this.props.params;
    const book = books.find( book => +book.id === +book_id);
    return book 
            ? <BookView name={book.name}
                        genre={book.genre} 
                        shortDesc={book.shortDesc}
                        authors={book.authors}/>
            : null;
  }
}


BookPage.propTypes = {
  authors: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    authors: state.authors,
    books: state.books
  }
}

export default connect(
  mapStateToProps,
  {loadAuthors, loadBooks}
  )(BookPage)


