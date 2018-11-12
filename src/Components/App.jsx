import React, { Component } from 'react';
import './App.css';

import Navigation from './Navigation.jsx';
import Footer from './Footer.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="main-layout">
          <h1 className="title">
            Discover Your Next Side Project{' '}
            <span role="img" aria-label="rocket">
              🚀
            </span>
          </h1>
          <p>(we update our domains daily <span role="img" aria-label="confidence">😏</span>)</p>

          <h3><a href="mailto:raulsanchez1024@gmail.com?subject=I would like to buy Allotra.com" className="domain">Allotra.com - $125</a></h3>
          <h3><a href="mailto:raulsanchez1024@gmail.com?subject=I would like to buy Fivefy.com" className="domain">Fivefy.com - $99</a></h3>
          <h3><a href="mailto:raulsanchez1024@gmail.com?subject=I would like to buy Privus.xyz" className="domain">Privus.xyz - $19</a></h3>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
