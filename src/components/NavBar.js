'use strict';

import React, {Component} from 'react';
import { Link } from 'react-router'


export default class NavBar extends Component {


  render() {
    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">Title</span>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation mdl-layout--large-screen-only">
          
            <Link to={'/books'} className="mdl-navigation__link">books</Link>
            <Link to={'/authors'} className="mdl-navigation__link">authors</Link>
          </nav>
        </div>
      </header>
      );
  }
}
