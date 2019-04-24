import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import strings from '../src/components/localization/languages';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App languages={strings} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
