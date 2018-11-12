import React, { Component } from 'react';

import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="nav-layout">
        <a href="/" className="brand">
          hackable.<span id="cc">cc</span>
        </a>

        <div className="nav-links">
          <a href="https://docs.google.com/spreadsheets/d/1ktMC3dZegBKHm4dNviNHDGgsM3_7GcWjSh4FYvvbIvI/edit?usp=sharing">Ideas</a>
          <a href="/">News</a>
        </div>

        <hr />
      </div>
    );
  }
}

export default Navigation;
