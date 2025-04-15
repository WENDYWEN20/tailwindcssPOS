import React, { useState, useEffect } from "react";

export default function Greetings() {
  const [dateTime, setDateTime] = useState(new Date());
  //When the component unmounts, the cleanup function (return () => clearInterval(timer)) stops the interval, preventing memory leaks.

  useEffect(() => {
    const timerId = setInterval(() => setDateTime(new Date(), 1000));
    return () => clearInterval(timerId);
  }, []);
  const formatDate=(date)=>{
    const months=['January','February','March','April','May','June','July','August',
'September','October','November','December'];
    return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2,'0')}, ${date.getFullYear()}`
  }
    const formatTime=(date)=>`${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}:${String(date.getSeconds()).padStart(2,'0')}`

  return (
    <div className="flex justify-between items-center px-8 mt-5">
      <div>
        <h1 className="text-[#f5f5f5] text-2xl font-semibold tracking-wide">
          Good morning
        </h1>
        <p className='text-[#ababab] text-sm'>We provide Best Services around New England</p>
      </div>
      <div>
        <h1 className='text-[#f5f5f5] text-3xl font-bold tracking-wide w-[130px]'>{formatTime(dateTime)}</h1>
        <p className="text-[#ababab] text-sm">{formatDate(dateTime)}
        </p>
      </div>
    </div>
  );
}
