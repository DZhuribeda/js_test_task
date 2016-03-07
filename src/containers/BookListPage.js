'use strict';

import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import BookCard from './../components/BookCard.js'
import {loadBooks} from '../actions' 

class BooksListPage extends Component {


  componentWillMount(){
    this.props.loadBooks();
  }

  render() {
    const { books } = this.props;
    const Books=books.map((book) => ( <BookCard key={book.id} book={book}/>));
    return (
      <div className="mdl-grid">
        {Books}
      </div>
    );
  }
}


BooksListPage.propTypes = {
  books: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

export default connect(
  mapStateToProps,
  {loadBooks}
)(BooksListPage)


