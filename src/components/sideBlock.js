import React, {Component} from 'react';


class SideBlock extends Component {

    render() {
        const {price, currency} = this.props;
        return(
            <div className="data-container">
                <div className='price' car={this.props.car}><h3>{price} {currency}</h3></div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
            </div>
        );
    }
// {this.props.model.price} {this.props.model.currency}
}
export default SideBlock;