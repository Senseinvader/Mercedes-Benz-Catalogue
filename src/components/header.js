import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchBodyList, fetchModelList, fetchModelConfiguration} from '../actions/header-actions';
import M from 'materialize-css/dist/js/materialize.min.js'

export class Header extends Component {

     componentDidMount() {
        const { onLoad } = this.props;
        window.addEventListener('load', onLoad);
        M.AutoInit();
     }
     componentDidUpdate(prevProps) {
         if(this.props !== prevProps) {
            M.AutoInit();
         }
     }

    render() {
        
        const {bodyList, modelList, handleChangeBodyId, handleChangeModelId, bodyLoaded, modelLoaded} = this.props;
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
            <div className="header-container row">
                <div className="logo-container">

                </div>
                <div className="input-field col s6">
                    <select className="body-select" onChange={(e) => handleChangeBodyId(e.currentTarget.value)} disabled={bodyLoaded}>
                        <option value='' selected disabled>Choose body type</option>
                        {optionList(bodyList, 'bodyId', 'bodyName')}
                    </select>
                </div>

                <div className="input-field col s6">
                    <select className="model-select" onChange={(e) => handleChangeModelId(e.currentTarget.value)} disabled={modelLoaded}>
                        <option selected disabled>Choose model</option>
                        {optionList(modelList, 'modelId', 'modelName')}
                    </select>
                </div>
            </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        bodyList: state.headerReducer.bodyList,
        modelList: state.headerReducer.modelList,
        bodyLoaded: state.headerReducer.bodyLoaded,
        modelLoaded: state.headerReducer.modelLoaded
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => {
            console.log('in mapDispathcToProps');
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

export const UnwrappedHeader = Header;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
