import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";


function ContentSection({level, setLevel}) {
  const router = useRouter();
  return (
    <div className="max-w-[1225px]  mx-auto my-5">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-5">
        <button onClick={()=>setLevel(0)} className="text-sm py-1 px-2 text-white text-center rounded-full  bg-[#178c9f]  w-40 ">
          <h4 className="">Level 0 </h4>
          <p> Digital Literacy </p>
        </button>
        <button onClick={()=>setLevel(1)} className="text-sm  py-1 px-2 text-white text-center rounded-full bg-[#178c9f]  w-40 ">
          <h4 className="">Level 1 </h4>
          <p> Scratch Programming </p>
        </button>

        <div className="text-sm relative py-1 group px-2 text-white text-center group rounded-full opacity-50 bg-[#178c9f] w-40 ">
          <span className="absolute p-2 bottom-14 text-white pt-5 bg-black w-auto min-w-max transition-all duration-200 origin-bottom scale-0 group-hover:scale-100 z-10">
            Not Available for now.
          </span>
          <h4 className="">Level 2 </h4>
          <p> Python</p>
        </div>

        <div className="text-sm py-1 px-2 group text-white text-center rounded-full opacity-50 relative bg-[#178c9f] w-40  ">
        <span className="absolute p-2 bottom-14 text-white pt-5 bg-black w-auto min-w-max transition-all duration-200 origin-bottom scale-0 group-hover:scale-100 z-10">
            Not Available for now.
          </span>
          <h4 className="">Level 3 </h4>
          <p> Website Development </p>
        </div>

        <div className="text-sm py-1 px-2 text-white text-center group rounded-full opacity-50 relative bg-[#178c9f]  w-48 ">
        <span className="absolute p-2 bottom-14 text-white pt-5 bg-black w-auto min-w-max transition-all duration-200 origin-bottom scale-0 group-hover:scale-100 z-10">
            Not Available for now.
          </span>
          <h4 className="">Level 4 </h4>
          <p> Mobile App Development </p>
        </div>

        <div className="text-sm py-1 px-2 text-white text-center group rounded-full opacity-50 relative bg-[#178c9f]  w-40 ">
        <span className="absolute p-2 bottom-14 text-white pt-5 bg-black w-auto min-w-max transition-all duration-200 origin-bottom scale-0 group-hover:scale-100 z-10">
            Not Available for now.
          </span>
          <h4 className="">Level 5 </h4>
          <p> Game Development </p>
        </div>

        <div className="text-sm py-1 px-2 text-white text-center group rounded-full opacity-50 relative bg-[#178c9f]  w-40">
        <span className="absolute p-2 bottom-14 text-white pt-5 bg-black w-auto min-w-max transition-all duration-200 origin-bottom scale-0 group-hover:scale-100 z-10">
            Not Available for now.
          </span>
          <h4 className="">Level 6 </h4>
          <p> Cyber Security </p>
        </div>

        <div className="text-sm py-1 px-2 text-white text-center group rounded-full opacity-50 relative bg-[#178c9f]  w-40">
        <span className="absolute p-2 bottom-14 text-white pt-5 bg-black w-auto min-w-max transition-all duration-200 origin-bottom scale-0 group-hover:scale-100 z-10">
            Not Available for now.
          </span>
          <h4 className="">Level 7 </h4>
          <p> Electronics </p>
        </div>

        <div className="text-sm py-1 px-2 text-white text-center group rounded-full opacity-50 relative bg-[#178c9f]  w-40">
        <span className="absolute p-2 bottom-14 text-white pt-5 bg-black w-auto min-w-max transition-all duration-200 origin-bottom scale-0 group-hover:scale-100 z-10">
            Not Available for now.
          </span>
          <h4 className="">Level 8 </h4>
          <p> IoT and Robotics</p>
        </div>

        <div className="text-sm py-1 px-2 text-white text-center group rounded-full opacity-50 relative bg-[#178c9f]  w-48">
        <span className="absolute p-2 bottom-14 text-white pt-5 bg-black w-auto min-w-max transition-all duration-200 origin-bottom scale-0 group-hover:scale-100 z-10">
            Not Available for now.
          </span>
          <h4 className="">Level 9 </h4>
          <p> AI and Machine Learning</p>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
