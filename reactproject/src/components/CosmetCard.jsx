//photo, name, title, 'see more' button for individual cosmetologist
import CosProfile from '../default-profile.jpeg';

function CosmetCard() {
    return (
        <div className='CosmetCard'>
            <div className='cosimage'>
                <img className='cosprofile' src={CosProfile} alt='cosmetologist'/>
            </div>
            <div className='costext'>
                <p>Jane Doe</p>
                <p>Nail Technician</p>
            </div>
            <button>See More</button>
        </div>
    )
}

export default CosmetCard;