import React, { Component } from 'react';
import './App.css';
import Header from './container/header/header.js';
import Footer from './container/footer/footer.js';
import Table from "./container/content/table/table.js";
import Functions from "./container/content/functions/functions";
import Alphabet from "./container/content/alphabet/alphabet";
import Search from "./container/content/search/search";
import Form from "./container/content/form/form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Table />
        <Functions />
        <Alphabet />
        <Search />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;


