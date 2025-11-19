import React from 'react'
import bannerImg from '../assets/images/BannerImage.png'
import { Link } from 'react-router'
const Banner = () => {
  return (
    <>
        <section id='Banner' className='mt-[40px] overflow-hidden'>
            <div className="container">
                <div id="Banner-Row" className='flex lg:flex-row flex-col items-center justify-between'>
                    {/* ---------------Left Side---------------- */}
                    <div className='lg:w-[680px] w-full flex lg:items-center justify-center flex-col'>
                        <div>
                            <h1 className='lg:text-center text-primary lg:text-[48px] text-[32px] font-semibold font-siliguri lg:leading-[57px]' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="1200">আমরা প্রস্তুত আপনার ব্যবসায়িক সফলতা নিশ্চিত করতে</h1>
                            <p className='text-brand lg:text-xl text-base lg:text-center mt-5 mb-13 font-siliguri font-medium' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="1400">আমাদের লক্ষ্য হলো আপনার ব্যবসাকে ডিজিটাল দুনিয়ায় শীর্ষে পৌঁছে দেওয়া এবং আপনার ব্র্যান্ডকে আরও শক্তিশালী করা</p>
                        </div>
                        <Link to={'/'} className='lg:py-[18px] w-fit py-[14px] px-[45px] rounded-full font-siliguri bg-primary text-white cursor-pointer text-lg' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="1800">
                            যোগাযোগ করুন
                        </Link>
                    </div>
                    {/* ---------------Right Side---------------- */}
                    <div data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="1600">
                        <img src={bannerImg} alt="Banner Image" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner