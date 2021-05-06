import { Button, Form, Select, TextArea } from 'semantic-ui-react';

const ratings = [
    { key: '1', text: '1/5', value: 'one' },
    { key: '2', text: '2/5', value: 'two' },
    { key: '3', text: '3/5', value: 'three' },
    { key: '4', text: '4/5', value: 'four' },
    { key: '5', text: '5/5', value: 'five' }
];

function LeaveReview() {
    return (
        <div className='leavereview'>
            <Form success size={'tiny'}>
                <Form.Field>
                    <label>Leave a Review</label>
                    <TextArea/>
                </Form.Field>
                <Form.Field compact control={Select} options={ratings} placeholder='Rating:'/>
                <Button size={'tiny'}>Submit</Button>
                {/* <Message success header='Review submitted' content='Your review of this professional has been submitted.'/> */}
            </Form>
        </div>
    )
}

export default LeaveReview;