import { Button, Form, Select, TextArea, Message } from 'semantic-ui-react';
import { useState } from 'react';

const ratings = [
    { key: '1', text: '1/5', value: 'one' },
    { key: '2', text: '2/5', value: 'two' },
    { key: '3', text: '3/5', value: 'three' },
    { key: '4', text: '4/5', value: 'four' },
    { key: '5', text: '5/5', value: 'five' }
];

function LeaveReview() {

    const [success, setSuccess] = useState();

    const handleSubmit = () => {
        setSuccess(true);
        document.getElementById('reviewForm').reset();
    }

    return (
        <div className='leavereview'>
            <Form onSubmit={handleSubmit} size={'tiny'} id='reviewForm'>
                <Form.Field>
                    <label>Leave a Review</label>
                    <TextArea required/>
                </Form.Field>
                <Form.Field compact control={Select} options={ratings} placeholder='Rating:'/>
                {success && (
                    <Message>
                        <p>Your rating has been submitted for review.</p>
                    </Message>
                )}
                <Button type='Submit' size={'tiny'}>Submit</Button>
            </Form>
        </div>
    )
}

export default LeaveReview;