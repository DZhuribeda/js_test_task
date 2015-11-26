import React, { Component, PropTypes } from 'react';
import NavBar from './NavBar.jsx'

export default class BasicLayout extends Component {
  static propTypes = {
    children: PropTypes.node
  }

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
