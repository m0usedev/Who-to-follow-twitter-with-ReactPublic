
import PropTypes from 'prop-types';
import { useState } from 'react';

import '../css/components/TwitterButton.css'

export default function TwitterButton ({ ifFollow }){
    let [dataFollow, setDataFollow] = new useState(ifFollow)

    return (
        <div className="TwitterButton">
            <button 
                data-follow={dataFollow} 
                onClick={ () => dataFollow ? setDataFollow(false) : setDataFollow(true) }
            >
                { dataFollow ? 'following' : 'follow' }
                
            </button>
        </div>
    )
}
TwitterButton.propTypes = {
    ifFollow: PropTypes.bool.isRequired, // Define el tipo y si es requerido o no
};