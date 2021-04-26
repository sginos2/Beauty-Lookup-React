import { Form } from 'semantic-ui-react';
import { useContext, useState } from 'react';
import { AuthContext } from '../../dataLayer/AuthContext';
import { Redirect } from 'react-router-dom';

function Login(props) {
    const { login, isAuthed } = useContext(AuthContext);
    const [credentials, setCredentials] = useState();

    if (isAuthed) {
        return <Redirect to='/finder'/>
    }

    const handleSubmit = () => {
        login(credentials);
    }
    const handleChange = ({ target: {value, name}}) => {
        setCredentials({
            ...credentials,
            [name]: value,
        })
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
                <button type='submit'>Submit</button>
            </Form>
        </div>    
    )
}

export default Login;