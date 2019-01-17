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
                    <p className='title-description'>Car components</p>
                    <div className='component-container row'>
                        <a href className="waves-effect grey darken-3 btn-large col s1" onClick={changeToPreviousDescription}><i class="fas fa-caret-left"></i></a>
                        <div className='description col s10'><p>{description}</p></div>
                        <a href className="waves-effect grey darken-3 btn-large col s1" onClick={changeToNextDescription}><i class="fas fa-caret-right"></i></a>
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