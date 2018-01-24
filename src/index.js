import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// FIXME: import injectTapEventPlugin from 'react-tap-event-plugin';
import MainRouter from './main-router';
import './ux-core-styles.css';
import './style.css';

// injectTapEventPlugin();

ReactDOM.render(React.createElement(MainRouter), document.getElementById('root'));
