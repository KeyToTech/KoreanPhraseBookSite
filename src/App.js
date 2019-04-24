import React, { Component } from 'react';
import './App.css';
import Header from './container/header/header.js';
import Wrap from './container/content/wrap.js';
import Footer from './container/footer/footer.js';
import Message from './container/message/message';
import strings from '../src/components/localization/languages';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showMessage: false,
      native: true,
      start: true,
      btnU: document.getElementById('ukr'),
      btnK: document.getElementById('kor'),
    }
    this.changeLanguageSiteKor = this.changeLanguageSiteKor.bind(this);
    this.changeLanguageSiteUkr = this.changeLanguageSiteUkr.bind(this);
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

  changeLanguageSiteUkr() {
    var btnU = document.getElementById('ukr');
    var btnK = document.getElementById('kor');
    strings.setLanguage('ukr');
    btnK.disabled = false;
    btnK.classList.remove('active-language')
    btnU.disabled = true;
    btnU.classList.add('active-language')
    this.setState({
      native: !this.state.native
    })
  }

  changeLanguageSiteKor() {
    var btnU = document.getElementById('ukr');
    var btnK = document.getElementById('kor');
    strings.setLanguage('kor');
    btnK.disabled = true;
    btnK.classList.add('active-language')
    btnU.disabled = false;
    btnU.classList.remove('active-language')
    this.setState({
      native: !this.state.native
    })
  }

  componentDidMount() {
    if (this.state.start) {
      var button = document.getElementById('ukr');
      button.disabled = true;
      button.classList.add('active-language')
      this.setState({
        start: !this.state.start
      })
    }
  }

  render() {
    let content = <Wrap language={this.state.native} />;
    if (this.state.showMessage) {
      content = <Message showWrap={this.showWrap} />;
    }
    return (
      <div className="App">
        <Header
          changeLanguageSiteUkr={this.changeLanguageSiteUkr}
          changeLanguageSiteKor={this.changeLanguageSiteKor}
          language={this.state.native}
          strings={strings}
          showMessage={this.showMessage}
        />
        {content}
        <Footer language={this.state.native} />
      </div>
    );
  }
}

export default App;


