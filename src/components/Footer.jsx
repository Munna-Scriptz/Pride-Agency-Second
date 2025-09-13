import React from 'react'
import logo from '../assets/images/PrideAgency.png'
import { Link } from 'react-router'
import { IoCall, IoCallOutline, IoLocationOutline, IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa'
import { CgMail } from 'react-icons/cg'
import { CiLocationOn } from 'react-icons/ci'
const Footer = () => {
  return (
    <>
    <footer className='mt-[112px] pb-[34px] pt-[104px] bg-primary'>
        <div className="container">
            <div id="Footer-Row" className='flex lg:flex-row flex-col lg:items-start items-center lg:gap-0 gap-[40px] justify-between'>
                <div className='flex flex-col lg:items-start items-center'>
                    <img className='w-[142px]' src={logo} alt="Logo" />
                    <div className='mt-9 flex flex-col lg:items-start items-center'>
                        <p className=' text-white lg:text-start text-center font-semibold text-lg lg:w-[300px] w-full '>আপনার ব্যবসার ডিজিটাল সফলতার সহযোগী</p>
                        <p className='text-white font-poppins flex items-center gap-2 mt-5'><IoLocationSharp /> Ekrampur CNG Station, Kishoreganj, Dhaka</p>
                        <p className='text-white font-poppins flex items-center gap-2 mt-2'><IoCall /> Phone : +880 1327-312666</p>
                        <p className='text-white font-poppins flex items-center gap-2 mt-2'><MdEmail /> Email : prideagency.it@gmail.com</p>
                    </div>
                </div>
                {/* -------------------------Pages------------------------------ */}
                <div>
                    <h2 className='text-white font-poppins font-medium text-3xl uppercase'>Pages</h2>
                    <div className='mt-4 flex flex-col lg:items-start items-center gap-3'>
                        <Link to={'/'} className='text-white font-poppins '>Home</Link>
                        <Link to={'/'} className='text-white font-poppins '>About</Link>
                        <Link to={'/'} className='text-white font-poppins '>Contact us</Link>
                        <Link to={'/'} className='text-white font-poppins '>Privacy & Policy</Link>
                    </div>
                </div>
                {/* -------------------------Company------------------------------ */}
                <div>
                    <h2 className='text-white font-poppins font-medium lg:text-start text-center text-3xl uppercase'>Company</h2>
                    <div className='mt-4 flex lg:items-start items-center flex-col gap-4'>
                        <div className='flex items-center gap-3.5'>
                            <div className='bg-white text-brand rounded-full w-[40px] h-[40px] flex items-center justify-center text-2xl'>
                                <IoLocationOutline />
                            </div>
                            <div>
                                <h2 className='text-2xl font-semibold font-poppins text-white'>Address</h2>
                                <p className='text-base text-white'>Ekrampur CNG Station, Kishoreganj, Dhaka</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3.5'>
                            <div className='bg-white text-brand rounded-full w-[40px] h-[40px] flex items-center justify-center text-2xl'>
                                <CgMail />
                            </div>
                            <div>
                                <h2 className='text-2xl font-semibold font-poppins text-white'>Email</h2>
                                <p className='text-base text-white'>prideagency.it@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3.5'>
                            <div className='bg-white text-brand rounded-full w-[40px] h-[40px] flex items-center justify-center text-2xl'>
                                <IoCallOutline />
                            </div>
                            <div>
                                <h2 className='text-2xl font-semibold font-poppins text-white'>Call Us</h2>
                                <p className='text-base text-white'>+880 1327-312666</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* -------------------------Social Media------------------------------ */}
                <div>
                    <h2 className='text-white font-poppins font-medium lg:text-start text-center text-3xl uppercase'>Social Media</h2>
                    <div className='mt-4 flex lg:items-start items-center gap-3'>
                        <a to={'/'} className='text-white cursor-pointer hover:bg-brand duration-300 font-poppins w-[40px] h-[40px] rounded-full border-1 border-white flex items-center justify-center text-xl'>
                            <FaFacebookF />
                        </a>
                        <a to={'/'} className='text-white cursor-pointer hover:bg-brand duration-300 font-poppins w-[40px] h-[40px] rounded-full border-1 border-white flex items-center justify-center text-xl'>
                            <FaTwitter />
                        </a>
                        <a to={'/'} className='text-white cursor-pointer hover:bg-brand duration-300 font-poppins w-[40px] h-[40px] rounded-full border-1 border-white flex items-center justify-center text-xl'>
                            <FaLinkedinIn />
                        </a>
                        <a to={'/'} className='text-white cursor-pointer hover:bg-brand duration-300 font-poppins w-[40px] h-[40px] rounded-full border-1 border-white flex items-center justify-center text-xl'>
                            <FaInstagram />
                        </a>
                        <a to={'/'} className='text-white cursor-pointer hover:bg-brand duration-300 font-poppins w-[40px] h-[40px] rounded-full border-1 border-white flex items-center justify-center text-xl'>
                            <FaPinterestP />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='border-t border-t-[#bebebe] mt-10 pt-6'>
            <p className='text-[#b4b4b4] font-poppins text-center'>© 2025 Munna-Scriptz, Inc.</p>
        </div>
    </footer>
    </>
  )
}

export default Footer