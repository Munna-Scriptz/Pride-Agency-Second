import React from 'react'
import logo from '../assets/images/PrideAgency.png'
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <>
        <nav className='py-[20px]'>
            <div className="container">
                <div id="Nav-Row" className='flex items-center justify-between'>
                    {/* -----------------Logo-------------------- */}
                    <Link to={'/'}><img className='w-[80px]' src={logo} alt="Logo" /></Link>
                    {/* -----------------Nav links-------------------- */}
                    <div className='flex items-center gap-8 text-xl font-poppins'>
                        <Link className='hover:text-primary duration-300' to={'/'}>Home</Link>
                        <Link className='hover:text-primary duration-300' to={'/'}>About Us</Link>
                        <Link className='hover:text-primary duration-300' to={'/'}>Services</Link>
                    </div>
                    {/* -----------------Nav Buttons-------------------- */}
                    <Link to={'/'} className='py-[18px] px-[45px] rounded-full bg-primary text-white cursor-pointer text-lg'>
                        যোগাযোগ করুন
                    </Link>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar