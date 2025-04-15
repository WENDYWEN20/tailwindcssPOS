import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { MdOutlineReorder } from "react-icons/md";
import { BiSolidDish } from "react-icons/bi";
import Modal from "./Modal";
export default function BottomNav() {
  const navigation = useNavigate(); //function
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#777676] p-2 h-16 flex justify-around">
      <button
        onClick={() => navigation("/")}
        className="flex items-center justify-center text-[#ababab] bg-[#343434] w-[300px] rounded-[15px]"
      >
        <FaHome className="inline mr-4" size={20} /> <p> Home </p>{" "}
      </button>
      <button
        onClick={() => navigation("/orders")}
        className="flex items-center justify-center text-[#ababab] bg-[#343434] w-[300px] rounded-[15px]"
      >
        <MdOutlineReorder className="inline mr-4" size={20} /> <p> Orders</p>
      </button>
      <button
        onClick={() => navigation("/tables")}
        className="flex items-center justify-center text-[#ababab] bg-[#343434] w-[300px] rounded-[15px]"
      >
        <MdTableBar className="inline mr-4 " size={20} /> <p> Tables</p>
      </button>
      <button className="flex items-center justify-center text-[#ababab] bg-[#343434] w-[300px] rounded-[15px]">
        <CiCircleMore className="inline mr-4 " size={20} /> <p> More</p>
      </button>
      <button
        onClick={openModal}
        className="absolute bottom-4 bg-[#F6B100] text-[#f5f5f5] rounded-full p-3 "
      >
        <BiSolidDish size={30} />
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
        <div>
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Customer Name
          </label>
          <div className="flex item-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
            <input
              className="bg-transparent flex-1 text-white focus: outline-none"
              type="text"
              placeholder="Enter Customer Name"
              id=""
              name=""
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 mt-3 text-sm font-medium text-[#ababab]">
            Guest
          </label>
          <div className="flex item-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
            <button className="text-yellow-500 text-2xl">&minus</button>
            <span className="text-white">0 Person</span>
            <button className="tex-yellow-500 text-2xl"> &#43</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
