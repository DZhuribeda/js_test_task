'use strict';

import React, {Component} from 'react';

import { Link } from 'react-router'

export default class BookCard extends Component {

  getAuthorsList(book) {
    return book.authors
    ? book.authors.map((author) => {
      return <Link key={`author${author.id}`} to={`/author/${author.id}`} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      {author.name}
      </Link>;
    })
    : null;
  }


  render() {
    const { book } = this.props;
    return (
      <div className="mdl-cell mdl-cell--4-col">
        <div className="demo-card- mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title mdl-card--expand">
            <h4>
              <Link to={`/book/${book.id}`} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              {book.name}
              </Link>
            </h4>
          </div>
          <div className="mdl-card__actions mdl-card--border">
            {this.getAuthorsList(book)}

            <div className="mdl-layout-spacer"></div>
          </div>
        </div>
      </div>
      );
  }
}


