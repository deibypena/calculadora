import React from 'react';

function Boton (props) {

    const isOperator = (value) => isNaN(value) && (value !== '.') && (value !== '=');

    return (
        <div className={`btn-calculator ${ isOperator(props.children) ? 'btn-operator' : '' }`.trimEnd()}
        onClick={() => props.handlerClick(props.children)}>
            {props.children}
        </div>
    );
}

export default Boton;