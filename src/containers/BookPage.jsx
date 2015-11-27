'use strict';

import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {loadAuthors, loadBooks} from '../actions';
import AuthorCard from './../components/AuthorCard.jsx'

import { Link } from 'react-router';

class BookPage extends Component {

    componentWillMount(){
      this.setState({
        booksLoaded:false,
        authorsLoaded: false
      });  
      this.props.loadBooks();  
      this.props.loadAuthors();
    }
  
    componentWillReceiveProps (nextProps){
      let result = {}
      if(nextProps.books)
        result = {booksLoaded: true};
      else
      result = {booksLoaded: false};
      
      if(nextProps.authors)
        result = Object.assign({}, result, {authorsLoaded: true});
      else
      result = Object.assign({}, result, {authorsLoaded: false});
      
      this.setState(result);
    }

    render() {
        const { authors, books } = this.props
        const { book_id } = this.props.params;
        const {authorsLoaded, booksLoaded} = this.state;
        let book = {};
        let Authors;
        if(authorsLoaded && booksLoaded){
          book= books.find( book => +book.id === +book_id);
          Authors = book.authors.map( author => {
            let author_id = author.id;
            author = authors.find((author) => +author.id === +author_id)
            return (<AuthorCard key={author.id} data={author}/>);
          });
        }
        return (
            <div>
                
               <h1>{book.name}</h1>
               <h3>
                   <Link to={`/genre/${book.genre}`} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        {book.genre}
                    </Link>
                </h3>
               <p>{book.short}</p>
               <div className="mdl-grid">
                   {Authors}
                </div>
            </div>
        );
    }
}


BookPage.propTypes = {
  authors: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
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


