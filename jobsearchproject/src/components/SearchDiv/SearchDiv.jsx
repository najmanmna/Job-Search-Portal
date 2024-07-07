import React from "react";
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import {BsHouseDoor} from 'react-icons/bs';
import {CiLocationOn} from 'react-icons/ci';

const SearchDiv = () => {
  return (
    <div className="searchDiv grid gap-10 bg-gray-200 rounded-[10px] p-[4rem] mx-8">
      <form action="">
        <div className="firstdiv flex justify-between item-center rounded-[8px] gap-[10px]
         bg-white p-5 shadow-lg shadow-gray-600">
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search Job here..... "
            />
              <AiOutlineCloseCircle className="text-[30px] text-slate-500 hover:text-black" icon />
          </div>
          <div className="flex gap-2 items-center">
            <BsHouseDoor className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search by Company "
            />
              <AiOutlineCloseCircle className="text-[30px] text-slate-500 hover:text-black" icon />
          </div>
          <div className="flex gap-2 items-center">
            <CiLocationOn className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search by location "
            />
              <AiOutlineCloseCircle className="text-[30px] text-slate-500 hover:text-black" icon />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchDiv;
