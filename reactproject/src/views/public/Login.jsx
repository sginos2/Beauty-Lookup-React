import { Form, Button, Message } from 'semantic-ui-react';
import { useContext, useState } from 'react';
import { AuthContext } from '../../dataLayer/AuthContext';
import { Redirect } from 'react-router-dom';

function Login(props) {
    const { login, isAuthed } = useContext(AuthContext);
    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    const [credentials, setCredentials] = useState();

    if (isAuthed) {
        return <Redirect to='/finder'/>
    } 

    const handleSubmit = () => {
        setLoading(true);
        login(credentials).then(response => {
            if (response === 'Error') {
                setError(true);
            }
            setLoading(false);
        });
    }
    const handleChange = ({ target: {value, name}}) => {
        setCredentials({
            ...credentials,
            [name]: value
        });
    }
    return (
        <div className='Login'>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Email</label>
                    <input type="email" onChange={handleChange} name='email'/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type="password" onChange={handleChange} name='password'/>
                </Form.Field>
                {error && (
                    <Message>
                        <p>Email or password was incorrect.</p>
                    </Message>
                )}
                <Button type='submit'>Submit</Button>
            </Form>
        </div>    
    )
}

export default Login;