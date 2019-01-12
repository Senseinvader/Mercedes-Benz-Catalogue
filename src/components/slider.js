import React, {Component} from 'react';
import {changeImage, fetchModelConfigurationImages} from '../actions/sliderActions';
import {connect} from "react-redux";

class Slider extends Component {

    componentDidMount() {
        const {picturesUrl, model, handleLoadImages} = this.props;
        handleLoadImages(model, picturesUrl);
    }

    render() {
        const {interPhoto, outerPhoto, exterior, handleChangeImage} = this.props;
        return  (
            <div className="slider-container">
                {outerPhoto ? <img src={exterior ? outerPhoto : interPhoto} alt="Mercedes" onClick={handleChangeImage} /> : null}
            </div>
        );
    };
}

export const mapStateToProps = (state) => {
    return {
        exterior: state.sliderReducer.exterior,
        interPhoto: state.headerReducer.modelConfiguration.interPhoto,
        outerPhoto: state.headerReducer.modelConfiguration.outerPhoto,
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

export const UnwrappedSlider = Slider;

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
