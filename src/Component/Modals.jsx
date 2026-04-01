import React from 'react';
import { use } from 'react';
const Modals = ({modalPromise}) => {
    const modals = use(modalPromise)
    console.log(modals)
    return (
        <div>
            
        </div>
    );
};

export default Modals;