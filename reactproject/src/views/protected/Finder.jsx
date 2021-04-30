//search bar and filter components
//generate card components for each cosmetologist/esthetician
//on click of card's 'see more' button, navigate to individual cosmetologist page
import CosmetCard from '../../components/CosmetCard';
import { Search, Dropdown } from 'semantic-ui-react';

const filterOptions = [
    {key: 'a', text: 'All A-Z', value: 'a'},
    {key: 'b', text: 'Cosmetologists', value: 'b'},
    {key: 'c', text: 'Estheticians', value: 'c'},
    {key: 'd', text: 'Hair Stylists', value: 'd'},
    {key: 'e', text: 'Nail Technicians', value: 'e'},
    {key: 'f', text: 'Makeup Artists', value: 'f'},
];

//need to loop through cosmetologists object and generate cards with different info
function Finder() {
    return (
        <div className='Finder'>
            <div className='search'>
                <Search/>
                <Dropdown placeholder='Filter' search selection options={filterOptions}/>
            </div>
            <div className='cards'>
                <CosmetCard/>
                <CosmetCard/>
                <CosmetCard/>
                <CosmetCard/>
                <CosmetCard/>
                <CosmetCard/>
                <CosmetCard/>
                <CosmetCard/>
                <CosmetCard/>
            </div>
        </div>
    )
}

export default Finder;