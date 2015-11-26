'use strict';

import React, {Component, PropTypes} from 'react';
import * as actions from '../actions/AuthorActions'
import { bindActionCreators } from 'redux'
import Router from 'react-router';
import { connect } from 'react-redux';
import AuthorCard from './../components/AuthorCard.jsx'
import { getAuthors } from '../reducers/authors'
import ApiClient from '../api/ApiClient'

class AuthorsPage extends Component {

    componentWillMount(){
       getAuthors().map((author)=>{
          this.props.addAuthor(author);
       })
    }

    render() {
        const { authors } = this.props
        return (
            <div>
                <div className="mdl-grid">
                    {authors.map(function(author) {
                       return <AuthorCard key={author.id} data={author} />;
                    })}
                </div>
            </div>
        );
    }
}


AuthorsPage.propTypes = {
  authors: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
  return {
    authors: state.authors
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorsPage)