import React, {Component} from 'react';
import Header from './components/header/header.js';
import Content from './components/content/content.js';
import Footer from './components/footer/footer.js';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div>                
                <Header/>
                <Content/>
                <Footer/>
            </div>

        );
    }
}

export default App;
