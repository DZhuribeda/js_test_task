'use strict';

import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import AuthorCard from './../components/AuthorCard.js'
import {loadAuthors} from '../actions' 

class AuthorsListPage extends Component {

  componentWillMount(){
    this.props.loadAuthors();
  }

  render() {
    const { authors } = this.props;
    const Authors=authors.map((author) => (
                          <AuthorCard key={`author${author.id}`}
                                      author={author} />));
    return (
      <div className="mdl-grid">
       {Authors}
      </div>
      );
  }
}


AuthorsListPage.propTypes = {
  authors: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    authors: state.authors
  }
}

export default connect(
  mapStateToProps,
  {loadAuthors}
  )(AuthorsListPage)


