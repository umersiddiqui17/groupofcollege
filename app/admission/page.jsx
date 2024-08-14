"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Merriweather, Montserrat } from "next/font/google";
import ClipLoader from "react-spinners/ClipLoader";
import { MoonLoader } from "react-spinners";
import { FaClock, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const merriweather = Merriweather({ weight: "700", subsets: ["latin"] });
const montserrat = Montserrat({ weight:"700", subsets: ["latin"] });
export default function Page() {
  const [expand, setexpand] = useState(false);
  const options = [
    { value: "BS Nursing", label: "BS Nursing ( 4 Year Program )" },
    { value: " D-Pharm ", label: " D-Pharm ( 2 Year Program )" },
    { value: " DPT", label: " DPT ( 5 Year Program )" },
    { value: "B.S Nutrition", label: "B.S Nutrition ( 4 Year Program )" },
    { value: " B.S L.I.S ", label: " B.S L.I.S ( 4 Year Program )" },
  ];

  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);
  const [formData, setFormData] = useState({
    program: "",
    studentname: "",
    studentnumber: "",
    cnic: "",
    guardianname: "",
    guardiannumber: "",
    intermediatemarks: "",
    metricmarks: "",
    date:'',
    time:''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      if (
        !formData.program ||
        !formData.studentname ||
        !formData.studentnumber ||
        !formData.guardianname ||
        !formData.guardiannumber ||
        !formData.cnic ||
        !formData.intermediatemarks ||
        !formData.metricmarks
      ) {
        seterror("Please fill all the fields!");
        return null;
      }
      if (formData.studentname.length < 5) {
        seterror("Name should be longer than 5 characters!");
        return null;
      }
      if (
        formData.studentnumber.length !== 11 ||
        formData.guardiannumber.length !== 11
      ) {
        seterror("Invalid phone number");
        return null;
      }
      if (formData.guardianname.length < 5) {
        seterror("Guardian name should be longer than 5 characters!");
        return null;
      }
      if (formData.cnic.length !== 13) {
        seterror("Invalid cnic number!");
        return null;
      }
      setloading(true)
      const response = await axios.post("api/admission", formData);
      setloading(false)
      if (response.status === 200) {
        
        alert("Registration successful!");
        
      } else {
       setloading(false)
       alert("There was an error submitting your form.");
        
      }
    } catch (error) {
      alert("There was an error submitting your form.");
      console.error(error);
    }
  };

  useEffect(() => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false  });
    const formattedDate = now.toISOString().split('T')[0]; // Formats date as YYYY-MM-DD
    setFormData((prevData) => ({
      ...prevData,
      date: formattedDate,
      time: formattedTime
    }));
  
    console.log(formData.time)
    console.log(formData.date)
  }, [formData.date, formData.time]);
  
  return (
    <>
    <div className="flex justify-center items-center w-full mt-32 mb-12 ">
      <div className="flex justify-center items-center w-11/12  lg:w-4/5 xl:w-4/5  rounded-2xl shadow-lg shadow-[#262161]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center w-full"
        >
          
          <div className="flex flex-col justify-center items-center w-full mt-12 gap-y-3">
            <h1
              className={`text-2xl md:text-4xl ${merriweather.className} text-[#262161]`}
            >
              Admission Inquiry Form
            </h1>
            <p className="text-sm text-gray-500">
              Please fill the data very carefully
            </p>
          </div>
          {/* grid for data entry */}
          <div className="flex flex-col justify-center items-center   mt-12 mb-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 lg:gap-x-6 gap-y-10">
              <div className="flex flex-col justify-start items-start relative lg:w-80 w-64  md:w-72">
                <label htmlFor="program" className="text-lg">
                  Program
                </label>
                <input
                  id="program"
                  value={formData.program}
                  placeholder="BS"
                  className="flex justify-center px-2 py-3 ring-1 focus:ring-2 transition-all duration-300 rounded-md ring-[#262161] outline-none  lg:w-80 w-64  md:w-72"
                  onClick={() => setexpand(!expand)}
                />
                <motion.div onClick={()=>setexpand(!expand)} initial={{x:0,opacity:1}} animate={{rotate:expand?180:0}} className="absolute top-[44px] right-3">
                <IoIosArrowDown className=""/>

                </motion.div>
                <div
                  className={`absolute top-16  lg:w-80 w-64  md:w-72 ${
                    expand ? "h-[202px] border border-[#262161]" : "h-0"
                  } overflow-y-auto flex flex-col  justify-start items-start bg-[#F8F8F8] text-black rounded-md transition-all duration-300`}
                >
                  {options.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setFormData({ ...formData, program: item.value });
                        setexpand(false);
                      }}
                      className="p-2 hover:bg-[#262161] hover:text-white w-full transition-all duration-300"
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-start items-start lg:w-80 w-64  md:w-72">
                <label htmlFor="studentname" className="text-lg">
                  Student Name
                </label>
                <input
                  id="studentname"
                  placeholder="Arfan Ali"
                  className="flex justify-center px-2 py-3 ring-1 focus:ring-2 transition-all duration-300 rounded-md ring-[#262161] outline-none  lg:w-80 w-64  md:w-72"
                  value={formData.studentname}
                  onChange={(e) =>
                    setFormData({ ...formData, studentname: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-col justify-start items-start lg:w-80 w-64  md:w-72">
                <label htmlFor="phonenumer" className="text-lg">
                  Phone Number
                </label>
                <input
                  id="phonenumber"
                  placeholder="03326385181"
                  className="flex justify-center px-2 py-3 ring-1 focus:ring-2 transition-all duration-300 rounded-md ring-[#262161] outline-none  lg:w-80 w-64  md:w-72"
                  value={formData.studentnumber}
                  onChange={(e) =>
                    setFormData({ ...formData, studentnumber: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-col justify-start items-start lg:w-80 w-64  md:w-72">
                <label htmlFor="cnic" className="text-lg">
                  {" "}
                  Student CNIC{" "}
                </label>
                <input
                  id="cnic"
                  placeholder="44441-1234567-9"
                  className="flex justify-center px-2 py-3 ring-1 focus:ring-2 transition-all duration-300 rounded-md ring-[#262161] outline-none  lg:w-80 w-64  md:w-72"
                  value={formData.cnic}
                  onChange={(e) =>
                    setFormData({ ...formData, cnic: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-col justify-start items-start lg:w-80 w-64  md:w-72">
                <label htmlFor="guardianname" className="text-lg">
                  {" "}
                  Guardian Name{" "}
                </label>
                <input
                  id="guardianname"
                  placeholder="Ali Kmaran"
                  className="flex justify-center px-2 py-3 ring-1 focus:ring-2 transition-all duration-300 rounded-md ring-[#262161] outline-none  lg:w-80 w-64  md:w-72"
                  value={formData.guardianname}
                  onChange={(e) =>
                    setFormData({ ...formData, guardianname: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-col justify-start items-start lg:w-80 w-64  md:w-72">
                <label htmlFor="guardianno" className="text-lg">
                  {" "}
                  Guardian Number{" "}
                </label>
                <input
                  id="guardianno"
                  placeholder="03134246464"
                  className="flex justify-center px-2 py-3 ring-1 focus:ring-2 transition-all duration-300 rounded-md ring-[#262161] outline-none  lg:w-80 w-64  md:w-72"
                  value={formData.guardiannumber}
                  onChange={(e) =>
                    setFormData({ ...formData, guardiannumber: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-col justify-start items-start lg:w-80 w-64  md:w-72">
                <label htmlFor="intermediatemarks" className="text-lg">
                  {" "}
                  Intermediate Marks{" "}
                </label>
                <input
                  id="intermediatemarks"
                  placeholder="421"
                  className="flex justify-center px-2 py-3 ring-1 focus:ring-2 transition-all duration-300 rounded-md ring-[#262161] outline-none  lg:w-80 w-64  md:w-72"
                  value={formData.intermediatemarks}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      intermediatemarks: e.target.value,
                    })
                  }
                />
              </div>

              <div className="flex flex-col justify-start items-start lg:w-80 w-64  md:w-72">
                <label htmlFor="metricmarks" className="text-lg">
                  {" "}
                  Matric Marks{" "}
                </label>
                <input
                  id="metricmarks"
                  placeholder="431"
                  className="flex justify-center px-2 py-3 ring-1 focus:ring-2 transition-all duration-300 rounded-md ring-[#262161] outline-none  lg:w-80 w-64  md:w-72"
                  value={formData.metricmarks}
                  onChange={(e) =>
                    setFormData({ ...formData, metricmarks: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="flex justify-center items-center w-full mt-12">
              <button
                type="submit"
                className="flex justify-center items-center px-9 text-white py-3 bg-[#262161] rounded-md hover:bg-[#f1592a] transition-all duration-300 w-36"
              >
                {loading ? <MoonLoader color="#f1592a" size={25} /> : 'Submit'}
              </button>
            </div>
            <div className="flex justify-center items-center w-full pt-8">
              <p className="text-red-600 animate-pulse">{error}</p>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div className="flex justify-center items-center w-full mb-12">
      <div className=" w-11/12   lg:w-4/5 xl:w-4/5  rounded-2xl shadow-lg shadow-[#262161] flex flex-col lg:flex-row justify-between items-start pt-24 pb-24 px-16 lg:gap-x-10 gap-y-6 text-center">
                     <div className="flex flex-col justify-center items-center w-full">
                       <div className="flex flex-col justify-center items-center">
                       <FaPhone className="w-8 h-8 mb-5 text-[#262161]" />

                             <h1 className={` text-[#262161] text-lg font-semibold mb-4`}>Admission Office  </h1>
                             <p className={` `}>0313-2324388</p>
                             <p className={` `}>021-37120936</p>
                       </div>
                     </div>
                    
                     <div className="flex flex-col justify-center items-center w-full">
                       <div className="flex flex-col justify-center items-center">
                       <MdEmail className="w-8 h-8 mb-5 text-[#262161]"/>
                             <h1 className={`text-[#262161] text-lg font-semibold mb-4`}>Email Address </h1>
                             <p className={` `}>admission@ikhlasedu.com </p>
                      
                       </div>
                     </div>
                     <div className="flex flex-col justify-center items-center w-full">
                       <div className="flex flex-col justify-center items-center">
                       <FaClock className="w-8 h-8 mb-5  text-[#262161] " />
                             <h1 className={`text-[#262161] text-lg font-semibold mb-4`}>Working Hours</h1>
                             <p className={` `}>Mon-Fri 8:00AM - 4:00PM </p>
                             <p className={` `}>Sat-Sun Closed </p>
                      
                       </div>
                     </div>

      </div>
    </div>


    <div className="flex justify-center items-center w-full">
      <div className="w-full  h-[500px] ">

    <iframe className="h-[500px] w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d904.6550696146206!2d67.09296503387368!3d24.910930829408095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ffcf7bd1d6d%3A0xb8c6c2dfedd5ddd9!2sKarachi%20Institute%20of%20Physiotherapy%20%26%20Rehabilitation%20Sciences%20KIPRS!5e0!3m2!1sen!2s!4v1722886153948!5m2!1sen!2s" ></iframe>
      </div>
    </div>
    </>
  );
}
