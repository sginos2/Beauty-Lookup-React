//'book now' button will activate a toast with confirmation and will clear form fields
import { Checkbox, Form, Input, Select, Message } from 'semantic-ui-react';
import { getCosmetologist } from '../dataLayer/api';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useState } from 'react';

const options = [
    { key: '9', text: '9:00 AM', value: 'nineAM' },
    { key: '10', text: '10:00 AM', value: 'tenAM' },
    { key: '11', text: '11:00 AM', value: 'elevenAM' },
    { key: '12', text: '12:00 AM', value: 'twelvePM' },
    { key: '1', text: '1:00 PM', value: 'onePM' },
    { key: '2', text: '2:00 PM', value: 'twoPM' },
    { key: '3', text: '3:00 PM', value: 'threePM' },
    { key: '4', text: '4:00 PM', value: 'fourPM' },
];

function Booking() {

    const { id } = useParams();
    const { data: cosmetologist } = useQuery(['cosmetologist', id], () => getCosmetologist(Number(id)));
    const [success, setSuccess] = useState();

    const handleSubmit = () => {
        setSuccess(true);
        document.getElementById('appointmentForm').reset();
    }

    return (
        <div className='bookappointment'>
            <h2>Book an Appointment</h2>
            <Form onSubmit={handleSubmit} id='appointmentForm'>
                <Form.Group widths='equal'>
                    <Form.Field required control={Input} label='First name:' placeholder='First name'/>
                    <Form.Field required control={Input} label='Last name:' placeholder='Last name'/>
                    <Form.Field required control={Input} label='Phone Number:' placeholder='Phone Number'/>
                </Form.Group>
                <Form.Group inline>
                    <label>Services:</label>
                    <Form.Field control={Checkbox} label={cosmetologist.services[0]}/>
                    <Form.Field control={Checkbox} label={cosmetologist.services[1]}/>
                    <Form.Field control={Checkbox} label={cosmetologist.services[2]}/>
                </Form.Group>
                <Form.Group>
                    <input type='date' required/>
                    <Form.Field control={Select} options={options} placeholder='Time' required/>
                </Form.Group>
                {success && (
                    <Message>
                        <p>Your appointment has been booked.</p>
                    </Message>
                )}
                <Form.Button type='Submit'>Book Now</Form.Button>
            </Form>
        </div>
    )
}

export default Booking;