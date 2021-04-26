//render an h1 and a paragraph about 'our mission'
//'get started' button that takes you to login page
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='Home'>
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo quos maiores itaque tempora rem nostrum, consequuntur consequatur pariatur beatae dolores minus aut nulla officiis odit quisquam neque sapiente ab autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ratione et. Impedit accusamus quia eveniet deleniti ab hic veniam nihil. Vitae delectus nihil amet nisi ducimus iste atque ratione itaque!</p>
            <Link to='/login'><button>Get Started</button></Link>
        </div>
    )
}

export default Home;