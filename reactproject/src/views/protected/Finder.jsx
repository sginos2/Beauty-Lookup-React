//show 'finder' tab on header after login
//search bar and filter components
//generate card components for each cosmetologist/esthetician
//on click of card's 'see more' button, navigate to individual cosmetologist page
import CosmetCard from '../../components/CosmetCard';

function Finder() {
    return (
        <div className='Finder'>
            <input type='text' placeholder='Search...'></input>
            <button>Filter</button>
            <div className='cards'>
                <CosmetCard/>
                <CosmetCard/>
                <CosmetCard/>
                <br/>
                <CosmetCard/>
                <CosmetCard/>
                <CosmetCard/>
                <br/>
                <CosmetCard/>
                <CosmetCard/>
                <CosmetCard/>
            </div>
        </div>
    )
}

export default Finder;