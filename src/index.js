import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import './Tools/General.scss';
=======

>>>>>>> 367493853e1bc3e733d3c74e2c08f75aefd9daea
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom"


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
