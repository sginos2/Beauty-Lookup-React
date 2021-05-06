//search bar and filter components
import CosmetCard from '../../components/CosmetCard';
import { getCosmetData } from '../../dataLayer/api';
import { useQuery } from 'react-query';

function Finder() {

    const { data: cosmetologists = [], isLoading } = useQuery('cosmetologist', getCosmetData);

    if (isLoading) {
        return <h2>Loading...</h2>
    }

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