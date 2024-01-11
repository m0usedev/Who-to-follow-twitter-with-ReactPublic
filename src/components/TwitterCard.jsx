
import PropTypes from 'prop-types';

import TwitterButton from './TwitterButton';

import '../css/components/TwitterCard.css'


export default function TwitterCard ({ avatar, name, user }) {

    return (
        <div className="contiener TwitterCard-continer">
            <div className="TwitterCard_avatar">
                <img alt={ 'avatar-'+name } src={ avatar }/>
            </div>
            <div className="TwitterCard_info">
                <div className="TwitterCard_info_name">
                    { name }
                </div>
                <div className="TwitterCard_info_user">
                    @{ user }
                </div>
            </div>
            <div className="TwitterCard_button">
                <TwitterButton type='follow' />
            </div>
        </div>
    )

}

TwitterCard.propTypes = {
    avatar: PropTypes.string.isRequired, // Define el tipo y si es requerido o no
    name: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
};