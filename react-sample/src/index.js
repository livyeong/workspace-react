import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//index.html안에 root라고하는 id값을 가진 div태그에 리액트DOM을 생성
const root = ReactDOM.createRoot(document.getElementById('root'));
//생성한 리액트DOM을 화면에 출력시킨다.
//이때 화면에 출력시킬 파일은 App.js
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
