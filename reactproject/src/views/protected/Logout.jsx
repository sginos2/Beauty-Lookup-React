//button will set isAuthed to false and take you to home page
// import { useContext, useState } from 'react';
// import { AuthContext } from '../../dataLayer/AuthContext';
// import { Redirect } from 'react-router-dom';

function Logout() {
    // const { isAuthed } = useContext(AuthContext);
    // const [credentials, setCredentials] = useState();

    const handleClick = () => {
        //set isAuthed to false
        //redirect to homepage
    }

    return (
        <div className='Logout'>
            <button onClick={handleClick}>Log Out</button>
        </div>
    )
}

export default Logout;