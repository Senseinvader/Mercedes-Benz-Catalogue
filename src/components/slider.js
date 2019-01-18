import React, {Component} from 'react';
import {changeImage, fetchModelConfigurationImages} from '../actions/sliderActions';
import {connect} from "react-redux";

class Slider extends Component {

    componentDidMount() {
        const {picturesUrl, model, handleLoadImages} = this.props;
        handleLoadImages(model, picturesUrl);
    }

    photosLoaded() {
        const {interPhoto, outerPhoto} = this.props;
        return interPhoto && outerPhoto;
    }

    render() {
        const {interPhoto, outerPhoto, exterior, handleChangeImage} = this.props;

        return  (
            <div className="slider-container">
                <a href className="button-image-back waves-effect grey darken-3 btn-large" onClick={handleChangeImage}><i class="fas fa-caret-left"></i></a>
                <a href className="button-image-forward waves-effect grey darken-3 btn-large" onClick={handleChangeImage}><i class="fas fa-caret-right"></i></a>
                <img className='image responsive-img' src={exterior ? outerPhoto : interPhoto} alt="Mercedes" />
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
