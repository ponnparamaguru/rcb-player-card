import React from 'react'
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const More = ({props}) => {
  
  return (
    <div className='w-full h-screen md:w-full md:h-screen bg-yellow-400'>
      <div className='md:hidden'>
          <div className='pt-10 pl-5'>
              <div className='text-red-600 text-5xl font-black uppercase'>{props.name.split(' ')[0]}</div>
              <div className='text-black text-6xl font-black uppercase'>{props.name.split(' ')[1]}</div>
            </div>
            <div className='absolute right-5'>
            <span className='text-9xl text-stroke font-bold pt-20'>{props.jersey}</span>
          </div>
        <div className='h-80 w-full relative overflow-hidden'>
            <img className='h-full w-full filter drop-shadow-2xl shadow-black object-cover object-top img scale-150' src={props.url} alt=''/>
        </div>
        <div className='pl-5 pt-5 pr-5 pb-5'>
          <h1 className='text-sm text-justify text-black '>{props.description}</h1>
          <div className='flex text-4xl pt-20 gap-5'>
          <a href={props.fb}><FaFacebookF className=' text-blue-600' /></a>
          <a href={props.x}><FaXTwitter className=' text-black'/></a>
          <a href={props.ig}><FaInstagram className=' text-pink-600'/></a>
          </div>
        </div>
      </div>

      <div className='hidden md:block'>
        <div className='md:pt-20 md:pl-10 pt-32 pl-5 font-black'>
         <span className='text-red-600 text-5xl md:text-8xl uppercase '>{props.name.split(' ')[0]}</span><br/>
         <span className='text-black text-5xl md:text-9xl uppercase'>{props.name.split(' ')[1]}</span><br/>
       </div>
       <div className=' pl-10 pt-5'>
          <h1 className='text-4xl text-white font-bold'>Follow on </h1>
       </div>
       <div className='p-10 flex gap-5'>
        <a href={props.fb}><FaFacebookF className='text-5xl text-blue-600' /></a>
        <a href={props.x}><FaXTwitter className='text-5xl text-black'/></a>
        <a href={props.ig}><FaInstagram className='text-5xl text-pink-600'/></a>
       </div>
    </div>
    </div>
  )
}

export default More