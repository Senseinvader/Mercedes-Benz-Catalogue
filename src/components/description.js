import React, {Component} from 'react';
import { connect } from 'react-redux';
import {decremetDescriptionID, incremetDescriptionID} from "../actions/description-actions";

class Description extends Component {

    componentDidMount() {
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
                    <h5 className='title-description'>Car components</h5>
                    <div className='component-container row'>
                        <a href className="waves-effect grey darken-3 btn-large col s1" onClick={changeToPreviousDescription}>&lt;</a>
                        <div className='description col s10'><p>{description}</p></div>
                        <a href className="waves-effect grey darken-3 btn-large col s1" onClick={changeToNextDescription}>&gt;</a>
                    </div>
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