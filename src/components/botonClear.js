import React from 'react';

function BotonClear (props) {
    return (
        <div className='btn-clear' onClick={props.handlerClear}>
            {props.children}
        </div>
    );
}

export default BotonClear;