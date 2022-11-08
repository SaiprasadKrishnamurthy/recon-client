import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Results from './Results';


class App extends Component {
  render() {
    console.log("Host URL" + process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Recon Client</h1>
          </header>
          <Switch>
            <Route exact path='/' component={Results} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
