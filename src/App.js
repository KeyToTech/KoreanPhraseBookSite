import React, { Component } from 'react';
import './App.css';
import Header from './container/header/header.js';
import Wrap from './container/content/wrap.js';
import Footer from './container/footer/footer.js';
import Message from './container/message/message';

class App extends Component {
  constructor(props){
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
    var name = "Owen";
    let content = <Wrap />;
    if(this.state.showMessage){
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


