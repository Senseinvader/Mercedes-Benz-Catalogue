import React, {Component} from 'react';

class Slider extends Component {
    render() {
        const {arr} = this.props;
        if (arr === undefined) {
            return (
                <div className="slider-container">
                    <div className="slider fade">
                        <img src='' alt="1"/>
                        <p>Image is not provided</p>
                        <div className="comment">Test</div>
                    </div>
                    <a className="prev">&#10094;</a>
                    <a className="next">&#10095;</a>
                </div>
            );
        }

        return(
            <div className="slider-container">
                <div className="slider fade">
                    <img src={arr[0]} alt="1"/>
                    <div className="comment">Test</div>
                </div>
                <a className="prev">&#10094;</a>
                <a className="next">&#10095;</a>
            </div>
        );
    };
}

export default Slider;