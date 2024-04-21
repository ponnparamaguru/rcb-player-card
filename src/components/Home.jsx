import React from 'react'
const Home = ({props}) => {
  return (
    <div className='w-full h-screen md:w-full md:h-screen bg-red-600'>
      <div className='md:hidden'>
          <div className='p-5'>
            <h1 className='text-5xl text-white font-black uppercase'>{props.name.split(' ')[0]}</h1>
            <h1 className='text-6xl text-black font-black uppercase'>{props.name.split(' ')[1]}</h1>
          </div>
          <div className='jersey'>
            <span className='text-20xl text-stroke font-bold pt-20'>{props.jersey}</span>
          </div>
        <div className='h-80 w-fullrelative overflow-hidden'>
            <img className='h-full w-full filter drop-shadow-2xl shadow-black object-cover object-top img scale-150' src={props.url} alt=''/>
        </div>
        <div className='w-full p-5 pt-5'>
          <p className='font-semibold text-white'>{props.description}</p>
        </div>
      </div>

      <div className='hidden md:block'>
        <div className='w-35 h-screen bg-red-600 fixed md:right-0 hidden md:block'>
          <div className='fixed right-0 md:-mt-24 md:-mr-4'>
            <span className='text-stroke font-bold text-20xl'>{props.jersey}</span>
          </div>
          <div className='fixed right-0 mt-64 -mr-56 transform scale-150'>
            <img className='hidden md:block' src={props.url} alt=''/>
          </div>
        </div>        
        <div className='md:pt-20 md:pl-10 pt-30 pl-5 font-black'>
          <span className='text-white text-5xl md:text-8xl uppercase '>{props.name.split(' ')[0]}</span><br/>
          <span className='text-black text-5xl md:text-9xl uppercase'>{props.name.split(' ')[1]}</span><br/>
          <span className='text-white text-xl md:text-4xl font-semibold'>{props.role}</span><br/>
          <p className='md:w-7/12 text-sm font-medium pr-5 text-wrap pt-3 md:pt-5 text-white'>{props.description}</p>
        </div>
        <div>
      </div>
    </div>
  </div>
  )
}

export default Home