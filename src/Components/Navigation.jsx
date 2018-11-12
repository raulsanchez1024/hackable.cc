import React, { Component } from 'react';

import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="nav-layout">
        <a href="/" className="brand">hackable.<span id="cc">cc</span></a>
        <hr/>
      </div>
    );
  }
}

export default Navigation;