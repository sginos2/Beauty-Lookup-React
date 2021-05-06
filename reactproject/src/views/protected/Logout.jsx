import { useAuthContext } from '../../dataLayer/AuthContext';
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