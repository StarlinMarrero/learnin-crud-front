import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import 'bootswatch/dist/simplex/bootstrap.min.css';
import SignIn from './componnents/SignIn'
import Home from './componnents/Home';
import SignUp from './componnents/SignUp';
import Navbar from './componnents/Navbar';
import AuthMiddleware from './middleware/AuthMiddleware';
 

ReactDOM.render(
  <React.StrictMode>
   
    <BrowserRouter>
    <AuthMiddleware>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/signin" component={SignIn}/>
        {/* <Route exact path="/deleteUser/:id" component={}/> */}
      </Switch>
    </AuthMiddleware>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
