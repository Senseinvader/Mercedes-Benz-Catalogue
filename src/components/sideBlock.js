import React, {Component} from 'react';
import {connect} from "react-redux";


export class SideBlock extends Component {

    render() {
        const {modelConfiguration, configurationLoaded} = this.props;
        if (configurationLoaded){
            return(
                <div className="data-container">
                    <div className='char price'><p>Price: {modelConfiguration.price} {modelConfiguration.currency}</p></div>
                    <div className='char power'><p>Power: {modelConfiguration.power} {modelConfiguration.powerUnit}</p></div>
                    <div className='char capacity'><p>Capacity: {modelConfiguration.capacity} {modelConfiguration.capacityUnit}</p></div>
                    <div className='char speed'><p>Top speed: {modelConfiguration.topSpeed} {modelConfiguration.topSpeedUnit}</p></div>
                    <div className='char acceleration'><p>Acceleration:{modelConfiguration.acceleration} {modelConfiguration.accelerationUnit}</p></div>
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