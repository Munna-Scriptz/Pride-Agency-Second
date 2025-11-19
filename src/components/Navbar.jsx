import React from 'react'
import logo from '../assets/images/PrideAgency.png'
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <>
        <nav className='py-[20px] lg:block hidden' data-aos="fade-down">
            <div className="container">
                <div id="Nav-Row" className='flex items-center justify-between'>
                    {/* -----------------Logo-------------------- */}
                    <Link to={'/'}><img className='w-[80px]' src={logo} alt="Logo" data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-delay="800"/></Link>
                    {/* -----------------Nav links-------------------- */}
                    <div className='flex items-center gap-8 text-xl font-poppins'>
                        <Link className='hover:text-primary duration-300' to={'/'} data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-delay="1000">Home</Link>
                        <Link className='hover:text-primary duration-300' to={'/'} data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-delay="1200">About Us</Link>
                        <Link className='hover:text-primary duration-300' to={'/'} data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-delay="1400">Services</Link>
                    </div>
                    {/* -----------------Nav Buttons-------------------- */}
                    <Link to={'/'} className='py-[18px] px-[45px] font-siliguri rounded-full bg-primary text-white cursor-pointer text-lg' data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-delay="1800">
                        যোগাযোগ করুন
                    </Link>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar