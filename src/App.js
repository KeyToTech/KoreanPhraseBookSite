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
    var btnUkr = document.getElementById('ukr');
    var btnKor = document.getElementById('kor');

    if (btnUkr.value == 'ukr' && this.state.language == true) {
      this.setState(
        { language: !this.state.language }
      )
      btnUkr.disabled = true;
      btnUkr.classList.add("active-language");
      btnKor.classList.remove("active-language")
      btnKor.disabled = false;
    } if (btnKor.value == 'kor' && this.state.language == false) {
      this.setState(
        { language: !this.state.language }
      )
      btnKor.disabled = true;
      btnUkr.disabled = false;
      btnKor.classList.add("active-language");
      btnUkr.classList.remove("active-language")
    }
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
        <Footer language={this.state.language} />
      </div>
    );
  }
}

export default App;


