import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchBodyList, fetchModelList} from '../actions/header-actions';

export class Header extends Component {

     componentDidMount() {
        const { onLoad } = this.props;
        window.addEventListener('load', onLoad);
     }

    render() {
        const {bodyList, modelList, handleChangeBodyId} = this.props;
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
                    {optionList(bodyList, 'bodyId', 'bodyName')}
                </select>

                <select className="model-select">
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
            console.log('in mapDispathcToProps');
            dispatch(fetchBodyList());
        },

        handleChangeBodyId: (bodyId) => {
            console.log(bodyId)
            dispatch(fetchModelList(bodyId));
        }
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(Header);
