import React, {Component} from 'react';
import { connect } from 'react-redux';

export class Description extends Component {
    render() {
        const {exterior, configurationLoaded} = this.props;
        if (configurationLoaded) {
            return (
                <div className='description'>
                    <h3>
                        {exterior ? "This is exterior photo" : "This is interior photo"}
                    </h3>
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}

export const mapStateToProps = (state) => {
    return {
        exterior: state.sliderReducer.exterior,
        configurationLoaded: state.headerReducer.configurationLoaded
    }
};

export default connect(mapStateToProps)(Description);