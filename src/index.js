import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Server } from "miragejs"
import LoginPage from './pages/login/LoginPage'
console.log(process.env.REACT_APP_ENV_NAME)
if (process.env.REACT_APP_ENV_NAME === 'mock') {
  /**
   * Mock server 
   */
  console.log('Starting mock server.')
  let server = new Server()
  server.get("/api/users", { users: [{ id: 1, name: "Bob" }] })
  console.log()
}


ReactDOM.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
