import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';
import { FiTwitter, FiInstagram } from 'react-icons/fi';

function ContentSection() {
  const router = useRouter();
  return (
    <div className="max-w-[1050px] md:max-w-[1250px] flex justify-center my-15">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 md:pr-16 lg:grid-cols-4 mt-5">
        <div className="pt-16 rounded-lg pl-5 bg-[#178c9f] flex flex-col items-center group hover:shadow-xl transition duration-500 space-y-4 w-72 md:w-56 h-[475px]">
          <h4 className=" text-3xl text-white pb-5 font-semibold">
            Who are we supporting?{' '}
          </h4>
          <p className="text-white pr-2 text-md md:text-sm">
            In Ethiopia, the majority of kids from low income homes have very
            limited access to computers. Because of the lack of quality
            infrastructure in lower grades, leads students to receive
            substandard STEM education that results from a lack of access to a
            proper curriculum and adequate teachers.
          </p>
        </div>

        <div
          className="mt-20 px-5
           bg-white flex flex-col items-center shadow-lg group hover:shadow-2xl transition duration-500 space-y-4 w-72 md:w-56 h-[300px]
        "
        >
          <div className="relative h-24 w-24 ">
            <Image
              src="/100.png"
              className=""
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
          <h2 className="text-xl text-center font-bold">Students</h2>
          <h4 className="text-sm">
            {' '}
            Interested students with low income families that don’t have easy
            access to computers.{' '}
          </h4>
        </div>
        <div
          className="mt-20 px-5
           bg-white flex flex-col items-center shadow-lg group hover:shadow-2xl transition duration-500 space-y-4 w-72 md:w-56 h-[300px]
        "
        >
          <div className="relative h-24 w-24 ">
            <Image
              src="/8.png"
              s
              className=""
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
          <h2 className="text-xl text-center font-bold">ICT Teachers</h2>
          <h4 className="text-sm">
            {' '}
            2 ICT teachers from each of the 4 high schools that need capacitance
            in order to teach the student based on the current curriculum
            standard.
          </h4>
        </div>
        <div
          className="mt-20 px-5
           bg-white flex flex-col items-center shadow-lg group hover:shadow-2xl transition duration-500 space-y-4 w-72 md:w-56 h-[300px]
        "
        >
          <div className="relative h-24 w-24 ">
            <Image
              src="/4.png"
              className=""
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
          <h2 className="text-xl text-center font-bold">
            Public high school students in 4 Cities
          </h2>
          <h4 className="text-sm">
            {' '}
            Planning to reach Public high schools in: Hawassa, Jimma,Harar and
            Bahir Dar.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
