import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchBodyList, fetchModelList, fetchModelConfiguration} from '../actions/header-actions';

export class Header extends Component {

     componentDidMount() {
        const { onLoad } = this.props;
        window.addEventListener('load', onLoad);
     }

    render() {
        const {bodyList, modelList, handleChangeBodyId, handleChangeModelId} = this.props;
        const optionElement = (id, name, key) => {
            return (
                <option value={id} key={key}>
                    {name}
                </option>
            )
        };

        const optionList = (elementList, idLabel, nameLabel) => {
            if (elementList) {
                return (
                    <React.Fragment>
                        {elementList.map((element, key) => {
                            return optionElement(element[idLabel], element[nameLabel], key);
                            })
                        }
                    </React.Fragment>
                )
            }
        };

        return (
            <div className="header-container">
                <div className="logo-container">

                </div>
                <select className="body-select" onChange={(e) => handleChangeBodyId(e.currentTarget.value)}>
                    <option selected disabled hidden>Choose body type</option>
                    {optionList(bodyList, 'bodyId', 'bodyName')}
                </select>

                <select className="model-select" onChange={(e) => handleChangeModelId(e.currentTarget.value)}>
                    <option selected disabled hidden>Choose model</option>
                    {optionList(modelList, 'modelId', 'modelName')}
                </select>
            </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        bodyList: state.headerReducer.bodyList,
        modelList: state.headerReducer.modelList
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => {
            dispatch(fetchBodyList());
        },
        handleChangeBodyId: (bodyId) => {
            dispatch(fetchModelList(bodyId));
        },
        handleChangeModelId: (modelId) => {
            dispatch(fetchModelConfiguration(modelId))
        }
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(Header);
