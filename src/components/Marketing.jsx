import React from 'react'
import { Link } from 'react-router'
import marketingImg from '../assets/images/marketingImage-removebg-preview.png'
const Marketing = () => {
  return (
    <>
        <section id='Marketing' className='mt-[120px]'>
            <div className="container">
                <div id="Marketing-Row" className='px-[25px] py-[65px] rounded-2xl flex items-center justify-between bg-linear-to-bl from-white to-[#0a66c233]'>
                    {/* -----------------Left Side------------------ */}
                    <div className='w-[920px]'>
                        <h2 className='font-siliguri font-semibold text-[34px] text-primary'>প্রুভেন ডিজিটাল মার্কেটিং স্ট্র্যাটেজির মাধ্যমে আপনার ব্যবসা বাড়াতে আমাদের সাথে একটি ফ্রি মিটিং করুন</h2>
                        <p className='text-brand font-semibold font-siliguri text-lg mt-4 mb-13'>আপনার ব্যবসায়ের মার্কেটিং সংক্রান্ত যে কোন সমস্যা নিয়ে আলোচনা করতে বা মার্কেটিং বিষয়ক এক্সপার্ট গাইডলাইন পেতে আমাদের ডিজিটাল মার্কেটিং টিমের সাথে একটি ৩০ মিনিটের ফ্রি মিটিং বুক করুন। আপনার ব্যবসায়কে নেক্সট লেভেলে নিতে আমাদের অভিজ্ঞ মার্কেটিং টিম প্রস্তুত</p>
                        <Link to={'/'} className='py-[18px] px-[45px] rounded-full font-siliguri bg-primary text-white cursor-pointer text-lg'>
                            যোগাযোগ করুন
                        </Link>
                    </div>
                    {/* -----------------Right Side------------------ */}
                    <div>
                        <img src={marketingImg} alt="Image" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Marketing