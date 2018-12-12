import React from 'react';

const DescriptionComponent = ({interiorDesc, exteriorDesc, exterior}) => {
    return(
        <div className='description'>
            <h3>
                {exterior ? exteriorDesc : interiorDesc}
            </h3>
        </div>
    );
};

export default DescriptionComponent;