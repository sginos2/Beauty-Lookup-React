import { Link } from 'react-router-dom';
import { Button, Image } from 'semantic-ui-react';


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

//need to loop through cosmetologists object and populate all cards with different info
function CosmetCard() {
    return (
        <div className='CosmetCard'>
            <div className='cosimage'>
                <Image src={cosmetologists[0].image} size='tiny' circular />
            </div>
            <div className='costext'>
                <p>{cosmetologists[0].name}</p>
                <p>{cosmetologists[0].title}</p>
                <p>Rating: {cosmetologists[0].rating}/5</p>
                <Link to='/cosmetologist'><Button>See More</Button></Link>
            </div>
        </div>
    )
}

export default CosmetCard;