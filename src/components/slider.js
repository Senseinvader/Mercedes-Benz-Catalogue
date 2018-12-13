import React, {Component} from 'react';

class Slider extends Component {
    render() {
        console.log(this.props);
        const {arr, exterior} = this.props;
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
                    <img src={exterior ? arr[0] : arr[1]} alt="1"/>
                    <div className="comment">Test</div>
                </div>
                <a className="prev">&#10094;</a>
                <a className="next">&#10095;</a>
            </div>
        );
    };
}

export default Slider;