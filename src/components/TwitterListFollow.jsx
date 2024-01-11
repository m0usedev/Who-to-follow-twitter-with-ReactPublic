
import TwitterCard from './TwitterCard';

import '../css/components/TwitterListFollow.css';

export default function TwitterListFollow ( ) {
    let follows = [
        {
            avatar : 'https://acortar.link/H5lpFP',
            name   : 'pepe',
            user   :  'pepe'
        },
        {
            avatar : 'https://acortar.link/qYPZod',
            name   : 'sonia',
            user   :  'Son14'
        },
        {
            avatar : 'https://acortar.link/K6X7v9',
            name   : 'pajarito',
            user   :  'Po0lla'
        }
    ]

    let listFollows = follows.map( (follower) => {
        return ( <TwitterCard key={follower.user} avatar={follower.avatar} name={follower.name} user={follower.user} /> )
    })

    return (
        <div className='TwitterListFollow-container'>
            <div className='TwitterListFollow_header'>
                Who to follow
            </div>
            <div className='TwitterListFollow_list'>
                { listFollows }
            </div>
            <div className='TwitterListFollow_footer'>
                Seguir viendo...
            </div>
        </div>
    )
}

