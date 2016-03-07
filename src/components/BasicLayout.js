import React, { Component, PropTypes } from 'react';
import NavBar from './NavBar.js'

export default class BasicLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

BasicLayout.propTypes = {
  children: PropTypes.node
}