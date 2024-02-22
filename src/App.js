
import React from "react";
import Header from './components/header'
import Navigation from './components/navigation';
import Content from './components/content';

import './css/w3.css';
import './css/ra-lcars.css';
import './css/fonts.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="w3-row w3-margin-top">
        <Navigation/>
        <Content/>
      </div>
    </div>
  );
}

export default App;
