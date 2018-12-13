import React, {Component} from 'react';
// import changeImage from '../actions/'

class Slider extends Component {
    render() {
        console.log(this.props);
        const {arr, exterior, handleChangeImage} = this.props;
        if (arr === undefined) {
            return (
                <div className="slider-container">
                    <div className="slider fade">
                        <img src='' alt="1"/>
                        <p>Image is not provided</p>
                        <div className="comment">Test</div>
                    </div>
                </div>
            );
        }

        return(
            <div className="slider-container">
                <div className="slider fade">
                    <img src={exterior ? arr[0] : arr[1]} alt="1" />
                    <div className="comment">Test</div>
                </div>
            </div>
        );
    };
}

export default Slider;

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handleChangeImage: () => dispatch(changeImage)
//     }
}