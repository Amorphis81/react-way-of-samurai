import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
  {id: 1, message: 'Test mess 1', likeCounts: 15},
  {id: 2, message: 'Test mess 2', likeCounts: 20},
]

const dialogs = [
  {id: 1, name: 'Nike'},
  {id: 2, name: 'Mike'},
  {id: 3, name: 'Tramp'},
  {id: 4, name: 'Obama'},
  {id: 5, name: 'Alex'},
  {id: 6, name: 'Victor'},
]

const messages = [
  {id: 1, message: 'Hi hi'},
  {id: 2, message: 'Ho ho'},
  {id: 3, message: 'Hu hu'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
