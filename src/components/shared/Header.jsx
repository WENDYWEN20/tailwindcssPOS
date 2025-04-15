import React from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import logo from "../../assets/logo.png";
export default function Header() {
  return (
    <header className="flex items-center py-4 px-8 bg-[#777676]  justify-around">
      {/* logo */}
      <div className="flex items-center gap-2">
        <img src={logo} className="h-8 w-8" alt="logo" />
      </div>
      {/*SEARCH*/}
      <div className="flex items-center gap-5 p-2 rounded-[15px] px-5
      py-2 w-[800px]">
        <FaSearch className="text-[#f5f5f5]" />
        <input 
          type="text"
          placeholder="Search"
          className="p-2 w-[500px] rounded=[20px] bg-[#f5f5f5] outline-none text-[#f5f5f5] "
        />
      </div>
      {/* logged user detail */}
      <div className="flex items-center gap-4">
        <div className="rounded-[15px] p-3 cursor-pointer">
          <FaBell className="text-[#f5f5f5] text-2xl" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle className="text-[#f5f5f5] text-4xl" />
        <div className="flex flex-col items-start">
          <h1 className="text-md text-[#f5f5f5] font-semibold">Restaurant </h1>
          <p className="text-xs text-[#f5f5f5] font-medium"> Admin</p>
        </div>
        </div>
      </div>
    </header>
  );
}
