//populate with users info
//have an appointments component listing their appointments they've booked
import Appointments from '../../components/Appointments';

function Profile() {
    return (
        <div className='profile'>
            <div className='userappointments'>
                <h2>Your Appointments</h2>
                <Appointments/>
            </div>
        </div>
    )
}

export default Profile;