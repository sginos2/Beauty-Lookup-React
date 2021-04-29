//search bar and filter components
//generate card components for each cosmetologist/esthetician
//on click of card's 'see more' button, navigate to individual cosmetologist page
import CosmetCard from '../../components/CosmetCard';
import { Search, Dropdown } from 'semantic-ui-react';

//need to loop through cosmetologists object and generate cards with different info
function Finder() {
    return (
        <div className='Finder'>
            <div className='search'>
                <Search/>
                <Dropdown text='Filter'>
                    <Dropdown.Menu>
                        <Dropdown.Item text='A-Z'/>
                        <Dropdown.Item text='Z-A'/>
                        <Dropdown.Item text='Price: Low to High'/>
                        <Dropdown.Item text='Price: High to Low'/>
                    </Dropdown.Menu>
                </Dropdown>
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