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
            Today's Domains {' '}
            <span role="img" aria-label="rocket">
              🚀
            </span>
          </h1>
          <p>(we update our domains daily <span role="img" aria-label="confidence">😏</span>)</p>

          <h3><a href="mailto:mks148@gmail.com?subject=I would like to buy NewPlugins.com 🤓" className="domain">NewPlugins.com - $500</a></h3>
          <h3><a href="https://www.namecheap.com/domains/registration/results.aspx?domain=kiwis.io" className="domain">Kiwis.io - $32.88</a></h3>
          <h3><a href="https://www.namecheap.com/domains/registration/results.aspx?domain=fruit.li" className="domain">Fruit.li - $14.99</a></h3>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
