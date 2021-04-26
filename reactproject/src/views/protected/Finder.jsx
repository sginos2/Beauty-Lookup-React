//show 'finder' tab on header after login
//search bar and filter components
//generate card components for each cosmetologist/esthetician
//on click of card's 'see more' button, navigate to individual cosmetologist page

function Finder() {
    return (
        <div className='Finder'>
            <input type='text' placeholder='Search...'></input>
            <button>Filter</button>
            <p>Cosmetologist #1</p>
            <p>Cosmetologist #2</p>
            <p>Cosmetologist #3</p>
        </div>
    )
}

export default Finder;