import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const About = ({props}) => {
const cont = ([
    {
        id:'1',
        name:"batting",
        val : props.batting
    },
    {
        id:'2',
        name:"bowling",
        val : props.bowling
    },
    {
        id:'3',
        name:"born",
        val : props.born
    },
    {
        id:'4',
        name:"jersey no.",
        val : props.jersey
    }
])
  return (
    <div className='w-full h-screen bg-blue-600'>

        <div className="md:hidden">
         <div className='pt-10 pl-5'>
            <h1 className='text-4xl text-white font-black uppercase'>{props.name.split(' ')[0]}</h1>
            <h1 className='text-5xl text-black font-black uppercase'>{props.name.split(' ')[1]}</h1>
          </div>
          <div className='jersey p-5'>
            <span className='text-9xl text-stroke font-bold'>{props.jersey}</span>
          </div>
          <div>
            <div className='grid grid-cols-1 gap-5 p-5'> 
            {cont.map(({ id, name, val }) => (
                <div key={id}>
                    <h1 className='text-white text-2xl capitalize font-bold'>{name}</h1>
                    <h2 className='text-yellow-400 text-3xl font-bold'>{val}</h2>
                </div>
                ))}
            </div>
            <div className='flex p-5 gap-5 text-3xl text-white'>
                <a href={props.fb}><FaFacebookF /></a>
                <a href={props.x}><FaXTwitter /></a>
                <a href={props.ig}><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
        <div className='w-8/12 h-3/6 '>
            <div className='md:pt-20 md:pl-10 pt-32 pl-5'>
                <span className='text-white md:text-8xl text-5xl font-black uppercase'>{props.name.split(' ')[0]}</span><br/>
                <span className='text-yellow-400 md:text-9xl text-6xl font-black uppercase'>{props.name.split(' ')[1]}</span><br/>
                <span className='text-white md:text-4xl text-3xl font-semibold'>{props.role}</span><br/>
            </div>
        </div>
        <div className='w-8/12 h-2/6'>
        <div className='grid grid-cols-2 gap-2 mt-16  ml-10'>
                    
            {cont.slice(0, 3).map(({ id, name, val }) => (
                <div key={id}>
                    <h1 className='text-black md:text-2xl capitalize font-bold'>{name}</h1>
                    <h2 className='text-yellow-400 md:text-3xl font-bold'>{val}</h2>
                </div>
                ))}
                {cont.length === 4 && (
                <div>
                    <h1 className='text-black md:text-2xl capitalize font-bold'>{cont[3].name}</h1>
                    <h2 className='text-yellow-400 md:text-7xl font-bold'>{cont[3].val}</h2>
                </div>
                )}
            </div>
        </div>
    </div>
    </div>
  )
}

export default About