import React, {Component} from 'react';
import {changeImage, fetchModelConfigurationImages} from '../actions/sliderActions';
import {connect} from "react-redux";
import {carModel} from "../actions/body-jsons";

export class Slider extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
            const {picturesUrl, model, handleLoadImages} = this.props;
            if (prevProps.picturesUrl != picturesUrl) {
                handleLoadImages(model, picturesUrl);
            }
    }

    render() {
        const {interPhoto, outerPhoto, exterior, handleChangeImage, picturesUrl, model, handleLoadImages} = this.props;
        if (interPhoto === undefined) {
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
                    <img src={exterior ? interPhoto : outerPhoto} alt="Mercedes" onClick={handleChangeImage} />
                    <div className="comment">Test</div>
                </div>
            </div>
        );
    };
}

export const mapStateToProps = (state) => {
    return {
        interPhoto: state.headerReducer.modelConfiguration.interPhoto,
        outerPhoto: state.headerReducer.modelConfiguration.outerPhoto,
        exterior: state.sliderReducer.exterior,
        picturesUrl: state.headerReducer.picturesUrl,
        model: state.headerReducer.modelConfiguration
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeImage: () => dispatch(changeImage()),
        handleLoadImages: (model, picturesUrl) => dispatch(fetchModelConfigurationImages(model, picturesUrl))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
