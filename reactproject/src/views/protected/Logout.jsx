//button will set isAuthed to false and take you to home page
// import { useContext, useState } from 'react';
// import { AuthContext } from '../../dataLayer/AuthContext';
// import { Redirect } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

function Logout() {
    // const { isAuthed } = useContext(AuthContext);
    // const [credentials, setCredentials] = useState();

    const handleClick = () => {
        //set isAuthed to false
        //redirect to homepage
    }

    return (
        <div className='Logout'>
            <Button onClick={handleClick}>Log Out</Button>
        </div>
    )
}

export default Logout;