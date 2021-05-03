//simple form with fields for name and phone number
//date and time dropdowns
//list of services and checkboxes next to them
//all fields must be filled for form to submit
//'book now' button will activate a toast with confirmation and will clear form fields
import { Checkbox, Form, Input, Select } from 'semantic-ui-react'

let cosmetologists = 
{
    0: {
        name: 'Jane Doe',
        title: 'Nail Technician',
        image: 'https://st3.depositphotos.com/2783505/16822/i/600/depositphotos_168224322-stock-photo-passport-picture-of-a-smiling.jpg',
        description: 'Jane is a California-licensed manicurist and has been working in the industry for 7 years. She is trained in manicures, pedicures, acrylics, silk and linen wraps, dusting, and paraffin treatments.',
        services: ['Manicure', 'Pedicure', 'Wraps', 'Paraffin Treatments'],
        rating: 4.5
    },
    1: {
        name: 'Mary Sue',
        title: 'Cosmetologist',
        image: 'https://st2.depositphotos.com/2783505/7767/i/600/depositphotos_77676422-stock-photo-passport-picture-of-a-blonde.jpg',
        description: 'Mary is a California-licensed cosmetologist and has bee working in the industry for 4 years. She is trained in hair styling and makeup artistry.',
        services: ['Hairstyling', 'Makeup'],
        rating: 4
    },
    2: {
        name: 'Nancy Gray',
        title: 'Esthetician',
        image: 'https://st2.depositphotos.com/2783505/8226/i/600/depositphotos_82263538-stock-photo-passport-picture-of-a-modern.jpg',
        description: 'Nancy is a California-licensed esthetician and has been working in the industry for 12 years. She is trained in facials, peels, micro-dermabrasions, and waxing.',
        services: ['Facial', 'Waxing'],
        rating: 5
    },
    3: {
        name: 'Carolyn Maxwell',
        title: 'Makeup Artist',
        image: 'https://st2.depositphotos.com/2783505/9427/i/600/depositphotos_94278920-stock-photo-passport-picture-of-a-blonde.jpg',
        description: 'Carolyn is a California-licensed cosmetologist who specializes in makeup artistry and has been working in the industry for 9 years. She is trained in a wide range of makeup looks from prom to red-carpet to broadway.',
        services: ['Stage Makeup', 'Wedding Makeup', 'Traditional Makeup'],
        rating: 4.5
    },
    4: {
        name: 'Jonathan Griswold',
        title: 'Hair Stylist',
        image: 'https://thumbs.dreamstime.com/b/young-handsome-man-portrait-identity-card-passport-driver-licence-document-id-photo-concept-180761988.jpg',
        description: 'Jonathan is a California-licenced cosmetologist who specializes in hair-cutting and styling and has been working in the industry for 4 years. He is trained in cutting, coloring, and perming hair.',
        services: ['Hair Cut', 'Hair Color', 'Perm'],
        rating: 4
    },
    5: {
        name: 'Jaime Finnegan',
        title: 'Esthetician',
        image: 'https://media.istockphoto.com/photos/portrait-of-an-african-american-man-with-glasses-picture-id502581380?k=6&m=502581380&s=612x612&w=0&h=574qb-a-HNWkmDqG0t4S14YnroyYARd4rAngvlj-IAk=',
        description: 'Jaime is a California-licensed esthetician and has been working in the industry for 17 years. He is trained in specialty facials, gua-sha, and skincare consultations.',
        services: ['Specialty Facial', 'Gua-Sha Session', 'Skincare Consultation'],
        rating: 5
    },
    6: {
        name: 'Kennedy Barron',
        title: 'Nail Technician',
        image: 'https://previews.123rf.com/images/sylv1rob1/sylv1rob11902/sylv1rob1190201038/118164788-portrait-for-documents-passport-photo-of-young-female-in-natural-look.jpg',
        description: 'Kennedy is a California-licensed cosmetologist who specializes in nails and has been working in the industry for 3 years. She is trained in gel and acrylic manicures.',
        services: ['Gel Manicure', 'Acrylic Manicure'],
        rating: 4
    }
};

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
                    <Form.Field required control={Input} label='First name:' placeholder='First name'/>
                    <Form.Field required control={Input} label='Last name:' placeholder='Last name'/>
                    <Form.Field required control={Input} label='Phone Number:' placeholder='Phone Number'/>
                </Form.Group>
                <Form.Group inline>
                    <label>Services:</label>
                    <Form.Field control={Checkbox} label={cosmetologists[0].services[0]}/>
                    <Form.Field control={Checkbox} label={cosmetologists[0].services[1]}/>
                    <Form.Field control={Checkbox} label={cosmetologists[0].services[2]}/>
                    <Form.Field control={Checkbox} label={cosmetologists[0].services[3]}/>
                </Form.Group>
                <Form.Group>
                    <input type='date'/>
                    <Form.Field control={Select} options={options} placeholder='Time'/>
                </Form.Group>
                <Form.Button content='Submit'>Book Now</Form.Button>
            </Form>
        </div>
    )
}

export default Booking;