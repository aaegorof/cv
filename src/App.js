import React from 'react';
import logo from './logo.svg';
import './App.less';
import Job from './Job'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Job/>

      </header>
    </div>
  );
}

export default App;
