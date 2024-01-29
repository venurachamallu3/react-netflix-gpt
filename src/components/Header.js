import React from 'react'
import  netflix_logo from '../assests/Netflix_Logo_PMS.png'

function Header() {
    return (
        <div className='absolute w-[100%] bg-gradient-to-b from-black'>
            <img src={netflix_logo} alt='n-logo' className=' w-52'></img>

        </div>
    )
}

export default Header