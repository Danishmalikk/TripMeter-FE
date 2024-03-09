import React from "react";
import totalBilling from "../assets/img/Dashboard_total_billing.jpg";
import Revenue from "../assets/img/Dashboard_revenue.jpg";
import CompletedTrips from "../assets/img/Dashboard_trip.jpg";
import { IoMdTime } from "react-icons/io";
import { MdOutlineBarChart } from "react-icons/md";
import { FaTag } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <div className="ml-64 dashboard md:flex md:flex-col gap-8">
      <div className="dashboard-card flex flex-row gap-5 mt-28 mx-10 w-100% h-[280px]">
        <div className="flex flex-col relative p-6  w-96 bg-white shadow-xl rounded-md">
          <div className="absolute -top-4 hover:-top-16 rounded-md">
            <img
              src={totalBilling}
              className="shadow-lg rounded-md"
              height="180px"
              width="330px"
              alt="total billing"
            />
          </div>
          <div className="flex flex-col mt-36 ">
            <span className="text-gray-600 text-lg font-bold">
              Total Billing
            </span>
            <span className="mb-3 text-black opacity-60 font-thin">
              {" "}
              Sitewise Billing{" "}
            </span>
            <div className="text-black text-sm font-thin opacity-70 flex items-center gap-2 border-t border-t-gray-500">
              <IoMdTime /> <span> current year </span>{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col relative p-6  w-96 bg-white shadow-xl rounded-md">
          <div className="absolute -top-4 hover:-top-16 rounded-md">
            <img
              src={Revenue}
              className="shadow-lg rounded-md"
              height="180px"
              width="330px"
              alt="revenue"
            />
          </div>
          <div className="flex flex-col mt-36 ">
            <span className="text-gray-600 text-lg font-bold">
              Revenue
            </span>
            <span className="flex gap-2 mb-3 text-black opacity-60 font-thin">
              <p className="text-green-700 opacity-100">55%</p> <p> increase in Revenue </p>
            </span>
            <div className="text-black text-sm font-thin opacity-70 flex items-center gap-2 border-t border-t-gray-500">
              <IoMdTime /> <span> last 7 days </span> 
            </div>
          </div>
        </div>
        <div className="flex flex-col relative p-6  w-96 bg-white shadow-xl rounded-md">
          <div className="absolute -top-4 hover:-top-16 rounded-md">
            <img
              src={CompletedTrips}
              className="shadow-lg rounded-md"
              height="180px"
              width="330px"
              alt="Completed Trips"
            />
          </div>
          <div className="flex flex-col mt-36 ">
            <span className="text-gray-600 text-lg font-bold">
              Completed Trips
            </span>
            <span className="mb-3 text-black opacity-60 font-thin">
              {" "}
              Last week Performance 
            </span>
            <div className="text-black text-sm font-thin opacity-70 flex items-center gap-2 border-t border-t-gray-500">
              <IoMdTime /> <span> current year </span>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-10 mt-8 flex gap-6 ">
        <div className="bg-white rounded-md w-1/4 p-7 text-gray-500"> 
          <div className="flex justify-between"> <MdOutlineBarChart className="bg-yellow-500 text-button-text w-24 h-24 rounded-md -mt-10"/> <span> <p> Total Trips </p> <p className="text-right text-black"> 184 </p> </span></div>
          <div className="flex gap-2 items-center border-t border-t-gray-400 mt-4"> <FaTag/> More details </div>
        </div>
        <div className="bg-white rounded-md w-1/4 p-7 text-gray-500"> 
          <div className="flex justify-between"> <MdOutlineBarChart className="bg-pink-500 text-button-text w-24 h-24 rounded-md -mt-10"/> <span> <p> Total Revenue </p> <p className="text-right text-black"> 2,97,897 </p> </span></div>
          <div className="flex gap-2 items-center border-t border-t-gray-400 mt-4"> <FaTag/> More details </div>
        </div>
        <div className="bg-white rounded-md w-1/4 p-7 text-gray-500"> 
          <div className="flex justify-between"> <MdOutlineBarChart className="bg-green-600 text-button-text w-24 h-24 rounded-md -mt-10"/> <span> <p> Trips in Progress </p> <p className="text-right text-black"> 54 </p> </span></div>
          <div className="flex gap-2 items-center border-t border-t-gray-400 mt-4"> <FaTag/> More details </div>
        </div>
        <div className="bg-white rounded-md w-1/4 p-7 text-gray-500"> 
          <div className="flex justify-between"> <MdOutlineBarChart className="bg-blue-600 text-button-text w-24 h-24 rounded-md -mt-10"/> <span> <p> Booked Trips </p> <p className="text-right text-black"> 23 </p> </span></div>
          <div className="flex gap-2 items-center border-t border-t-gray-400 mt-4"> <FaTag/> More details </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
