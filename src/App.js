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
    let content = <Wrap />;
    if (this.state.showMessage) {
      content = <Message showWrap={this.showWrap} />;
    }
    return (
      <div className="App">
        <div className="container-btn-translation">
          <div className="wrap-btn">
            <button href='#ukr' onClick={this.changeLanguage} className="btn-primary btn style-btn">Українська</button>
            <button href='#kor' onClick={this.changeLanguage} className="btn btn-primary btn style-btn">Корейська</button>
          </div>
        </div>
        <Header language={this.state.language} showMessage={this.showMessage} />
        {content}
        <Footer />
      </div>
    );
  }
}

export default App;


