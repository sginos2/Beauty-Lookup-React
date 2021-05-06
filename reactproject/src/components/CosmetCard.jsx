import { Link } from 'react-router-dom';
import { Button, Image } from 'semantic-ui-react';

function CosmetCard({cosmetologist}) {
    
    if (!cosmetologist) {
        return null;
    }

    return (
        <div className='CosmetCard'>
            <div className='cosimage'>
                <Image src={cosmetologist.image} size='tiny' circular />
            </div>
            <div className='costext'>
                <p>{cosmetologist.name}</p>
                <p>{cosmetologist.title}</p>
                <p>Rating: {cosmetologist.rating}/5</p>
                <Link to={`/cosmetologist/${cosmetologist.id}`}><Button>See More</Button></Link>
            </div>
        </div>
    )
}

export default CosmetCard;