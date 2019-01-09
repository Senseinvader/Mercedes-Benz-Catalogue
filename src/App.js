import React, { Component } from 'react';
import Header from './components/header';
import SideBlock from './components/sideBlock';
import DescriptionComp from './components/description';
import Slider from './components/slider';
import 'materialize-css/dist/css/materialize.min.css';
import './css/slider-styles.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header/>
            <div className='flex-wrapper'>
                <SideBlock/>
                <Slider/>
            </div>
            <DescriptionComp/>
        </div>
    );
  }
}

export default App;
