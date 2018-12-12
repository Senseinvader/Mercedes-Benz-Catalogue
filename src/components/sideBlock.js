import React, {Component} from 'react';


class SideBlock extends Component {
    render() {
        return(
            <div className="data-container">
                <div className='price' model={this.props.model}>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
            </div>
        );
    }

}
export default SideBlock;