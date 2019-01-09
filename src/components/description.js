import React, {Component} from 'react';
import { connect } from 'react-redux';

export class Description extends Component {
    render() {
        const {exterior, configurationLoaded} = this.props;
        if (configurationLoaded) {
            return (
                <div className='description'>
                    <h6>
                        {exterior ? "This is the exterior photo" : "This is the interior photo"}
                    </h6>
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