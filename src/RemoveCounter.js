import React from "react";
import PropTypes from 'prop-types'

export const RemoveCounter =({onRemovePress}) =>
{
    return(
        <button
        onClick={onRemovePress}>
            -1
        </button>
    )
}

RemoveCounter.propTypes =
{
    number : PropTypes.func.isRequired
}