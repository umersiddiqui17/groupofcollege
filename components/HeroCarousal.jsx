"use client"
import { Roboto } from "next/font/google";
import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({ weight:"700", subsets: ["latin"] });

const roboto = Roboto({ weight:"400", subsets: ["latin"] });
export default function HeroCarousal() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; 
  const handleincrementSlides = ()=>{
    if (currentSlide === totalSlides-1) {
      setCurrentSlide(0); // Set current slide index to 0 if it's the last slide
    } else {
      setCurrentSlide(currentSlide + 1); // Increment current slide index
    }
  }

  const handledecrementSlides =()=>{
    if (currentSlide === 0) {
      setCurrentSlide(totalSlides-1); // Set current slide index to the last slide if it's the first slide
    } else {
      setCurrentSlide(currentSlide - 1); // Decrement current slide index
    }
  }

  const data = [
    {
        img: '/A.png',
        alt: 'Slide 1',
        caption: 'Slide 1 Caption',
        link: '/about',
        heading:'Empowering Future Caregivers',
        paragraph:'Excellence in Healthcare Education.'
    
    },
    
    {
        img: '/C.png',
        alt: 'Slide 1',
        caption: 'Slide 1 Caption',
        link: '/about',
        heading:' Leading Healthcare Learning',
        paragraph:' Advanced Education for Professionals'
    },
    {
      img: '/D.png',
      alt: 'Slide 1',
      caption: 'Slide 1 Caption',
      link: '/about',
      heading:' Shaping Health Leaders',
      paragraph:'Expertise in Healthcare and Wellness'
    }

    
  ]

  const boxdata = [
    {
      Link:'/admission',
      img:"/Admission.png",
      text:"Admission"
    },
    {
      
      img:"/Academic.png",
      text:"Programs"
    }
  ]

  
  return (
    <>
    <div className='relative h-[500px] lg:h-screen w-full mt-16 lg:mt-0'>
      <div className='mb-40 roboto-regular'>
        <Carousel className={`w-full  h-[500px] lg:h-screen ` } autoPlay={true} infiniteLoop={true} showThumbs={false} selectedItem={currentSlide} showStatus={false} showArrows={false}>
            {data.map((item,index)=>(

                <div key={index} className='flex relative justify-center flex-col text-xs md:text-lg   items-center h-[500px] lg:h-screen text-white w-full'>
                    <Image src={item.img} alt='' fill quality={100} className='flex justify-center items-center object-cover'/>
                   <div className=' lg:pl-12 w-11/12 md:w-2/3 h-60 md:h-80  lg:w-1/2 bg-[#262161] pt-12 flex items-center lg:justify-start justify-center text-start absolute   xl:left-96 xl:top-64 lg:top-28 lg:left-40  font-serif font-medium bg-opacity-80'>
                    <div className=' flex flex-col text-center  lg:text-start text-4xl lg:text-5xl xl:text-6xl w-full  '>
                    <p className=' w-full '>{item.heading}</p>
                    
                    {/*paragraph  */}
                    <div className='flex justify-start items-start w-full  mt-5 '>
                        <p className={`flex lg:justify-start lg:items-start justify-center items-center w-full text-xs lg:text-xl ${roboto.className}`}>
                        {item.paragraph}
                        </p>
                    </div>
                    {/* buttons */}
                    <div className={`flex flex-col mb-12 lg:flex-row justify-start gap-y-5 lg:gap-x-5 items-center w-full lg:w-1/2 mt-6 ${roboto.className}`}>
                    <Link href="/admission">
                     <button className="bg-[#f1592a] w-52 text-white text-xs lg:text-base xl:text-xl px-6 py-3 rounded-md hover:bg-white hover:text-[#f1592a] transition-all duration-300">
                        Apply Now
                     </button>
                    </Link>
                     
                    </div>
                    </div>
                   </div>
                </div>
            ))}
                
            </Carousel>

    </div>
    <div className='absolute left-0 top-1/2 text-white transform -translate-y-1/2 z-10 cursor-pointer'onClick={handledecrementSlides}>
    <FaChevronLeft className="w-8 h-8"/>

    </div>
    <div className='absolute right-0 top-1/2 text-white transform -translate-y-1/2 z-10 cursor-pointer'onClick={handleincrementSlides}>
    <FaChevronRight className="w-8 h-8"/>
    </div>


    {/* cta bar */}

    <div className="absolute -bottom-72 lg:-bottom-32 left-1/2 transform -translate-x-1/2 bg-[#262161] z-30 text-white flex flex-col lg:flex-row justify-center items-center px-4 py-2 h-80 lg:h-64 xl:w-3/5 lg:w-3/4 md:w-4/5 w-11/12 rounded-md">
             {/* text */}
             <div className="w-full lg:w-2/5 h-24  lg:h-64  flex justify-center  items-center text-center lg:text-start ">
                <h1 className={`${montserrat.className} text-2xl lg:text-3xl xl:text-4xl w-full lg:w-2/3`}>Bringing Excellence to Health Care</h1>
             </div>
             {/*boxes */}
             <div className="w-full lg:w-3/5  h-64 flex justify-center items-center">
                  <div className="hidden  lg:grid  lg:grid-cols-2 gap-x-5">
                     {/*  box */}
                     {boxdata.map((item,index)=>(
                      item.Link?
                      <Link key={index} href={item.Link}>
                      
                     <div  className={`h-52 aspect-square bg-[#f1592a] rounded-md flex flex-col justify-center items-center`}>
                        <Image src={item.img} alt='' width={100} height={100} quality={100} />
                        <p className={`text-sm font-medium text-white mt-2 ${montserrat.className}`}>{item.text}</p>
                     </div>
                      </Link>:
                     <div key={index} className={`h-52 aspect-square bg-[#f1592a] rounded-md flex flex-col justify-center items-center`}>
                     <Image src={item.img} alt='' width={100} height={100} quality={100} />
                     <p className={`text-sm font-medium text-white mt-2 ${montserrat.className}`}>{item.text}</p>
                  </div>
                     ))}
                  </div>
                   {/* mobiile view */}
                  <div className=" lg:hidden flex justify-center items-center w-full  ">
                  <div className="lg:hidden  grid  grid-cols-2 gap-x-2 md:gap-x-5 ">
                     {/*  box */}
                     {boxdata.map((item,index)=>(
                      item.Link?
                      <Link key={index} href={item.Link}>
                      
                     <div  className={`h-36 md:h-40 aspect-square bg-[#f1592a] rounded-md flex flex-col justify-center items-center`}>
                        <Image src={item.img} alt='' width={100} height={100} quality={100} />
                        <p className={`text-sm font-medium text-white mt-2 ${montserrat.className}`}>{item.text}</p>
                     </div>
                      </Link>:
                     <div key={index} className={`h-36 md:h-40 aspect-square bg-[#f1592a] rounded-md flex flex-col justify-center items-center`}>
                     <Image src={item.img} alt='' width={100} height={100} quality={100} />
                     <p className={`text-sm font-medium text-white mt-2 ${montserrat.className}`}>{item.text}</p>
                  </div>
                     ))}
                  </div>
                  </div>
             </div>
    </div>
    
    </div>
     
    </>
   
  )
}