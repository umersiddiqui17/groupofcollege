import { Merriweather, Montserrat } from 'next/font/google';
import Image from 'next/image'
import React from 'react'
const montserrat = Montserrat({ weight:"400", subsets: ["latin"] });
const merriweather = Merriweather({ weight:"700", subsets: ["latin"] });

const programs= [
    {
        id: 'dpt',
        name: 'DPT',
        overview: 'Physical Therapy (PT) is a dynamic healthcare profession. Practitioners plan, organize, and direct care programs for patients of all ages with disabilities from illness, accidents, or congenital conditions. They work in hospitals, nursing homes, special schools, private practices, rehab centers, community health centers, research facilities, sports medicine clinics, and educational institutions.PT focuses on those with neuromuscular, musculoskeletal, cardiopulmonary, and integumentary impairments, evaluating and applying therapeutic procedures to maintain, improve, or restore function and prevent dysfunction.Physical therapists assess and treat body disorders using physical methods. They plan, implement, and evaluate PT programs, instruct patients and families, and supervise other health workers, collaborating with physicians to set realistic treatment goals.There is a high demand for physical therapists due to a practitioner shortage, offering many growth and diversification opportunities. Graduates earn a Doctor of Physical Therapy degree.',
        eligibilityCriteria: {
          science: 'A minimum overall score of 60% in the Science group of the secondary school certificate/British O-Level certificate or equivalent in Pakistan.',
          premedical: ' A minimum overall score of 60% in the Pre-Medical group of the Higher Secondary School/British A-Level certification or equivalent in Pakistan.',
        },
        TotalCreditHours:175,
        TotalLectures:124,
        TotalResearchHours:6,
        TotalPracticalHours: 45,

        notedescription:'This curriculum is also applicable to the annual system, where two consecutive semesters constitute one professional year.',
        theory:'1 credit hour equals 1 hour of teaching per week throughout the semester.',
        PracticalLab:'1 credit hour equals 2 hours of lab work per week throughout the semester',
        Clinical:'1 credit hour equals 3 hours of clinical work per week throughout the semester.',
        Research:'1 credit hour equals 3 hours of research work per week throughout the semester.',
        semesters: [
          {
            semester: 'First Semester',
            courses: [
              { courseName: 'Anatomy I', creditHours: 4 },
              { courseName: 'Physiology I', creditHours: 3 },
              { courseName: 'Kinesiology I', creditHours: 3},
              { courseName: 'English I', creditHours: 3},
              { courseName: 'Pakistan Studies', creditHours: 2},
              { courseName: 'Introduction to Computer', creditHours: 3}
            ],
            totalcredithours:18
          },

          {
            semester: 'Second Semester',
            courses: [
              { courseName: 'Anatomy II', creditHours: 4 },
              { courseName: 'Physiology II', creditHours: 3 },
              { courseName: 'Kinesiology II', creditHours: 3},
              { courseName: 'English II (Communication Skills)', creditHours: 3},
              { courseName: 'Islamic Studies / Ethics ', creditHours: 2},
              { courseName: 'Sociology 2', creditHours: 2}
            ],
            totalcredithours:17
          },
          {
            semester: 'Third Semester',
            courses: [
              { courseName: 'English III (Technical Writing & Presentation Skills)', creditHours: 3 },
              { courseName: 'Medical Physics', creditHours: 3 },
              { courseName: 'Anatomy III', creditHours: 3},
              { courseName: 'Physiology III', creditHours: 3},
              { courseName: 'Biomechanics & Ergonomics  ', creditHours: 3},
              { courseName: 'Biochemistry', creditHours: 2}
            ],
            totalcredithours:17
          },
          {
            semester: 'Fourth Semester',
            courses: [
              { courseName: 'Anatomy IV (Neuro Anatomy) ', creditHours: 3 },
              { courseName: 'Biomechanics & Ergonomics II', creditHours: 3 },
              { courseName: 'Health & Wellness', creditHours: 2},
              { courseName: 'Biochemistry II', creditHours: 3 },
              { courseName: 'Exercise Physiology', creditHours: 3},
              { courseName: 'Molecular Biology & Genetics', creditHours: 2}
            ],
            totalcredithours:16
          },
          {
            semester: 'Fifth Semester',
            courses: [
              { courseName: 'Pathology & Microbiology-I', creditHours: 2 },
              { courseName: 'Pharmacology & Therapeutics-I', creditHours: 2 },
              { courseName: 'Physical Agents & Electrotherapy-I', creditHours: 3},
              { courseName: 'Therapeutic Exercises & Techniques', creditHours: 3 },
              { courseName: 'Biostatistics-I ', creditHours: 3},
              { courseName: 'Behavioral Sciences (Psychology & Ethics)', creditHours: 2},
              { courseName: 'Supervised Clinical Practice-I', creditHours: 3}
            ],
            totalcredithours:18
          },
          {
            semester: 'Sixth Semester',
            courses: [
              { courseName: 'Pathology & Microbiology-II', creditHours: 3 },
              { courseName: 'Pharmacology & Therapeutics-II', creditHours: 2 },
              { courseName: 'Physical Agents & Electrotherapy-II', creditHours: 3},
              { courseName: 'Biostatistics-II (University Optional)', creditHours: 3 },
              { courseName: 'Community Medicine & Rehabilitation', creditHours: 3},
              { courseName: 'Supervised Clinical Practice-II', creditHours: 3}
            ],
            totalcredithours:17
          },
          {
            semester: 'Seventh Semester',
            courses: [
              { courseName: 'Medicine-I', creditHours: 3 },
              { courseName: 'Surgery-I', creditHours: 3 },
              { courseName: 'Radiology & Diagnostic Imaging', creditHours: 3},
              { courseName: 'Musculoskeletal Physical Therapy', creditHours: 3 },
              { courseName: 'Evidence-Based Practice', creditHours: 3},
              { courseName: 'Supervised Clinical Practice-III', creditHours: 3}
            ],
            totalcredithours:18
          },
          {
            semester: 'Eight Semester',
            courses: [
              { courseName: 'Medicine-II ', creditHours: 3 },
              { courseName: 'Surgery-II', creditHours: 3 },
              { courseName: 'Neurological Physical Therapy', creditHours: 3},
              { courseName: 'Scientific Inquiry & Research Methodology', creditHours: 3 },
              { courseName: 'Emergency Procedures & Primary Care', creditHours: 3},
              { courseName: 'Physical Therapy', creditHours: "-"},
              { courseName: 'Supervised Clinical Practice-IV', creditHours: 3}
            ],
            totalcredithours:21
          },
          {
            semester: 'Nine Semester',
            courses: [
              { courseName: 'Cardiopulmonary Physical Therapy', creditHours: 3 },
              { courseName: 'Prosthetics & Orthotics', creditHours: 2 },
              { courseName: 'Clinical Decision Making & Differential Diagnosis', creditHours: 3},
              { courseName: 'Manual Therapy', creditHours: 3 },
              { courseName: 'Professional Practice (Laws, Ethics & Administration)', creditHours: 2},
              { courseName: 'Integumentary Physical Therapy ', creditHours: 2},
              { courseName: 'Supervised Clinical Practice-V', creditHours: 3}
            ],
            totalcredithours:18
          },
          {
            semester: 'Tenth Semester',
            courses: [
              { courseName: 'Obstetrics & Gynaecological Physical Therapy', creditHours: 2 },
              { courseName: 'Paediatric Physical Therapy', creditHours: 2 },
              { courseName: 'Gerontology & Geriatric Physical Therapy ', creditHours: 3},
              { courseName: 'Sports Physical Therapy 2', creditHours: 3 },
              { courseName: 'Supervised Clinical Practice-VI', creditHours: 2},
              { courseName: 'Research Project (6 Credit Hours)', creditHours: 2},
            ],
            totalcredithours:18
          },
          
          // Continue for semesters 2-8
        ],
      },
]
export default function page({params}) {
    console.log(params)
    const selectedProgram = programs.find(p => p.id === params.name);
    console.log(selectedProgram)
  return (
    <div className='flex flex-col justify-center items-center w-full mt-20 md:mt-0 lg:mt-0'>
        {/* image */}
        <div className='w-full h-96 lg:h-[700px]  relative  flex justify-center items-center'>
            <Image src="/kipr.png" alt='' fill className='object-center object-fill' />
           
           {/* after image absolute values over the image */}
           <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96 bg-[#262161] z-30 text-white w-11/12 flex justify-center items-center  rounded-xl'>
                <div className='flex justify-center items-center w-1/2'>
                     <h1>Heading</h1>
                </div>
                <div className='flex justify-center items-center w-1/2'>
                   <p>The Karachi Institute of Physiotherapy and Rehabilitation Sciences, established in 2019 under IKHLAS Education (Pvt) Ltd, offers state-of-the-art infrastructure tailored to the needs of Doctor of Physiotherapy students. 
                   </p>
                </div>
           </div>
        </div>
        
         <div className='flex flex-col justify-center items-center w-11/12 lg:w-4/5 xl:w-3/4 '>
               {/*affiliation */}
               <div className='flex flex-col justify-center items-center w-full mt-2 mb-2'>
                <h1 className={`${merriweather.className} text-3xl lg:text-4xl text-[#262161]`}>Affiliation</h1>
                <div className='border-t-2 border-[#f15929] w-12'></div>
               <div className='flex flex-col lg:flex-row justify-between items-center w-full py-12 gap-y-6 lg:px-12 '>
                  <Image src='/2.png' alt='' width={300} height={300}/>
                  <Image src='/av Icoon.png' alt='' width={300} height={300}/>
               </div>
               </div>

               {/* course overview */}
               <div className='flex justify-center items-center flex-col w-full mt-20 border-2 border-[#262161] rounded-xl shadow-lg shadow-[#262161] px-5 lg:px-10 py-10 mb-20'>
                  <h1 className={`text-3xl lg:text-4xl text-[#262161] ${merriweather.className}`}>Course Overview</h1>
                  <div className='border-t-2 border-[#f15929] w-12 mb-6'></div>
                  <p className='flex justify-center items-center text-center leading-5 lg:leading-7 text-xs lg:text-base'>{selectedProgram.overview}</p>
               </div>
               
               {/* course Elefibility Criteria */}
               <div className='flex justify-center items-center flex-col w-full mt-20 border-2 border-[#262161] rounded-xl shadow-lg shadow-[#262161] px-5 lg:px-10 py-10 mb-20'>
                  <h1 className={`text-3xl lg:text-4xl text-[#262161] ${merriweather.className}`}>Elegebility Criteria</h1>
                  <div className='border-t-2 border-[#f15929] w-12 mb-6'></div>
                  <h1 className={`text-2xl lg:text-3xl text-[#262161] ${merriweather.className} mb-4 mt-8`}>Science group</h1>
                  
                  <p className='flex justify-center items-center text-center leading-5 lg:leading-7 text-xs lg:text-base'>
                 {selectedProgram.eligibilityCriteria.science}
                 </p>

                 <h1 className={`text-2xl lg:text-3xl text-[#262161] ${merriweather.className} mb-4 mt-12`}>Premedical group</h1>
                  
                  <p className='flex justify-center items-center text-center leading-5 lg:leading-7 text-xs lg:text-base'>
                 {selectedProgram.eligibilityCriteria.premedical}
                 </p>
               </div>
               {/* Academic Curriculum Outline */}
               <div className='flex justify-center items-center flex-col w-full mt-20 border-2 border-[#262161] rounded-xl shadow-lg shadow-[#262161] px-5 lg:px-10 py-10 mb-20'>
               <h1 className={`text-3xl lg:text-4xl text-[#262161] ${merriweather.className}`}>Academic Curriculum Outline               </h1>
               <div className='border-t-2 border-[#f15929] w-12 mb-6'></div>
               <h1 className={`text-2xl lg:text-3xl text-[#262161] ${merriweather.className}  mt-8`}>Program Details</h1>
               <div className='border-t-2 border-[#f15929] w-12 mb-4'></div>
               {/* table */}
               {selectedProgram.semesters.map((sem,index)=>(
               <div key={index} className='flex flex-col justify-center items-center w-full mt-12'>
                <h1 className={`text-xl lg:text-2xl text-[#262161] ${merriweather.className} `}>{sem.semester}</h1>
                <div className='border-t-2 border-[#f15929] w-12 mb-6'></div>
               <div className='flex justify-center items-start flex-col w-full  border-2 border-[#262161] rounded-xl shadow-lg shadow-[#262161] '>
                {/* table */}
                <div className='flex justify-center  items-start w-full text-xs md:text-base'>
                     <div className='w-3/4    flex flex-col justify-center items-center border-r-2 border-[#262161] '>
                           <div className='h-12 rounded-tl-lg  bg-[#262161]  text-white w-full flex justify-center items-center'>
                           <h1>Course Name</h1>
                           </div>
                           <ul className='flex flex-col justify-center items-center w-full  '>
                             {sem.courses.map((course,index)=>(
                             <li key={index} className=' py-2 border-b-2 border-[#262161] w-full flex justify-center items-center text-center'>
                             <p className='line-clamp-1'>{course.courseName}</p>
                             </li>
                             ))}
                           </ul>

                     </div>

                     <div className='w-1/4   rounded-tr-xl flex flex-col justify-center items-center'>
                           <div className='h-12 rounded-tr-lg bg-[#262161] text-white w-full flex justify-center items-center'>
                           <h1>Credit Hours</h1>
                           </div>
                           <ul className='flex flex-col justify-center items-center w-full  '>
                            {sem.courses.map((course,index)=>(
                             <li key={index} className=' py-2 border-b-2 border-[#262161] w-full flex justify-center items-center line-clamp-1'>
                                {course.creditHours}
                             </li>
                            ))}
                           </ul>
                     </div>
                </div>
                {/* total credit count */}
                <div className='flex justify-center items-center w-full rounded-b-lg bg-[#262161] text-white'>
                           <h1 className='py-2  w-full flex justify-center items-center line-clamp-1 '>Total Credit Hours: {sem.totalcredithours}</h1>
                </div>
               </div>
               </div>

               ))}
               {/* Program Summary */}
               <div className='flex justify-center items-center flex-col w-full mt-20 border-2 border-[#262161] rounded-xl shadow-lg shadow-[#262161] px-5 lg:px-10 py-10 mb-20'>
                  <h1 className={`text-2xl lg:text-4xl text-[#262161] ${merriweather.className}`}>Program Summary</h1>
                  <div className='border-t-2 border-[#f15929] w-12 mb-6'></div>
                  <ul className='flex-col justify-center flex items-center w-full text-base lg:text-xl'>
                     <li>Total Credit Hours: {selectedProgram.TotalCreditHours}</li>
                     <li>Total Lectures: {selectedProgram.TotalLectures}</li>
                     <li>Total Research Hours: {selectedProgram.TotalResearchHours}</li>
                     <li>Total Practical Hours: {selectedProgram.TotalPracticalHours}</li>
                  </ul>
               </div>

               {/* niote */}
               <div className='flex justify-center items-center flex-col w-full mt-20 border-2 border-[#262161] rounded-xl shadow-lg shadow-[#262161] px-5 lg:px-10 py-10 mb-20 text-center'>
                  <h1 className={`text-2xl lg:text-4xl text-[#262161] ${merriweather.className}`}>Note</h1>
                  <div className='border-t-2 border-[#f15929] w-12 mb-6'></div>
                  <p className='flex justify-center items-center text-center'>
                  This curriculum is also applicable to the annual system, where two consecutive semesters constitute one professional year.
                  </p>
                  <h1 className={`text-xl lg:text-2xl text-[#262161] ${merriweather.className} mt-4`}>Credit Hours Distribution </h1>
                  <div className='border-t-2 border-[#f15929] w-12 mb-6'></div>
                  <p className={'hidden lg:flex justify-center items-center text-center mb-2'}><span className='font-semibold'>Theory: </span>{selectedProgram.theory}</p>
                  <p className={'hidden lg:flex justify-center items-center text-center mb-2'}><span className='font-semibold'>Practical/Lab: </span>{selectedProgram.PracticalLab}</p>
                  <p className={'hidden lg:flex justify-center items-center text-center mb-2'}><span className='font-semibold'>Clinical: </span>{selectedProgram.Clinical}</p>
                  <p className={'hidden lg:flex justify-center items-center text-center mb-2'}><span className='font-semibold'>Research: </span>{selectedProgram.Research}</p>
                     

                  <p className={'flex lg:hidden justify-center items-center text-center mb-2'}>Theory: {selectedProgram.theory}</p>
                  <p className={'flex lg:hidden justify-center items-center text-center mb-2'}>Practical/Lab:{selectedProgram.PracticalLab}</p>
                  <p className={'flex lg:hidden justify-center items-center text-center mb-2'}>Clinical: {selectedProgram.Clinical}</p>
                  <p className={'flex lg:hidden justify-center items-center text-center mb-2'}>Research:{selectedProgram.Research}</p>
               </div>

               </div>
         </div>
    </div>
  )
}
