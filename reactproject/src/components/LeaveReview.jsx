import { Button, Form, TextArea, Message } from 'semantic-ui-react';
import { useState } from 'react';

const ratings = [
    { key: 'selectRating', text: 'Select Rating', value: '' },
    { key: '1', text: '1/5', value: 'one' },
    { key: '2', text: '2/5', value: 'two' },
    { key: '3', text: '3/5', value: 'three' },
    { key: '4', text: '4/5', value: 'four' },
    { key: '5', text: '5/5', value: 'five' }
];

function LeaveReview() {

    const [success, setSuccess] = useState();
    const [reviewForm, setReviewForm] = useState({});

    const handleChange = (e) => {
        const { value, name } = e.target;
        setReviewForm({
            ...reviewForm,
            [name] : value
        });
    }

    const handleSubmit = () => {
        setSuccess(true);
        setReviewForm({reviewText: '', reviewRating: ''});
    }

    return (
        <div className='leavereview'>
            <Form onSubmit={handleSubmit} size={'tiny'} id='reviewForm'>
                <Form.Field>
                    <label>Leave a Review</label>
                    <TextArea required name='reviewText' value={reviewForm.reviewText} onChange={handleChange}/>
                </Form.Field>
                <Form.Field>
                    <select required name='reviewRating' value={reviewForm.reviewRating} options={ratings} onChange={handleChange}>
                        {ratings.map(rating => <option key={rating.key} value={rating.value}>{rating.text}</option>)}
                    </select>
                </Form.Field>
                {success && (
                    <Message positive>
                        <p>Your rating has been submitted for review.</p>
                    </Message>
                )}
                <Button type='Submit' size={'tiny'}>Submit</Button>
            </Form>
        </div>
    )
}

export default LeaveReview;