import { Link } from 'react-router-dom';
import { Button, Image } from 'semantic-ui-react';


let cosmetologists = 
{
    0: {
        name: 'Jane Doe',
        title: 'Nail Technician',
        image: 'https://st3.depositphotos.com/2783505/16822/i/600/depositphotos_168224322-stock-photo-passport-picture-of-a-smiling.jpg'
    },
    1: {
        name: 'Mary Sue',
        title: 'Cosmetologist',
        image: 'https://st2.depositphotos.com/2783505/7767/i/600/depositphotos_77676422-stock-photo-passport-picture-of-a-blonde.jpg'
    },
    2: {
        name: 'Nancy Gray',
        title: 'Esthetician',
        image: 'https://st2.depositphotos.com/2783505/8226/i/600/depositphotos_82263538-stock-photo-passport-picture-of-a-modern.jpg'
    }
};

//need to loop through cosmetologists object and populate all cards with different info
function CosmetCard() {
    return (
        <div className='CosmetCard'>
            <div className='cosimage'>
                <Image src={cosmetologists[1].image} size='tiny' circular />
            </div>
            <div className='costext'>
                <p>{cosmetologists[1].name}</p>
                <p>{cosmetologists[1].title}</p>
                <Link to='/cosmetologist'><Button>See More</Button></Link>
            </div>
        </div>
    )
}

export default CosmetCard;