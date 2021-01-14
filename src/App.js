import React from 'react'

/***** Components *****/
import Home from './pages/Home'

/***** CSS *****/
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {/** Home(the one with the search) */}
      {/** SearchPage (the results page) */}
      <Home />
    </div>
  );
}

export default App;
