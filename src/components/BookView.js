'use strict';

import React, {Component, PropTypes} from 'react';

import { Link } from 'react-router'

export default class BookView extends Component {

  getAuthorsList(authors) {
    return authors
    ? authors.map((author) => {
      return <Link key={`author${author.id}`} to={`/author/${author.id}`} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      {author.name}
      </Link>;
    })
    : null;
  }


  render() {
    const { name, genre, shortDesc, authors } = this.props;
    return (
      <div>     
         <h1>{name}</h1>
         <h3>
             <Link to={`/genre/${genre}`} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                  {genre}
              </Link>
          </h3>
         <p>{shortDesc}</p>
         <div className="mdl-grid">
             {this.getAuthorsList(authors)}
          </div>
      </div>
    );
  }
}

BookView.propTypes = {
  name: PropTypes.string.isRequred,
  genre: PropTypes.string.isRequred,
  shortDesc: PropTypes.string.isRequred,
  authors: PropTypes.array
}
