import { useAuthContext } from '../../dataLayer/AuthContext';

function Profile() {
    const { user } = useAuthContext();

    if (!user) {
        return 'User does not exist.';
    }

    return (
        <div className='profile'>
            <div className='userinfobox'>
                <h2>User Information</h2>
                <div className='userinfo'>
                    <p>First Name: {user.firstName}</p>
                    <p>Last Name: {user.lastName}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone Number: {user.phone}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;