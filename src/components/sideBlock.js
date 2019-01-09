import React, {Component} from 'react';
import {connect} from "react-redux";


export class SideBlock extends Component {

    render() {
        const {modelConfiguration, configurationLoaded} = this.props;
        if (configurationLoaded){
            return(
                <div className="data-container row">
                    <div className='col s12'>
                        <div className='card-panel teal'>
                            <div className='char price white-text'><p>Price: {modelConfiguration.price} {modelConfiguration.currency}</p></div>
                            <div className='char power white-text'><p>Power: {modelConfiguration.power} {modelConfiguration.powerUnit}</p></div>
                            <div className='char capacity white-text'><p>Capacity: {modelConfiguration.capacity} {modelConfiguration.capacityUnit}</p></div>
                            <div className='char speed white-text'><p>Top speed: {modelConfiguration.topSpeed} {modelConfiguration.topSpeedUnit}</p></div>
                            <div className='char acceleration white-text'><p>Acceleration:{modelConfiguration.acceleration} {modelConfiguration.accelerationUnit}</p></div>
                        </div>
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