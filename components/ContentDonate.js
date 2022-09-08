import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
import {FaFacebookF, FaTiktok} from 'react-icons/fa';
import {FiTwitter, FiInstagram} from 'react-icons/fi';

function ContentSection() {
  const router = useRouter();
  return (
    <div className="max-w-[1050px] mx-28 my-15">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5">

     <div className="pt-16 rounded-lg pl-5 bg-[#178c9f] flex flex-col items-center group hover:shadow-xl transition duration-500 space-y-4 w-56 h-[475px]">
        <h4 className=" text-3xl text-white pb-5 font-semibold">Who are we supporting? </h4>
        <p className='text-white pr-2 text-sm'> 
        In Ethiopia, the majority of kids from low income homes have very limited access to computers. 
        Because of the lack of quality infrastructure in lower grades, leads students to receive 
        substandard STEM education that results from a lack of access to a proper curriculum 
        and adequate teachers.
        </p>
      </div>
      
      <div
          className="mt-20 px-5
           bg-white flex flex-col items-center shadow-lg group hover:shadow-2xl transition duration-500 space-y-4 w-56 h-[300px]
        "
        >
          <div className="relative h-24 w-24 ">
            <Image
              src="/childrenU.png"
              className=""
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
          <h4 className=" text-md">100, 8 to 18 aged interested kids that don’t have easy access to computer
           and financial ability to access this type of training </h4>
          
        </div>
        <div
          className="py-10 mt-20 px-5 bg-white flex flex-col items-center shadow-lg group hover:shadow-2xl transition duration-500 space-y-4 w-56 h-[300px]
        "
        >
          <div className="relative h-24 w-24 ">
            <Image
              src="/teacherU.png"s
              className=""
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
          <h4 className=" text-md">Eight ICT Teachers </h4>
          
        </div>
        <div className="py-10 mt-20 px-5 bg-white flex flex-col items-center shadow-lg group hover:shadow-2xl transition duration-500 space-y-4 w-56 h-[300px]">
          <div className="relative h-24 w-24 ">
            <Image
              src="/school.png"
              className=""
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
          <h4 className=" text-md">Four Public high schools in Four cities  </h4>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
