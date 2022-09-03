import React from 'react'
import PropTypes from 'prop-types'   //proteger componentes, meter lo que pides no lo que quieren

export const AddCounter = ({onAddPress}) => 
{
    /* const onAddPress = (event, mensaje) => {
        console.log();
    } */

    return (
        <button 
        // onClick={(e) => onAddPress(e, 'hola')}
        onClick={onAddPress}>
            +1
        </button>
    )
}

AddCounter.propTypes =
{
    number : PropTypes.func.isRequired
}