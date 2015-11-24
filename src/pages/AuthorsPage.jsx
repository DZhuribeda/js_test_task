'use strict';

import React, {Component, PropTypes} from 'react';
import Router from 'react-router';
import { connect } from 'react-redux';
import AuthorCard from './../components/AuthorCard.jsx'
import { getAuthors } from '../reducers/authors'

class AuthorsPage extends Component {

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
    authors: getAuthors(state)
  }
}

export default connect(
  mapStateToProps,
)(AuthorsPage)