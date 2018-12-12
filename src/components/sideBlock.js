import React, {Component} from 'react';


class SideBlock extends Component {

    render() {
        const {price, currency, fuelConsumptionUnit, fuelConsumption, power, powerUnit,
            capacity, capacityUnit, topSpeed, topSpeedUnit, acceleration, accelerationUnit} = this.props;
        return(
            <div className="data-container">
                <div className='char price'><h3>{price} {currency}</h3></div>
                <div className='char fuel'><h3>{fuelConsumption} {fuelConsumptionUnit}</h3></div>
                <div className='char power'><h3>{power} {powerUnit}</h3></div>
                <div className='char capacity'><h3>{capacity} {capacityUnit}</h3></div>
                <div className='char speed'><h3>{topSpeed} {topSpeedUnit}</h3></div>
                <div className='char acceleration'><h3>{acceleration} {accelerationUnit}</h3></div>
            </div>
        );
    }
}
export default SideBlock;