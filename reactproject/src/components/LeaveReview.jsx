import { Button, Form } from 'semantic-ui-react';


function LeaveReview() {
    return (
        <div className='leavereview'>
            <Form>
                <Form.Field>
                    <label>Leave a Review</label>
                    <input/>
                </Form.Field>
                <Button>Submit</Button>
            </Form>
        </div>
    )
}

export default LeaveReview;