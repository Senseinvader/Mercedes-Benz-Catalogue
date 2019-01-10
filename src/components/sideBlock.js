import React, {Component} from 'react';
import {connect} from "react-redux";

export class SideBlock extends Component {

    render() {
        const {modelConfiguration, configurationLoaded} = this.props;
        if (configurationLoaded){
            return(
                <div className="data-container">
                    <div className='char price'><h3>Price: {modelConfiguration.price} {modelConfiguration.currency}</h3></div>
                    <div className='char power'><h3>Power: {modelConfiguration.power} {modelConfiguration.powerUnit}</h3></div>
                    <div className='char capacity'><h3>Capacity: {modelConfiguration.capacity} {modelConfiguration.capacityUnit}</h3></div>
                    <div className='char speed'><h3>Top speed: {modelConfiguration.topSpeed} {modelConfiguration.topSpeedUnit}</h3></div>
                    <div className='char acceleration'><h3>Acceleration:{modelConfiguration.acceleration} {modelConfiguration.accelerationUnit}</h3></div>
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}

export const mapStateToProps = (state) => {
    return {
        modelConfiguration: state.headerReducer.modelConfiguration,
        configurationLoaded: state.headerReducer.configurationLoaded
    }
};

export default connect(mapStateToProps)(SideBlock);