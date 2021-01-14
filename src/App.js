import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'

/***** Components *****/
import Home from './components/Home'

/***** CSS *****/
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='/search'>
            <h1>This is the search page</h1>
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
