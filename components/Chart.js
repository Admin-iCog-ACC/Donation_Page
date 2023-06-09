import { Chart, registerables } from "chart.js";
import { useEffect, useRef } from "react";
import { FaChild } from "react-icons/fa";
import { SiTrainerroad } from "react-icons/si";
import { MdReduceCapacity } from "react-icons/md";
import Image from "next/image";

Chart.register(...registerables);

const data = {
  labels: ["Sustainability", "Trainer", "Capacity Building"],
  datasets: [
    {
      label: "Where is the donation going?",
      backgroundColor: ["#7FBCD2", "#A5F1E9", "#B7C4CF"],
      hoverBackgroundColor: ["#7FBCD2", "#A5F1E9", "#B7C4CF"],
      data: [60, 20, 20],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 2,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

export default function MyComponent() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById("myChart").getContext("2d");
    chartRef.current = new Chart(ctx, { type: "doughnut", data, options });
  }, [data, options]);

  return (
    <div className="lg:mx-10 grid lg:pr-8 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-5 lg:gap-0 ">
      <div className="flex items-center  justify-center">
        <div className="relative flex items-center  justify-center">
        <div className="space-y-2 pl-8">
          <h2 className="text-4xl tracking-wide pb-2 font-bold ">Where is the donation going?</h2>
          <div className="bg-[#1593a7] w-[50px] h-[3px] "></div>
          <h3 className="text-2xl tracking-wide pt-2">Sustainability + Capacity building + Training </h3>
        </div>
        </div>
      </div>
      <div className="flex pt-7 md:pt-0 items-center justify-center">
        <div className="pt-9 md:ml-5 flex flex-col gap-3">
          <div className="flex gap-3">
            <div className="h-7 w-7 rounded-full flex md:items-center">
              <FaChild />
            </div>
            <div>
              <p className="font-bold">Sustainability</p>
              <p>Coding club and Maintenance.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="h-7 w-7 rounded-full flex items-center">
              <MdReduceCapacity />
            </div>
            <div>
              <p className="font-bold">Capacity building</p>
              <p>Training of Trainers.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="h-7 w-7 rounded-full flex items-center">
              <SiTrainerroad />
            </div>
            <div>
              <p className="font-bold">Training</p>
              <p>M&E and Trainer fee.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex pt-7 md:pt-0 items-center justify-center lg:pr-4  mt-4">
        <div className="md:w-full w-3/4 h-48 md:h-auto">
          <canvas id="myChart" />
        </div>
      </div>
    </div>
  );
}
