import React, { Component } from 'react';
import Header from './components/header';
import SideBlock from './components/sideBlock';
import DescriptionComp from './components/description';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header/>
            <SideBlock/>
            <DescriptionComp/>
        </div>
    );
  }
}

export default App;
