import React from 'react'
import icon1 from '../assets/images/OgIcon1.svg'
import icon2 from '../assets/images/OgIcon2.svg'
import icon3 from '../assets/images/OgIcon3.svg'
import icon4 from '../assets/images/OgIcon4.svg'
import icon5 from '../assets/images/OgIcon5.svg'
import icon6 from '../assets/images/OgIcon6.svg'
import icon7 from '../assets/images/OgIcon7.svg'
import icon8 from '../assets/images/OgIcon8.svg'

const Services = () => {
    const MyOrganized = [
        {
            icon: icon3,
            upperText: 'ফেসবুক এডভার্টাইসিং',
            lowerText: 'লেজার ফোকাসড টার্গেটেড ক্যাম্পেইন বৃদ্ধি করবে আপনার কাস্টমার লিস্ট'
        },
        {
            icon: icon8,
            upperText: 'গুগল ও ইউটিউব এডভার্টাইসিং',
            lowerText: 'গুগল ও ইউটিউব এডভার্টাইসিং বৃদ্ধি করবে আপনার ব্র্যান্ড উপস্থিতি ও সেল'
        },
        {
            icon: icon3,
            upperText: 'গ্রাফিক ডিজাইন',
            lowerText: 'আপনার ব্র্যান্ডের জন্য ক্রিয়েটিভ লোগো ডিজাইন থেকে শুরু করে সোশ্যাল মিডিয়া ডিজাইন বুঝে নিন'
        },
        {
            icon: icon3,
            upperText: 'ভিডিও এডিটিং ও মোশন গ্রাফিক',
            lowerText: 'ক্রিয়েটিভ ভিডিও এডিটিং ও মোশন গ্রাফিক্স আপনার কনটেন্ট কোয়ালিটিতে নতুন মাত্রা যোগ করবে'
        },
        {
            icon: icon5,
            upperText: 'ওয়েবসাইট ডিজাইন ও ডেভেলপমেন্ট',
            lowerText: 'আপনার ব্যবসার প্রয়োজন অনুযায়ী কাস্টোমাইজড , ইউজার ফ্রেন্ডলি ওয়েবসাইট তৈরি করব আমরা।'
        },
    ]
  return (
    <>
        <section id='Use' className='mt-[112px]'>
            <div className="container">
                <div id="Use-Row">
                    {/* ------------Header------------ */}
                    <div><h2 className='text-primary font-semibold font-siliguri lg:text-[50px] text-[32px] text-center' data-aos="fade-up">আমাদের সার্ভিস</h2></div>
                    {/* ------------List------------ */}
                    <div className='flex items-center justify-center md:justify-between  mt-[64px] lg:gap-y-[56px] gap-y-[39px] flex-wrap'>
                        {
                            MyOrganized.map((item , e)=>(
                            <div key={e} data-aos="fade-up" className='w-[380px] flex items-center flex-col gap-6 hover:bg-[#0a66c26b] bg-linear-120 hover:-translate-y-5 duration-300 py-[32px] rounded-[18px]'>
                                <div><img src={item.icon} alt="icon" /></div>
                                <div>
                                    <h2 className='text-primary text-[26px] font-semibold font-siliguri text-center'>{item.upperText}</h2>
                                    <p className='text-brand text-[22px] font-siliguri font-normal text-center mt-3'>{item.lowerText}</p>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Services