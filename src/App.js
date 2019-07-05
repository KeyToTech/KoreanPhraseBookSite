import React, { Component } from 'react';
import './App.css';
import Header from './container/header/header.js';
import Wrap from './container/content/wrap.js';
import Footer from './container/footer/footer.js';
import Message from './container/message/message';
import ukr from '../src/components/localization/ukr';
import kor from '../src/components/localization/kor';
import * as firebase from 'firebase';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showMessage: false,
      active: true,
      language: ukr,
      disabled: true,
      number: 5
    }

    this.changeLanguageSiteKor = this.changeLanguageSiteKor.bind(this);
    this.changeLanguageSiteUkr = this.changeLanguageSiteUkr.bind(this);
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('react');
    const numberRef = rootRef.child('number');
    numberRef.on('value', snap => {
      this.setState({
         ...this.state,
         number: snap.val()
      })
    })
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
    this.setState({
      language: ukr,
    });
    this.activeButton(this.getElementBtnU());
    this.disableButton(this.getElementBtnK());
  }

  changeLanguageSiteKor() {
    this.setState({
      language: kor,
    })
    this.activeButton(this.getElementBtnK());
    this.disableButton(this.getElementBtnU());
  }

  activeButton(button) {
    button.disabled = true;
    button.classList.add('active-language');
  }

  disableButton(button) {
    button.disabled = false;
    button.classList.remove('active-language')
  }

  getElementBtnU() {
    return document.getElementById('ukr');
  }

  getElementBtnK() {
    return document.getElementById('kor');
  }

  // componentDidMount() {
  //   var button = this.getElementBtnU();
  //   if (this.state.active) {
  //     button.disabled = this.state.disabled;
  //     button.classList.add('active-language')
  //     this.setState({
  //       active: !this.state.active
  //     })
  //   }
  // }

  render() {
    let content = <Wrap language={this.state.language} />;
    if (this.state.showMessage) {
      content = <Message showWrap={this.showWrap} />;
    }
    return (
      <div className="App">

       {this.state.number}

        {/* <Header
          changeLanguageSiteUkr={this.changeLanguageSiteUkr}
          changeLanguageSiteKor={this.changeLanguageSiteKor}
          language={this.state.language}
          showMessage={this.showMessage}
        />
        {content}
        <Footer language={this.state.language} /> */}
      </div>
    );
  }
}

export default App;


