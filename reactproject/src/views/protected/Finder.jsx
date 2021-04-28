//search bar and filter components
//generate card components for each cosmetologist/esthetician
//on click of card's 'see more' button, navigate to individual cosmetologist page
import CosmetCard from '../../components/CosmetCard';

//need to loop through cosmetologists object and generate cards with different info
function Finder() {
    return (
        <div className='Finder'>
            <input type='text' placeholder='Search...'></input>
            <button>Filter</button>
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