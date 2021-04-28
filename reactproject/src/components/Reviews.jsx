//on cosmetologist page, scroll to see review cards
import userImage from '../assets/default-profile.jpeg';

function Reviews() {
    return (
        <div className='reviews'>
            <div className='userimage'>
                <img className='userprofile' src={userImage} alt='user'/>
            </div>
            <div className='userinfo'>
                <h3>user1987</h3>
                <h4>Rating: 4.5/5 stars (star icons)</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, recusandae sunt libero molestias, et, beatae deleniti dolore blanditiis sint itaque eveniet corporis mollitia similique maxime vel numquam? Facere, amet praesentium.</p>
            </div>
        </div>
    )
}

export default Reviews;