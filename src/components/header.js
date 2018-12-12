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

        const optionList = (elementList) => {
            if (elementList) {
                return (
                    <React.Fragment>
                        {elementList.map((element, key) => {
                            console.log(element)
                            const {bodyId, bodyName} = element;
                            return optionElement(bodyId, bodyName, key);})
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
                    {optionList(bodyList)}
                </select>

                <select className="model-select">
                    {optionList(modelList)}
                </select>
            </div>
        )
    }
}



export default Header;