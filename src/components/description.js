import React, {Component} from 'react';

class Description extends Component {
    render() {
        const {interiorDesc, exteriorDesc, exterior} = this.props;
        return (
            <div className='description'>
                <h3>
                    {exterior ? exteriorDesc : interiorDesc}
                </h3>
            </div>
        );
    }
}

export default Description;