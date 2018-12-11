import React, {Component} from 'react';


class Header extends Component {

    render() {
        return (
            <div className="header-container">
                <div className="logo-container">

                </div>
                <div>
                    <select name="bodies" id="bodies">1</select>
                    <select name="models" id="models">2</select>
                </div>

            </div>
        )



    }
}

export default Header;