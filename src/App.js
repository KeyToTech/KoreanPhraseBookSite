import React, { Component } from 'react';
import './App.css';
import Header from './container/header/header.js';
import Wrap from './container/content/wrap.js';
import Footer from './container/footer/footer.js';
import Message from './container/message/message';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: false,
      language: true,
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

  changeLanguage = () => {
    this.setState(
      { language: !this.state.language }
    )
  }

  render() {
    let content = <Wrap language={this.state.language} />;
    if (this.state.showMessage) {
      content = <Message showWrap={this.showWrap} />;
    }
    return (
      <div className="App">
        <Header click={this.changeLanguage} language={this.state.language} showMessage={this.showMessage} />
        {content}
        <Footer />
      </div>
    );
  }
}

export default App;


