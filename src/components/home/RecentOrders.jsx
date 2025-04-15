import React from "react";
import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";
const RecentOrders = () => {
  return (
    <div className="px-8 mt-6">
      <div className="bg-[#1a1a1a]  w-full h-[450px] rounded-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-[#f5f5f5] text-lg tracking-wide">
            Recent Orders
          </h1>
          <a href="" className="text-[#025cca] text-sm font-semibold">
            View all
          </a>
        </div>
        <div
          className="flex items-center gap-5 p-2 rounded-[15px] px-5
      py-2 w-[800px] bg-[#1f1f1f] mx-6"
        >
          <FaSearch className="text-[#f5f5f5]" />
          <input
            type="text"
            placeholder="Search Recent Orders"
            className="bg-[#1f1f1f] outline-none text-[#f5f5f5] "
          />
        </div>
        <div className='mt-4 px-6 overflow-y-scroll h-[300px] scrollbar-hide'>
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
        </div>
      </div>
    </div>
  );
};
export default RecentOrders;
