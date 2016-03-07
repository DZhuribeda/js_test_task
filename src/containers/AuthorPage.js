'use strict';

import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import {loadAuthors, loadBooks} from '../actions'
import AuthorView from './../components/AuthorView.js'

class AuthorPage extends Component {

  componentWillMount(){
    this.props.loadBooks();  
    this.props.loadAuthors();
  }
  

  render() {
    const { authors } = this.props
    const { author_id } = this.props.params;
    const author = authors.find( author => +author.id === +author_id);
    
    return author 
            ? <AuthorView name={author.name}
                        biography={author.biography} 
                        books={author.books}/>
            : null;
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


