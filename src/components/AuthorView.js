'use strict';

import React, {Component, PropTypes} from 'react';
import BookCard from './../components/BookCard.js'


export default class AuthorView extends Component {

  getBooksList(books) {
    return books
    ? books.map( (authors_book) => {
      const book_id = authors_book.id;
      const book = books.find((book) => +book.id === +book_id)
      return (<BookCard key={book.id} book={book}/>);
    })
    : null;
  }


  render() {
    const { name, biography, books } = this.props;
    console.log(biography);
    return (
      <div>
        <h1>{name}</h1>
        <br/>
        <p>{biography}</p>
        <br/>
        <div className="mdl-grid">
          {this.getBooksList(books)}
        </div>
      </div>
    );
  }
}

AuthorView.propTypes = {
  name: PropTypes.string.isRequred,
  biography: PropTypes.string.isRequred,
  books: PropTypes.array
}
