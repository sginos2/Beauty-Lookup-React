//search bar and filter components
//generate card components for each cosmetologist/esthetician
//on click of card's 'see more' button, navigate to individual cosmetologist page
import CosmetCard from '../../components/CosmetCard';
import { getCosmetData } from '../../dataLayer/api';
import { useQuery } from 'react-query';

//need to loop through cosmetologists object and generate cards with different info
function Finder() {
    const { data: cosmetologists = [], isLoading } = useQuery('cosmetologist', getCosmetData);
    return (
        <div className='Finder'>
            <div className='findertitle'>
                <h2>Find a Professional</h2>
            </div>
            <div className='cards'>
                {cosmetologists.map(cosmetologist => <CosmetCard key = {cosmetologist.id} cosmetologist = {cosmetologist}/>)}
            </div>
        </div>
    )
}

export default Finder;