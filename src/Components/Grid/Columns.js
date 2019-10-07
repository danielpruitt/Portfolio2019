import React from 'react';

export const Columns = ({children, isGapless}) => (
    <div className={`columns ${isGapless ? ' is-gapless' : ''}`}>
        {children}
    </div>


);

export default Columns