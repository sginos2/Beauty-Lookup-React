//on cosmetologist page, scroll to see review cards
import userImage from '../assets/default-profile.jpeg';
import { Image } from 'semantic-ui-react';

function Reviews() {
    return (
        <div className='reviews'>
            <div>
                <Image src={userImage} avatar />
                <span>user1987</span>
            </div>
            <h4>Rating: 4.5/5</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, recusandae sunt libero molestias, et, beatae deleniti dolore blanditiis sint itaque eveniet corporis mollitia similique maxime vel numquam? Facere, amet praesentium.</p>
        </div>
    )
}

export default Reviews;