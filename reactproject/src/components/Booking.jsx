//'book now' button will activate a toast with confirmation and will clear form fields
import { Form, Input, Message } from 'semantic-ui-react';
import { getCosmetologist } from '../dataLayer/api';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useState } from 'react';

const options = [
    { key: 'selectTime', text: 'Select Time', value: '' },
    { key: '9', text: '9:00 AM', value: 'nineAM' },
    { key: '10', text: '10:00 AM', value: 'tenAM' },
    { key: '11', text: '11:00 AM', value: 'elevenAM' },
    { key: '12', text: '12:00 AM', value: 'twelvePM' },
    { key: '1', text: '1:00 PM', value: 'onePM' },
    { key: '2', text: '2:00 PM', value: 'twoPM' },
    { key: '3', text: '3:00 PM', value: 'threePM' },
    { key: '4', text: '4:00 PM', value: 'fourPM' },
];

const initialBookingForm = {
    firstName: '',
    lastName: '',
    phone: '',
    service1: false,
    service2: false,
    service3: false,
    date: '',
    bookingTime: ''
}

function Booking() {

    const { id } = useParams();
    const { data: cosmetologist } = useQuery(['cosmetologist', id], () => getCosmetologist(Number(id)));
    const [success, setSuccess] = useState();
    const [errors, setErrors] = useState({});
    const [bookingForm, setBookingForm] = useState(initialBookingForm);

    const handleSubmit = () => {
        if (!bookingForm.service1 && !bookingForm.service2 && !bookingForm.service3) {
            setErrors({
                ...errors,
                services: true
            })
            return;
        } 
        setSuccess(true);
        setBookingForm(initialBookingForm);
        setErrors({});
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        setBookingForm({
            ...bookingForm,
            [name] : value
        });
    }

    const handleChangeCheckbox = (e) => {
        const { checked, name } = e.target;
        if (checked) {
            setErrors({
                ...errors,
                services: false
            })
        } 
        setBookingForm({
            ...bookingForm,
            [name] : checked
        })
    }

    return (
        <div className='bookappointment'>
            <h2>Book an Appointment</h2>
            <Form onSubmit={handleSubmit} id='appointmentForm'>
                <Form.Group widths='equal'>
                    <Form.Field required control={Input} name='firstName' value={bookingForm.firstName} label='First name:' placeholder='First name' onChange={handleChange}/>
                    <Form.Field required control={Input} name='lastName' value={bookingForm.lastName} label='Last name:' placeholder='Last name' onChange={handleChange}/>
                    <Form.Field required control={Input} name='phone' value={bookingForm.phone} label='Phone Number:' placeholder='Phone Number' onChange={handleChange}/>
                </Form.Group>
                <Form.Group inline id='services'>
                    <label>Services:</label>
                    <Form.Field>
                        <input type='checkbox' name='service1' checked={bookingForm.service1} onChange={handleChangeCheckbox}/>
                        <label htmlFor='service1'>{cosmetologist.services[0]}</label>
                    </Form.Field>
                    <Form.Field>
                        <input type='checkbox' name='service2' checked={bookingForm.service2} onChange={handleChangeCheckbox}/>
                        <label htmlFor='service2'>{cosmetologist.services[1]}</label>
                    </Form.Field>
                    <Form.Field>
                        <input type='checkbox' name='service3' checked={bookingForm.service3} onChange={handleChangeCheckbox}/>
                        <label htmlFor='service3'>{cosmetologist.services[2]}</label>
                    </Form.Field>
                    {errors.services && (
                        <Message negative>
                            Please select a service.
                        </Message>
                    )}
                </Form.Group>
                <Form.Group id='dateTime'>
                    <input type='date' required name='date' value={bookingForm.date} onChange={handleChange} id='bookingDate'/>
                    <Form.Field>
                        <select required name='bookingTime' value={bookingForm.bookingTime} options={options} onChange={handleChange} id='bookingTime'>
                            {options.map(option => <option key={option.key} value={option.value}>{option.text}</option>)}
                        </select>
                    </Form.Field>
                </Form.Group>
                {success && (
                    <Message positive>
                        <p>Your appointment has been booked.</p>
                    </Message>
                )}
                <Form.Button type='Submit' id='bookingButton'>Book Now</Form.Button>
            </Form>
        </div>
    )
}

export default Booking;