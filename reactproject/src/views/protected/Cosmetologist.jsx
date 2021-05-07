import Review from '../../components/Review';
import FormExampleClearOnSubmit from '../../components/Booking';
import { Image } from 'semantic-ui-react';
import LeaveReview from '../../components/LeaveReview';
import { getCosmetologist } from '../../dataLayer/api';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

function IndividualCosmet() {

    const { id } = useParams();
    const { data: cosmetologist, isLoading } = useQuery(['cosmetologist', id], () => getCosmetologist(Number(id))); 

    if (isLoading) {
        return <h2>Loading...</h2>
    }
    
    if (!cosmetologist) {
        return <h2>Could not find cosmetologist.</h2>
    }

    const { reviews = [] } = cosmetologist; 

    return (
        <>  
            <div className='individualcosmettop'>
                <div className='individualcosmetinfo'>
                    <Image className='indivisualcosmetimage' src={cosmetologist.image} size='small' circular/>
                    <p>{cosmetologist.name}<br/>{cosmetologist.title}<br/>Rating: {cosmetologist.rating}/5</p>
                </div>
                <div className='aboutcosmet'>
                    <p>{cosmetologist.description}</p>
                    <LeaveReview/>
                </div>
                <div className='booking'>
                    <FormExampleClearOnSubmit/>
                </div>
            </div>
            <div className='reviewcards'>
                {reviews.map((review, index) => <Review key = {index} review = {review}/>)}
            </div>
        </>

    )
}

export default IndividualCosmet;