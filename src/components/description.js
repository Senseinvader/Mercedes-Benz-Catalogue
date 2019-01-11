import React, {Component} from 'react';
import { connect } from 'react-redux';
import {decremetDescriptionID, incremetDescriptionID} from "../actions/description-actions";

class Description extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {description, changeToNextDescription} = this.props;
        if (description === '') {
            changeToNextDescription();
        }
    }

    render() {
        const {configurationLoaded, description, changeToNextDescription, changeToPreviousDescription} = this.props;

        if (configurationLoaded) {
            return (
                <div className='description-wrapper'>
                    <a href className="waves-effect grey darken-3 btn-large" onClick={changeToPreviousDescription}>&lt;</a>
                    <div><p>{description}</p></div>
                    <a href className="waves-effect grey darken-3 btn-large" onClick={changeToNextDescription}>&gt;</a>
                </div>
            );
        } else {
            return <div></div>;
        }
    }


}

export const mapStateToProps = (state) => {
    return {
        description: state.descriptionReducer.description,
        exterior: state.sliderReducer.exterior,
        configurationLoaded: state.headerReducer.configurationLoaded
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        changeToNextDescription: () => { dispatch(incremetDescriptionID()) },
        changeToPreviousDescription: () => { dispatch(decremetDescriptionID()) }

    }


}

export const UnwrappedDesc = Description;

export default connect(mapStateToProps, mapDispatchToProps)(Description);