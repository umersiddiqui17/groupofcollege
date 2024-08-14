"use client"
import axios from 'axios';
import { Merriweather, Montserrat } from 'next/font/google';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const montserrat = Montserrat({ weight:"400", subsets: ["latin"] });
const merriweather = Merriweather({ weight:"700", subsets: ["latin"] });
export default function page() {
  const [selected,setselected] = useState(1)
  const [content, setcontent] = useState([])
  const [heading,setheading] = useState('')
  const getData=async()=>{
    const res = await axios.get(`https://dev.ikhlasedu.com/wp-json/wp/v2/academic?_embed`)
    console.log(res.data[0].acf)
    

    setheading(res.data[0].title.rendered)
    setcontent(res.data[0].acf)
    
  }
  useEffect(()=>{
    getData()
  },[!content])

  
  return (
    <div className='flex justify-center items-center w-full mt-32 md:mt-12 mb-16'>
      <div className='flex justify-center items-center w-11/12 lg:w-4/5 xl:w-3/4'>
        
        <div className='flex flex-col justify-center items-center w-full'>
          {/* firstbox */}
          <div className='flex justify-center items-center lg:justify-start lg:px-12 rounded-lg h-60 lg:h-80 bg-[#262161] text-white w-full'>
            <div className='flex justify-center lg:justify-start lg:items-start items-center flex-col'>
            <h1 className='text-sm lg:text-base '>Program</h1>
            <h1 className='text-3xl lg:text-4xl xl:text-5xl'>{heading}</h1>

            </div>
            
          </div>
          {/* professor message */}
          
          {/* <div className='flex justify-center items-center w-full bg-[#262161] mt-20 mb-20 text-white rounded-lg'>
            <div className='flex flex-col justify-center items-center w-full'>
            <div className='flex flex-col justify-center items-center w-full mt-12'>
                <h1 className={`text-2xl lg:text-4xl ${merriweather.className} `}>Chairperson Message</h1>
                <div className='border-t-2 border-[#f1592a] w-12'></div>
           </div>
               
                <div className='flex flex-col justify-center items-center w-full  rounded-full'>
             <Image src="/CEO.png" alt='' width={200} height={200} className='rounded-full '/>
             <h1 className={`${merriweather.className} mt-5`}>Dr Ghulam Mustafa</h1>
      </div>
                
                <div className={`lg:w-11/12 text-xs lg:text-base flex justify-center items-center text-center ${montserrat.className} mt-8 mb-12`}>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure minus optio aliquam earum? Eum, quos, amet dicta aut quidem fuga adipisci inventore incidunt nulla laudantium distinctio nisi quasi voluptatum modi, impedit facilis quas. Laudantium, iste vel. Fugiat quaerat eius amet tenetur quo eveniet alias aperiam recusandae, at, maiores impedit, tempora sunt! Praesentium, a! Exercitationem quia obcaecati doloremque dolor eveniet corporis aspernatur deserunt? Libero aliquam veniam facere natus consequuntur quod et impedit consectetur officia laboriosam maxime mollitia velit porro consequatur fugit voluptate assumenda suscipit, sequi earum dicta nulla? Officia impedit et molestiae veniam dolorum quas dolore sapiente, eum soluta quia distinctio, exercitationem quisquam dicta voluptas odit. Quis neque fuga provident illo ducimus atque officia natus. Dolorum cumque aliquam possimus minus dicta ducimus maxime ea voluptatibus, facilis doloremque magnam similique fugiat laudantium nesciunt aspernatur laborum, odio aperiam. Aliquam sequi itaque perspiciatis velit reiciendis qui vitae illum delectus architecto quisquam laudantium quaerat, quo minima, dolore nulla odit suscipit adipisci esse omnis voluptas ex! Eligendi praesentium earum, mollitia eum illum dolores rem adipisci, exercitationem iusto labore necessitatibus iure itaque id minus. Doloribus nihil sapiente veniam assumenda. Voluptas placeat exercitationem ea illo, tempore asperiores, repellendus dignissimos nam voluptatem harum fugit aspernatur vero obcaecati! Ducimus omnis eligendi esse tenetur dolorum alias id voluptatum, nemo iusto totam debitis suscipit! Libero culpa harum veritatis facere officia vitae, incidunt eveniet, dignissimos dolorem distinctio aspernatur sit ratione. Iusto recusandae ipsum nobis illum totam, exercitationem aperiam, illo voluptatibus similique nihil eligendi. Similique nam, temporibus quas dolorem cumque consectetur maxime facilis consequuntur cupiditate laborum? Quo doloribus, dolore animi soluta perspiciatis minus sapiente porro ducimus, dignissimos molestiae numquam totam nihil? Quibusdam, asperiores iure. Quaerat a porro consequatur possimus nulla quia in? Est nostrum eius repellendus inventore, dicta nam incidunt quod voluptas! Nam non, expedita rem adipisci voluptatem repellendus assumenda ab suscipit dolorum cupiditate?
                </div>
            </div>

          </div> */}

          {/* course overview */}
          <div className='bg-[#262161] rounded-lg text-white mt-20 w-full'>
             {/* buttons */}
             <div className='flex justify-center gap-x-3 items-center flex-wrap gap-y-4 w-full mt-20 '>
             
               <button className='p-2 rounded-lg border border-[#f1592a]' onClick={()=>setselected(1)}>
                Overview
               </button>
               <button className='p-2 rounded-lg border border-[#f1592a]' onClick={()=>setselected(2)}>
               Eligibility Criteria
               </button>
               <button className='p-2 rounded-lg border border-[#f1592a]' onClick={()=>setselected(3)}>
               Academic Curriculum Outline
               </button>
               <button className='p-2 rounded-lg border border-[#f1592a]' onClick={()=>setselected(4)}>
               Program Summary
               </button>
              
              
             </div>
          <div className='flex justify-center lg:justify-start lg:items-start items-center flex-col w-full mt-20 '>
            {selected === 1 ?(
                  <>
                  <h1 className={`text-3xl lg:text-4xl xl:text-5xl lg:px-12 text-white  `}>Course overview</h1>
            <div className='flex justify-center lg:justify-start lg:items-start items-center flex-col w-full mt-20 mb-20'>
              <p className='px-5 lg:px-12 text-xs lg:text-base text-center'>{content.overview}</p>
            </div>
                  </>
            ):(<></>)}

            {selected === 2?(
                <>
                <h1 className={`text-3xl lg:text-4xl xl:text-5xl lg:px-12 text-white  `}>Eligibility Criteria</h1>
                <div className='flex justify-center lg:justify-start lg:items-start items-center flex-col w-full mt-20 mb-20'>
                 <div className='flex justify-center lg:justify-start lg:items-start items-center flex-col w-full  lg:px-12'>
                   <h1 className=' text-3xl'>Science Group:</h1>
                   <p className='text-xs lg:text-base text-center '>{content.eligibility_criteria}</p>
                   
                 </div>
    
                 <div className='flex justify-center lg:justify-start lg:items-start items-center flex-col w-full  lg:px-12 mt-12 mb-20'>
                   <h1 className=' text-3xl'>Premedical Group:</h1>
                   <p className='text-xs lg:text-base text-center'>{content.eligibility_criteria_premedical}</p>
                   
                 </div>
                </div>
                </>
            ):(<></>)}

            {selected === 3?(
              <>
              <div className='w-full'>
                <h1 className={`text-xl lg:text-4xl xl:text-5xl lg:px-12 text-white justify-center items-center lg:justify-start lg:items-start w-full  text-center lg:text-start `}>Academic Curriculum Outline</h1>
                <div className='flex justify-center lg:justify-start lg:items-start items-center flex-col w-full mt-20 mb-20'>
                 {content.first_semester_1==='null'?(
                         <></>
                 ):(
                 <>
                 <div className='flex justify-center items-center flex-col w-full  lg:px-12 '>
                   <h1 className=' text-3xl'>First Semester</h1>
                  <ul className='flex flex-col justify-center items-center'>
                    {content.first_semester_1.split('\r\n').map((item,index)=>(
                     <li key={index} className='flex flex-col justify-center items-center text-xs md:text-base'>
                        {item}
                     </li>
                    ))}
                    
                  </ul>
                   
                 </div>
                 </>)}
                  
                 {content.second_semester==='null'?(
                         <></>
                 ):(
                 <>
                 <div className='flex justify-center items-center flex-col w-full  lg:px-12 mt-12 '>
                   <h1 className=' text-3xl'>Second Semester</h1>
                  <ul className='flex flex-col justify-center items-center'>
                    {content.second_semester.split('\r\n').map((item,index)=>(
                     <li key={index} className='flex flex-col justify-center items-center text-xs md:text-base'>
                        {item}
                     </li>
                    ))}
                    
                  </ul>
                   
                 </div>
                 </>)}
    
                 {content.third_semester==='null'?(
                         <></>
                 ):(
                 <>
                 <div className='flex justify-center items-center flex-col w-full  lg:px-12 mt-12 '>
                   <h1 className=' text-3xl'>Third Semester</h1>
                  <ul className='flex flex-col justify-center items-center'>
                    {content.second_semester.split('\r\n').map((item,index)=>(
                     <li key={index} className='flex flex-col justify-center items-center text-xs md:text-base'>
                        {item}
                     </li>
                    ))}
                    
                  </ul>
                   
                 </div>
                 </>)}

                 {content.fourth_semester==='null'?(
                         <></>
                 ):(
                 <>
                 <div className='flex justify-center items-center flex-col w-full  lg:px-12 mt-12 '>
                   <h1 className=' text-3xl'>Fourth Semester</h1>
                  <ul className='flex flex-col justify-center items-center'>
                    {content.fourth_semester.split('\r\n').map((item,index)=>(
                     <li key={index} className='flex flex-col justify-center items-center text-xs md:text-base'>
                        {item}
                     </li>
                    ))}
                    
                  </ul>
                   
                 </div>
                 </>)}

                 {content.fifth_semester==='null'?(
                         <></>
                 ):(
                 <>
                 <div className='flex justify-center items-center flex-col w-full  lg:px-12 mt-12 '>
                   <h1 className=' text-3xl'>Fifth Semester</h1>
                  <ul className='flex flex-col justify-center items-center'>
                    {content.fifth_semester.split('\r\n').map((item,index)=>(
                     <li key={index} className='flex flex-col justify-center items-center text-xs md:text-base'>
                        {item}
                     </li>
                    ))}
                    
                  </ul>
                   
                 </div>
                 </>)}

                 {content.sixth_semester==='null'?(
                         <></>
                 ):(
                 <>
                 <div className='flex justify-center items-center flex-col w-full  lg:px-12 mt-12 '>
                   <h1 className=' text-3xl'>Sixth Semester</h1>
                  <ul className='flex flex-col justify-center items-center'>
                    {content.sixth_semester.split('\r\n').map((item,index)=>(
                     <li key={index} className='flex flex-col justify-center items-center text-xs md:text-base'>
                        {item}
                     </li>
                    ))}
                    
                  </ul>
                   
                 </div>
                 </>)}

                 {content.seventh_semester==='null'?(
                         <></>
                 ):(
                 <>
                 <div className='flex justify-center items-center flex-col w-full  lg:px-12 mt-12 '>
                   <h1 className=' text-3xl'>Seventh Semester</h1>
                  <ul className='flex flex-col justify-center items-center'>
                    {content.seventh_semester.split('\r\n').map((item,index)=>(
                     <li key={index} className='flex flex-col justify-center items-center text-xs md:text-base'>
                        {item}
                     </li>
                    ))}
                    
                  </ul>
                   
                 </div>
                 </>)}

                 {content.eight_semester==='null'?(
                         <></>
                 ):(
                 <>
                 <div className='flex justify-center items-center flex-col w-full  lg:px-12 mt-12 '>
                   <h1 className=' text-3xl'>Eight Semester</h1>
                  <ul className='flex flex-col justify-center items-center'>
                    {content.eight_semester.split('\r\n').map((item,index)=>(
                     <li key={index} className='flex flex-col justify-center items-center text-xs md:text-base'>
                        {item}
                     </li>
                    ))}
                    
                  </ul>
                   
                 </div>
                 </>)}

                 {content.ninth_semester==='null'?(
                         <></>
                 ):(
                 <>
                 <div className='flex justify-center items-center flex-col w-full  lg:px-12 mt-12 '>
                   <h1 className=' text-3xl'>Ninth Semester</h1>
                  <ul className='flex flex-col justify-center items-center'>
                    {content.ninth_semester.split('\r\n').map((item,index)=>(
                     <li key={index} className='flex flex-col justify-center items-center text-xs md:text-base'>
                        {item}
                     </li>
                    ))}
                    
                  </ul>
                   
                 </div>
                 </>)}

                 {content.tenth_semester==='null'?(
                         <></>
                 ):(
                 <>
                 <div className='flex justify-center items-center flex-col w-full  lg:px-12 mt-12 '>
                   <h1 className=' text-3xl'>Tenth Semester</h1>
                  <ul className='flex flex-col justify-center items-center'>
                    {content.tenth_semester.split('\r\n').map((item,index)=>(
                     <li key={index} className='flex flex-col justify-center items-center text-xs md:text-base'>
                        {item}
                     </li>
                    ))}
                    
                  </ul>
                   
                 </div>
                 </>)}


                </div>
              </div>
              </>
            ):(<></>)}
            
            
               
          </div>


          </div>
              

         

          {/* instructor imformation */}
          
        </div>
      </div>

    </div>
  )
}
