import React, { Component } from 'react';
import Header from './components/header';
import SideBlock from './components/sideBlock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SideBlock/>
      </div>
    );
  }
}

export default App;
