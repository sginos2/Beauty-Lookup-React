//simple form with fields for name and phone number
//date and time dropdowns
//list of services and checkboxes next to them
//all fields must be filled for form to submit
//'book now' button will activate a toast with confirmation and will clear form fields
import { Button, Checkbox, Form, Input, Select } from 'semantic-ui-react'

const options = [
    { key: '9', text: '9:00 AM', value: 'nineAM' },
    { key: '10', text: '10:00 AM', value: 'tenAM' },
    { key: '11', text: '11:00 AM', value: 'elevenAM' },
    { key: '12', text: '12:00 AM', value: 'twelvePM' },
    { key: '1', text: '1:00 PM', value: 'onePM' },
    { key: '2', text: '2:00 PM', value: 'twoPM' },
    { key: '3', text: '3:00 PM', value: 'threePM' },
    { key: '4', text: '4:00 PM', value: 'fourPM' },
]

function Booking() {
    return (
        <div className='bookappointment'>
            <h2>Book an Appointment</h2>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field control={Input} label='First name:' placeholder='First name'/>
                    <Form.Field control={Input} label='Last name:' placeholder='Last name'/>
                    <Form.Field control={Input} label='Phone Number:' placeholder='Phone Number'/>
                </Form.Group>
                <Form.Group inline>
                    <label>Services:</label>
                    <Form.Field control={Checkbox} label='Facial'/>
                    <Form.Field control={Checkbox} label='Waxing'/>
                    <Form.Field control={Checkbox} label='Sugaring'/>
                </Form.Group>
                <Form.Group>
                    <input type='date'/>
                    <Form.Field control={Select} options={options} placeholder='Time'/>
                </Form.Group>
                <Form.Field control={Button}>Book Now</Form.Field>
            </Form>
        </div>
    )
}

export default Booking;