import React, { Component } from 'react';
import './App.css';
import Header from './container/header/header.js';
import Wrap from './container/content/wrap.js';
import Footer from './container/footer/footer.js';
import Message from './container/message/message';
import strings from '../src/components/localization/languages';
import ukr from '../src/components/localization/ukr';
import kor from '../src/components/localization/kor';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showMessage: false,
      activeBtnUkr: true,
      language: ukr,
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
    this.setState({
      language: ukr,
    })
    btnK.disabled = false;
    btnK.classList.remove('active-language')
    btnU.disabled = true;
    btnU.classList.add('active-language');
  }

  changeLanguageSiteKor() {
    var btnU = document.getElementById('ukr');
    var btnK = document.getElementById('kor');
    this.setState({
      language: kor,
    })
    btnK.disabled = true;
    btnK.classList.add('active-language')
    btnU.disabled = false;
    btnU.classList.remove('active-language')
  }

  componentDidMount() {
    if (this.state.activeBtnUkr) {
      var button = document.getElementById('ukr');
      button.disabled = true;
      button.classList.add('active-language')
      this.setState({
        activeBtnUkr: !this.state.activeBtnUkr
      })
    }
  }

  render() {
    let content = <Wrap language={this.state.native} strings={strings} />;
    if (this.state.showMessage) {
      content = <Message showWrap={this.showWrap} />;
    }
    return (
      <div className="App">
        <Header
          changeLanguageSiteUkr={this.changeLanguageSiteUkr}
          changeLanguageSiteKor={this.changeLanguageSiteKor}
          language={this.state.language}
          showMessage={this.showMessage}
        />
        {this.changeLanguageSiteUkr}
        {content}
        <Footer language={this.state.native} strings={strings} />
      </div>
    );
  }
}

export default App;


