import React, { Component } from 'react';
import Header from './components/header';
import SideBlock from './components/sideBlock';
import DescriptionComp from './components/description';
import Slider from './components/slider';

class App extends Component {
  render() {
      console.log(this.props);
    return (
        <div className="App">
            <Header/>
            <SideBlock/>
            <Slider/>
            <DescriptionComp/>
        </div>
    );
  }
}

export default App;
