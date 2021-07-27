import jane from '../assets/jane-doe.jpeg';
import mary from '../assets/mary-sue.jpeg';
import nancy from '../assets/nancy-gray.jpeg';
import carolyn from '../assets/carolyn-maxwell.jpeg';
import jonathan from '../assets/jonathan-griswold.jpeg';
import jaime from '../assets/jaime-finnegan.jpeg';
import kennedy from '../assets/kennedy-barron.jpeg';
import timothy from '../assets/timothy-maxwell.jpeg';
import jennifer from '../assets/jennifer-coolidge.jpeg';

const data =
[
    {
        id: 1,
        name: 'Jane Doe',
        title: 'Nail Technician',
        image: jane,
        description: 'Jane is a California-licensed manicurist and has been working in the industry for 7 years. She is trained in manicures, pedicures, acrylics, silk and linen wraps, dusting, and paraffin treatments.',
        services: ['Manicure', 'Pedicure', 'Paraffin Treatments'],
        rating: 4,
        reviews: [
            {
                user: 'user1987',
                rated: 5,
                review: 'Great service, very friendly.'
            },
            {
                user: 'user1963',
                rated: 4,
                review: 'Very professional.'
            },
            {
                user: 'user1996',
                rated: 4,
                review: 'My nails have never looked this good! Jane did a wonderful job.'
            }
        ]
    },
    {
        id: 2,
        name: 'Mary Sue',
        title: 'Cosmetologist',
        image: mary,
        description: 'Mary is a California-licensed cosmetologist and has bee working in the industry for 4 years. She is trained in hair styling and makeup artistry.',
        services: ['Hairstyling', 'Makeup', 'Full Package'],
        rating: 4,
        reviews: [
            {
                user: 'user1972',
                rated: 4,
                review: 'Mary made me look gorgeous. Great work.'
            },
            {
                user: 'user1965',
                rated: 4,
                review: 'She did my girl\'s hair for prom and it looked lovely.'
            },
            {
                user: 'user1998',
                rated: 4,
                review: 'Very pleased with my service.'
            }
        ]
    },
    {
        id: 3,
        name: 'Nancy Gray',
        title: 'Esthetician',
        image: nancy,
        description: 'Nancy is a California-licensed esthetician and has been working in the industry for 12 years. She is trained in facials, peels, micro-dermabrasions, and waxing.',
        services: ['Facial', 'Waxing', 'Micro-Dermabrasions'],
        rating: 5,
        reviews: [
            {
                user: 'user1988',
                rated: 5,
                review: 'Nancy was very professional and quick.'
            },
            {
                user: 'user1963',
                rated: 5,
                review: 'Quick, painless wax job.'
            },
            {
                user: 'user1989',
                rated: 5,
                review: 'Will definitely book with Nancy again.'
            }
        ]
    },
    {
        id: 4,
        name: 'Carolyn Maxwell',
        title: 'Makeup Artist',
        image: carolyn,
        description: 'Carolyn is a California-licensed cosmetologist who specializes in makeup artistry and has been working in the industry for 9 years. She is trained in a wide range of makeup looks from prom to red-carpet to broadway.',
        services: ['Stage Makeup', 'Wedding Makeup', 'Traditional Makeup'],
        rating: 4,
        reviews: [
            {
                user: 'user1971',
                rated: 4,
                review: 'She did my makeup for my wedding and it looked beautiful.'
            },
            {
                user: 'user1974',
                rated: 5,
                review: 'Carolyn made my daughter look like a million bucks for homecoming! Amazing work!'
            },
            {
                user: 'user2001',
                rated: 4,
                review: 'Did good. Made good small talk.'
            }
        ]
    },
    {
        id: 5,
        name: 'Jonathan Griswold',
        title: 'Hair Stylist',
        image: jonathan,
        description: 'Jonathan is a California-licenced cosmetologist who specializes in hair-cutting and styling and has been working in the industry for 4 years. He is trained in cutting, coloring, and perming hair.',
        services: ['Hair Cut', 'Hair Color', 'Perm'],
        rating: 4,
        reviews: [
            {
                user: 'user1969',
                rated: 5,
                review: 'Best balayage I\'ve gotten in years.'
            },
            {
                user: 'user1972',
                rated: 4,
                review: 'Jonathan was very quick and professional.'
            },
            {
                user: 'user1993',
                rated: 4,
                review: 'Cut my hair just how I like it.'
            }
        ]   
    },
    {
        id: 6,
        name: 'Jaime Finnegan',
        title: 'Esthetician',
        image: jaime,
        description: 'Jaime is a California-licensed esthetician and has been working in the industry for 17 years. He is trained in specialty facials, gua-sha, and skincare consultations.',
        services: ['Specialty Facial', 'Gua-Sha Session', 'Skincare Consultation'],
        rating: 5,
        reviews: [
            {
                user: 'user1980',
                rated: 5,
                review: 'Felt very pampered and relaxed after my session.'
            },
            {
                user: 'user1968',
                rated: 5,
                review: 'Jaime helped me figure out my skin problems and I look 10 years younger now!'
            },
            {
                user: 'user1999',
                rated: 5,
                review: 'Excellent service and very competent.'
            }
        ]
    },
    {
        id: 7,
        name: 'Kennedy Barron',
        title: 'Nail Technician',
        image: kennedy,
        description: 'Kennedy is a California-licensed cosmetologist who specializes in nails and has been working in the industry for 3 years. She is trained in gel and acrylic manicures and pedicures.',
        services: ['Gel Manicure', 'Acrylic Manicure', 'Pedicure'],
        rating: 4,
        reviews: [            {
                user: 'user1973',
                rated: 4,
                review: 'I usually get my nails done somewhere else but Kennedy did great in a pinch.'
            },
            {
                user: 'user1964',
                rated: 4,
                review: 'Good work.'
            },
            {
                user: 'user1997',
                rated: 4,
                review: 'My nails look great.'
            }
        ]
    },
    {
        id: 8,
        name: 'Timothy Maxwell',
        title: 'Makeup Artist',
        image: timothy,
        description: 'Timothy is a California-licensed cosmetologist who specializes in makeup artistry and has been working in the industry for 8 years. He is trained in high-fashion makeup looks.',
        services: ['Full Face', 'Special Events', 'Headshot Makeup'],
        rating: 5,
        reviews: [            {
                user: 'user1967',
                rated: 5,
                review: 'Timothy made my vision come to life! I look AMAZING!.'
            },
            {
                user: 'user1977',
                rated: 5,
                review: 'I can\'t say enough good things about Timothy! He was incredibly professional and did a stellar job.'
            },
            {
                user: 'user1980',
                rated: 5,
                review: 'Unbelievable service. Highly talented.'
            }
        ]
    },
    {
        id: 9,
        name: 'Jennifer Coolidge',
        title: 'Hair Stylist',
        image: jennifer,
        description: 'Jennifer is a California-licensed cosmetologist who specializes in hair coloring and has been working in the industry for 15 years. She is trained in bleaching, perms, balayages, and hair coloring.',
        services: ['Hair Coloring', 'Balayage', 'Perm'],
        rating: 4,
        reviews: [            {
                user: 'user1976',
                rated: 5,
                review: 'Jennifer made me look like the fourth of July! Amazing work.'
            },
            {
                user: 'user1966',
                rated: 4,
                review: 'Good, quick service. Would come back again.'
            },
            {
                user: 'user1999',
                rated: 4,
                review: 'I got a balayage from Jennifer and it is to DIE for. She did incredible!'
            }
        ]
    }
    
];

export default data;