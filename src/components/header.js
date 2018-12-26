import React, {Component} from 'react';

class Header extends Component {

    render() {
        const {bodyList, modelList} = this.props;

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
                            return optionElement(element[idLabel], element[nameLabel], key);})
                        }
                    </React.Fragment>
                )
            } else {
                return (
                    <option>
                        Empty
                    </option>
                )
            }
        };

        return (
            <div className="header-container">
                <div className="logo-container">

                </div>
                <select className="body-select">
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
        bodyList: state.headerReducer.bodyList
    }
};



export default Header;