import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";
export default function OrderCard() {
  return (
    <div className='w-[400px] bg-[#262626] rounded-lg m-2 px-4 py-4'>
      <div className="flex items-center gap-5 mb-1">
        <button className="bg-[#f6b100] p-3 text-xl font-bold text-[#f5f5f5] rounded-lg">
          Users
        </button>
        <div className="flex items-center justify-between w-[100%]">
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
              User 1
            </h1>
            <p className="text-[#ababab] text-sm">#101/ Dine in</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <p className="bg-[#2e4a40] text-green-600 px-2 rounded-lg">
              <FaCheckDouble className="inline mr-2" />
              Ready
            </p>
            <p className="text-[#ababab] text-sm">
              <FaCircle className="inline mr-2 text-green-600" /> Ready to serve
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center mt-4 text-[#ababab]'>
        <p>Jan 18, 2025 08:32 PM</p>
        <p>8 Items</p>
      </div>
      <hr className='w-full text-[#f5f5f5] border-grey-500 mt-2'/>
      <div className='flex items-center justify-between mt-4 text-[#f5f5f5] font-semibold'>
        <h1 className=''>Total</h1>
        <p>$100</p>
        </div>
    </div>
  );
}
