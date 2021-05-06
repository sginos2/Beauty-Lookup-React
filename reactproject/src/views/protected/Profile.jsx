//populate with users info
//have an appointments component listing their appointments they've booked
import api from '../../dataLayer/api';
import { useAuthContext } from '../../dataLayer/AuthContext';

function Profile() {
    const { user } = useAuthContext();

    if (!user) {
        return 'User does not exist.';
    }

    return (
        <div className='profile'>
            <div className='userinfo'>
                <h2>User Information</h2>
                <p>First Name: {user.firstName}</p>
                <p>Last Name: {user.lastName}</p>
                <p>Email: {user.email}</p>
                <p>Phone Number: {user.phone}</p>
            </div>
        </div>
    )
}

export default Profile;