//list services with a 'book now' button that navigates to booking page
//under info and services show reviews for cosmetologist
//under reviews have a 'leave review' component with a text box and a submit button with a rating bar
import LeaveReview from '../../components/LeaveReview';
import Reviews from '../../components/Reviews';

function IndividualCosmet() {
    return (
        <>
            <div className='individualcosmetinfo'>
                <h1>Mary Sue</h1>
                <h3>Cosmetologist</h3>
            </div>
            <div className='reviewtextbox'>
                <LeaveReview/>
            </div>
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