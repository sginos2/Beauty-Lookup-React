//list services with a 'book now' button that navigates to booking page
//under info and services show reviews for cosmetologist
//under reviews have a 'leave review' component with a text box and a submit button with a rating bar
// import LeaveReview from '../../components/LeaveReview';
import Reviews from '../../components/Reviews';
import Booking from '../../components/Booking';
import { Image } from 'semantic-ui-react';


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


function IndividualCosmet() {
    return (
        <>  
            <div className='individualcosmettop'>
                <div className='individualcosmetinfo'>
                    <Image className='marysue' src={cosmetologists[1].image} size='small' circular/>
                    <p>{cosmetologists[1].name}<br/>{cosmetologists[1].title}</p>
                </div>
                <div className='aboutcosmet'>
                    <p>About:</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ipsa alias ipsam enim eveniet voluptate, explicabo veniam praesentium magni, asperiores at iusto odit dolor vero nemo similique nisi repellat quos?</p>
                </div>
                <div className='booking'>
                    <Booking/>
                </div>
            </div>
            {/* <div className='reviewtextbox'>
                <LeaveReview/>
            </div> */}
            <div className='reviewcards'>
                <Reviews/>
                <Reviews/>
                <Reviews/>
                <Reviews/>
                <Reviews/>
                <Reviews/>
            </div>
        </>

    )
}

export default IndividualCosmet;