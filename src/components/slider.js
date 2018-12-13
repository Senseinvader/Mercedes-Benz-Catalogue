import React, {Component} from 'react';
import changeImage from '../actions/sliderActions';
import {connect} from "react-redux";

export class Slider extends Component {
    render() {
        const {arr, exterior, handleChangeImage} = this.props;
        if (arr === undefined) {
            return (
                <div className="slider-container">
                    <div className="slider fade">
                        <img src='' alt="1"/>
                        <p>Image is not provided</p>
                        <div className="comment">Test</div>
                    </div>
                </div>
            );
        }

        return(
            <div className="slider-container">
                <div className="slider fade">
                    <img src={exterior ? arr[0] : arr[1]} alt="1" onClick={() => handleChangeImage} />
                    <div className="comment">Test</div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        arr: state.searchReducer.searchCriteria,
        items: state.searchReducer.items
    }
};

const mapDispatchToProps = (dispatch) => {
    console.log('action called');
    return {
        handleChangeImage: () => dispatch(changeImage)
    }
};

export default connect(mapDispatchToProps)(Slider);
