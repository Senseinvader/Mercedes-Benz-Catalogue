import React, {Component} from 'react';
import { connect } from 'react-redux';

class Description extends Component {
    render() {
        const {exterior} = this.props;
        return (
            <div className='description'>
                <h3>
                    {exterior ? "This is exterior photo" : "This is interior photo"}
                </h3>
            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        exterior: state.sliderReducer.exterior
    }
};

export default connect(mapStateToProps)(Description);