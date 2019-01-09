import React, {Component} from 'react';
import {connect} from "react-redux";


export class SideBlock extends Component {

    render() {
        const {modelConfiguration, configurationLoaded} = this.props;
        console.log('configuartion', modelConfiguration);
        if (configurationLoaded){
            return(
                <div className="data-container">
                        <div className='card-panel grey darken-3'>
                            <div className='char price white-text'><p>Price: <b>{modelConfiguration.price} {modelConfiguration.currency}</b></p></div>
                            <div className='char doors white-text'><p>Number of doors: <b>{modelConfiguration.doors}</b></p></div>
                            <div className='char seats white-text'><p>Number of seats: <b>{modelConfiguration.seats}</b></p></div>
                            <div className='char power white-text'><p>Power: <b>{modelConfiguration.power} {modelConfiguration.powerUnit}</b></p></div>
                            <div className='char capacity white-text'><p>Capacity: <b>{modelConfiguration.capacity} {modelConfiguration.capacityUnit}</b></p></div>
                            <div className='char cylinder white-text'><p>Number of cylinders: <b>{modelConfiguration.cylinder}</b></p></div>
                            <div className='char emission white-text'><p>Emission standard: <b>{modelConfiguration.emissionStandard}</b></p></div>
                            <div className='char speed white-text'><p>Top speed: <b>{modelConfiguration.topSpeed} {modelConfiguration.topSpeedUnit}</b></p></div>
                            <div className='char acceleration white-text'><p>Acceleration: <b>{modelConfiguration.acceleration} {modelConfiguration.accelerationUnit}</b></p></div>
                        </div>
                    
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