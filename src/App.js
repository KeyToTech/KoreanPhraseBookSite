import React, { Component } from 'react';
import './App.css';
import Header from './container/header/header.js';
import Footer from './container/footer/footer.js';
import Table from "./container/content/table/table.js";
import Functions from "./container/content/functions/functions";
import Alphabet from "./container/content/alphabet/alphabet";
import Search from "./container/content/search/search";
import Form from "./container/content/form/form";
import Message from './container/message/message';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: false
    }
  }

  showMessage = () => {
    this.setState({
      showMessage: true
    })
  }

  showWrap = () => {
    this.setState({
      showMessage: false
    })
  }

  render() {
    let content =
      <div>
        <Table />
        <Functions />
        <Alphabet />
        <Search />
        <Form />
      </div>
      ;
    if (this.state.showMessage) {
      content = <Message showWrap={this.showWrap} />;
    }
    return (
      <div className="App">
        <Header showMessage={this.showMessage} />
        {content}
        <Footer />
      </div>
    );
  }
}

export default App;


