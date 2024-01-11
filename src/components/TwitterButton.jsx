
import PropTypes from 'prop-types';
import { useState } from 'react';

import '../css/components/TwitterButton.css'

export default function TwitterButton ({ type }){
    let [dataFollow, setDataFollow] = new useState(false)

    return (
        <div className="TwitterButton">
            <button 
                data-follow={dataFollow} 
                onClick={ () => dataFollow ? setDataFollow(false) : setDataFollow(true) }
            >
                { type }
            </button>
        </div>
    )
}
TwitterButton.propTypes = {
    type: PropTypes.string.isRequired, // Define el tipo y si es requerido o no
};