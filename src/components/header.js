import React, {Component} from 'react';

class Header extends Component {

    render() {
        const {bodyList, modelList} = this.props;

        const optionElement = (name, key) => {
            return (
                <option value={name} key={key}>
                    {name}
                </option>
            )
        };

        const bodyOptionList = (elementList) => {
            if (elementList) {
                return (
                    <React.Fragment>
                        {elementList.map((element, key) => {
                            return optionElement(element, key);})
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
                    {bodyOptionList(bodyList)}
                </select>

                <select className="model-select">
                    {bodyOptionList(modelList)}
                </select>
            </div>
        )
    }
}



export default Header;