import React from 'react'
import { useNavigate } from 'react-router-dom';
import {IoArrowBackOutline } from "react-icons/io5";
export default function BackButton() {
    const navigation=useNavigate()
  return (
    <button onClick={()=>navigation(-1)} className='bg-[#5147db] p-3 text-xl font-bold rounded-full text-white'>
      <IoArrowBackOutline/>Back
    </button>
  )
}
