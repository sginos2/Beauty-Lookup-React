//render an h1 and a paragraph about 'our mission'
//'get started' button that takes you to login page
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

function Home() {
    return (
        <div className='Home'>
            <h1>Our Mission</h1>
            <p>Our mission here at Beauty Look-Up is to streamline your beautification needs! No more sifting through individual cosmetologist's Facebook pages to find the professional you want. You can find all licensed cosmetologists, estheticians, nail technicians, and more all in one place with this tool. You can search for the highest-rated professionals and book an appointment with them right here! You can also leave reviews to let others know the quality of service you received from each individual technician. Now what are you waiting for? Find a specialist today and book an appointment to start feeling beautiful again!</p>
            <Link to='/login'><Button>Get Started</Button></Link>
        </div>
    )
}

export default Home;