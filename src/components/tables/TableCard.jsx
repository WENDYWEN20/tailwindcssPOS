import React from "react";
import { getRandomBG } from "../../constants";

export default function TableCard({id, name, status, initials}) {
  
  return (
    <div key={id} className="w-[300px] hover:bg-[#1f1f1f] bg-[#262626] p-4 rounded-lg mb-4 cursor-pointer">
      <div className="flex items-center justify-between">
        <h1 className="text-[#f5f5f5] text-xl font-semibold">{name}</h1>
        <p className={`${status==="Booked"? "text-green-600 bg-[#2e4a40]":"text-white bg-[#f6b100]"} bg-[#2e4a40] px-2 py-1 rounded-lg`}>
          {status}
        </p>
      </div>
      <div className="flex items-center justify-center my-5">
        <h1 className={`${getRandomBG()} text-white rounded-full p-5 text-xl`}>
          {initials}
        </h1>
      </div>
    </div>
  );
}
