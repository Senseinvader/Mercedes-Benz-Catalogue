import React, {Component} from 'react';
import {changeImage, increaseImage, decreaseImage, fetchModelConfigurationImages} from '../actions/sliderActions';
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
        const {interPhoto, outerPhoto, exterior, modal, handleChangeImage, handleImageIncrease, handleImageDecrease} = this.props;

        if(modal) {
            return  (
                <div className="modal-container">
                    <img className='image responsive-img' src={exterior ? outerPhoto : interPhoto} alt="Mercedes" onClick={handleImageDecrease}/>
                </div>
            );
        }
        return (
            <div className="slider-container">
                <a href className="button-image-back waves-effect grey darken-3 btn-large" onClick={handleChangeImage}><i class="fas fa-caret-left"></i></a>
                <a href className="button-image-forward waves-effect grey darken-3 btn-large" onClick={handleChangeImage}><i class="fas fa-caret-right"></i></a>
                <i class="increase-button fade fas fa-plus-circle" onClick={handleImageIncrease}></i>
                <img className='image responsive-img' src={exterior ? outerPhoto : interPhoto} alt="Mercedes" />
            </div>
        )
    };
}

export const mapStateToProps = (state) => {
    return {
        exterior: state.sliderReducer.exterior,
        modal: state.sliderReducer.modal,
        interPhoto: state.headerReducer.modelConfiguration.interPhoto,
        outerPhoto: state.headerReducer.modelConfiguration.outerPhoto,
        picturesUrl: state.headerReducer.picturesUrl,
        model: state.headerReducer.modelConfiguration
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeImage: () => dispatch(changeImage()),
        handleLoadImages: (model, picturesUrl) => dispatch(fetchModelConfigurationImages(model, picturesUrl)),
        handleImageIncrease: () => dispatch(increaseImage()),
        handleImageDecrease: () => dispatch(decreaseImage())
    }
};

export const UnwrappedSlider = Slider;

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
