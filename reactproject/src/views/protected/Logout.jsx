//button will set isAuthed to false and take you to home page
// import { useContext, useState } from 'react';
import { useAuthContext } from '../../dataLayer/AuthContext';
// import { Redirect } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

function Logout() {
    const { logout } = useAuthContext();

    const handleClick = () => {
        logout();
    }

    return (
        <div className='Logout'>
            <Button onClick={handleClick}>Log Out</Button>
        </div>
    )
}

export default Logout;