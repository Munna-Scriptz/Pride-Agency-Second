import React from 'react'
import logo from '../assets/images/PrideAgency.png'
import { Link } from 'react-router'
import { IoCall, IoCallOutline, IoLocationOutline, IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa'
import { CgMail } from 'react-icons/cg'

const Footer = () => {
  return (
    <>
    <footer className='mt-[112px] pb-[34px] pt-[104px] bg-primary'>
        <div className="container">
            <div id="Footer-Row" className='flex lg:flex-row flex-col items-start lg:gap-0 gap-[40px] justify-between'>
                <div className='flex flex-col'>
                    <img className='w-[142px]' src={logo} alt="Logo" data-aos="fade-up"/>
                    <div className='mt-9 flex flex-col items-start'>
                        <p className=' text-white text-start font-semibold text-lg lg:w-[300px] w-full' data-aos="fade-up">আপনার ব্যবসার ডিজিটাল সফলতার সহযোগী</p>
                        <p className='text-white lg:text-base text-sm font-poppins flex items-center gap-2 mt-5' data-aos="fade-up" data-aos-offset="10" ><IoLocationSharp /> Ekrampur CNG Station, Kishoreganj, Dhaka</p>
                        <p className='text-white lg:text-base text-sm font-poppins flex items-center gap-2 mt-2' data-aos="fade-up" data-aos-offset="10" ><IoCall /> Phone : +880 1327-312666</p>
                        <p className='text-white lg:text-base text-sm font-poppins flex items-center gap-2 mt-2' data-aos="fade-up" data-aos-offset="10" ><MdEmail /> Email : prideagency.it@gmail.com</p>
                    </div>
                </div>
                {/* -------------------------Pages------------------------------ */}
                <div>
                    <h2 className='text-white font-poppins font-medium text-3xl uppercase' data-aos="fade-up" >Pages</h2>
                    <div className='mt-4 flex flex-col items-start gap-3'>
                        <Link to={'/'} className='text-white font-poppins' data-aos="fade-up">Home</Link>
                        <Link to={'/'} className='text-white font-poppins ' data-aos="fade-up">About</Link>
                        <Link to={'/'} className='text-white font-poppins ' data-aos="fade-up">Contact us</Link>
                        <Link to={'/'} className='text-white font-poppins ' data-aos="fade-up">Privacy & Policy</Link>
                    </div>
                </div>
                {/* -------------------------Company------------------------------ */}
                <div>
                    <h2 className='text-white font-poppins font-medium text-start text-3xl uppercase' data-aos="fade-up">Company</h2>
                    <div className='mt-4 flex items-start flex-col gap-4'>
                        <div className='flex items-center gap-3.5' data-aos="fade-up">
                            <div className='bg-white text-brand rounded-full lg:w-[40px] w-[35px] lg:h-[40px] h-[35px] flex items-center justify-center lg:text-2xl text-lg'>
                                <IoLocationOutline />
                            </div>
                            <div>
                                <h2 className='lg:text-2xl text-xl font-semibold font-poppins text-white'>Address</h2>
                                <p className='lg:text-base text-sm text-white'>Ekrampur CNG Station, Kishoreganj, Dhaka</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3.5' data-aos="fade-up">
                            <div className='bg-white text-brand rounded-full lg:w-[40px] w-[35px] lg:h-[40px] h-[35px] flex items-center justify-center lg:text-2xl text-lg'>
                                <CgMail />
                            </div>
                            <div>
                                <h2 className='lg:text-2xl text-xl font-semibold font-poppins text-white'>Email</h2>
                                <p className='lg:text-base text-sm text-white'>prideagency.it@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3.5' data-aos="fade-up">
                            <div className='bg-white text-brand rounded-full lg:w-[40px] w-[35px] lg:h-[40px] h-[35px] flex items-center justify-center lg:text-2xl text-lg'>
                                <IoCallOutline />
                            </div>
                            <div>
                                <h2 className='lg:text-2xl text-xl font-semibold font-poppins text-white'>Call Us</h2>
                                <p className='lg:text-base text-sm text-white'>+880 1327-312666</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* -------------------------Social Media------------------------------ */}
                <div>
                    <h2 className='text-white font-poppins font-medium text-start text-3xl uppercase' data-aos="fade-up">Social Media</h2>
                    <div className='mt-4 flex lg:items-start items-center gap-3'>
                        <a target='_blank' href={'https://www.facebook.com/rexon.notfr'} className='text-white cursor-pointer hover:bg-brand duration-300 font-poppins w-[40px] h-[40px] rounded-full border-1 border-white flex items-center justify-center text-xl' data-aos="fade-up">
                            <FaFacebookF />
                        </a>
                        <a target='_blank' href={'https://www.instagram.com/rexon.notfr/'} className='text-white cursor-pointer hover:bg-brand duration-300 font-poppins w-[40px] h-[40px] rounded-full border-1 border-white flex items-center justify-center text-xl' data-aos="fade-up">
                            <FaInstagram />
                        </a>
                        <a target='_blank' href={'https://www.linkedin.com/in/munna-scriptz'} className='text-white cursor-pointer hover:bg-brand duration-300 font-poppins w-[40px] h-[40px] rounded-full border-1 border-white flex items-center justify-center text-xl' data-aos="fade-up">
                            <FaLinkedinIn />
                        </a>
                        <a target='_blank' href={'/'} className='text-white cursor-pointer hover:bg-brand duration-300 font-poppins w-[40px] h-[40px] rounded-full border-1 border-white flex items-center justify-center text-xl' data-aos="fade-up">
                            <FaTwitter />
                        </a>
                        <a target='_blank' href={'/'} className='text-white cursor-pointer hover:bg-brand duration-300 font-poppins w-[40px] h-[40px] rounded-full border-1 border-white flex items-center justify-center text-xl' data-aos="fade-up">
                            <FaPinterestP />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='border-t border-t-[#bebebe] mt-10 pt-6'>
            <p className='text-[#b4b4b4] font-poppins text-center'>© 2025 Made By <Link className='underline underline-offset-[5px]' to={'https://portfolio-munna.vercel.app/'}>Munna-Scriptz,</Link> Inc.</p>
        </div>
    </footer>
    </>
  )
}

export default Footer