import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const one=[1,2,3,4,5,123,431];
const two=[1,2,2,9,4,13,11];
console.log(one,two);

console.log("only two", one.concat(two).filter((item)=>{return !one.includes(item)}));
console.log("only one", one.concat(two).filter((item)=>{return !two.includes(item)}));
console.log("Unique items",one.concat(two));
const a=new Set(one.concat(two));
console.log([...a]);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
