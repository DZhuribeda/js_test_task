'use strict';

import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {loadAuthors, loadBooks} from '../actions';
import BookCard from './../components/BookCard.js'

class AuthorPage extends Component {

  componentWillMount(){
    this.props.loadBooks();  
    this.props.loadAuthors();
  }
  

  render() {
    const { authors, books } = this.props
    const { author_id } = this.props.params;
    let author = {};
    let Books;
    author= authors.find( author => +author.id === +author_id);
    Books = author.books.map( book => {
      let book_id = book.id;
      book = books.find((book) => +book.id === +book_id)
      return (<BookCard key={book.id} data={book}/>);
    });
    
    return (
      <div>
        <h1>{author.name}</h1>
        <br/>
        <p>{author.biography}</p>
        <br/>
        <div className="mdl-grid">
          {Books}
        </div>
      </div>
      );
  }
}


AuthorPage.propTypes = {
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
  )(AuthorPage)


