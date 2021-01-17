import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'

/***** Components *****/
import Home from './components/Home'
import SearchPage from './components/SearchPage'

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
            <SearchPage />
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
