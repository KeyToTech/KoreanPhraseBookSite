import React, { Component } from 'react';
import './App.css';
import Header from './container/header/header.js';
import Wrap from './container/content/wrap.js';
import Footer from './container/footer/footer.js';

class App extends Component {
  render() {
    var name = "Owen";
    return (
      <div className="App">
        <Header />
        <Wrap />
        <Footer />
      </div>
    );
  }
}

export default App;


