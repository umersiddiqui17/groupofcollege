import { Merriweather } from 'next/font/google';
import Image from 'next/image'
import React from 'react'

const merriweather = Merriweather({ weight:"700", subsets: ["latin"] });

export default function CEO() {
  return (
    <div className='flex justify-center items-center w-full mb-44 mt-16'>
    <div className='w-11/12 md:w-4/5 lg:w-2/3 flex flex-col justify-center items-center '>
      <div className='flex justify-center items-center w-full'>
          <h1 className={`${merriweather.className} text-3xl mb-11 text-[#262161]`}>CEO&apos;s Message </h1>
      </div>
      <div className='flex flex-col justify-center items-center w-full  rounded-full'>
             <Image src="/CEO.png" alt='' width={200} height={200} className='rounded-full '/>
             <h1 className={`${merriweather.className} mt-5`}>Dr Ghulam Mustafa</h1>
      </div>
      <div className='flex justify-center items-center w-4/5  lg:w-2/3 mt-8 text-center text-base'>
      We are dedicated to nurturing future healthcare professionals who embody compassion, excellence and a commitment to lifelong learning. Our mission is to cultivate a deep sense of service, an enduring passion for knowledge and an unwavering duty to patients, colleagues and the community. At Ikhlas, we are not just building careers , we are shaping the future of healthcare.
      </div>
    </div>
  </div>
  )
}
