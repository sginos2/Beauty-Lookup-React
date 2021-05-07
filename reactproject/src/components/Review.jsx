//on cosmetologist page, scroll to see review cards
import userImage from '../assets/default-profile.jpeg';
import { Image } from 'semantic-ui-react';

function Review({ review }) {

    return (
        <div className='reviews'>
            <div className='username'>
                <Image src={userImage} avatar />
                <span>{review.user}</span>
            </div>
            <h4>{review.rated}/5</h4>
            <p>{review.review}</p>
        </div>
    )
}

export default Review;