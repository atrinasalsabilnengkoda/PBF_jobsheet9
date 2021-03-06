import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
//import App from './App';
import BlogPost from './container/BlogPost/BlogPost';
import reportWebVitals from './reportWebVitals';
import MahasiswaPost from './container/MahasiswaPost/MahasiswaPost'

// ReactDOM.render(<BlogPost/>, document.getElementById('root'));
ReactDOM.render(<MahasiswaPost/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();