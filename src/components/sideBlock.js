import React, {Component} from 'react';
import {connect} from "react-redux";


class SideBlock extends Component {

    render() {
        // const {price, currency, power, powerUnit,
        //     capacity, capacityUnit, topSpeed, topSpeedUnit, acceleration, accelerationUnit} = this.props;
            const {modelConfiguration} = this.props;
            console.log(modelConfiguration);
        return(
            <div className="data-container">
                <div className='char price'><h3>{modelConfiguration.price} {modelConfiguration.currency}</h3></div>
                <div className='char power'><h3>{modelConfiguration.power} {modelConfiguration.powerUnit}</h3></div>
                <div className='char capacity'><h3>{modelConfiguration.capacity} {modelConfiguration.capacityUnit}</h3></div>
                <div className='char speed'><h3>{modelConfiguration.topSpeed} {modelConfiguration.topSpeedUnit}</h3></div>
                <div className='char acceleration'><h3>{modelConfiguration.acceleration} {modelConfiguration.accelerationUnit}</h3></div>
            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        modelConfiguration: state.headerReducer.modelConfiguration,
    }
};

export default connect(mapStateToProps)(SideBlock);