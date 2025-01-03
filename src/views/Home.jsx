import React from 'react'
import Clock from '../components/Clock'
import Chat from '../components/Chat'
import Kotatsu from '../components/Kotatsu'
import User from '../components/User'

const Home = ({id}) => {

    const x = 0;
    const y = 100;

    return (
        <div className='w-screen h-screen bg-blue-400 flex flex-col items-center justify-center'>
            <div className='bg-red-300 w-full h-[91%]'> 
                <img className='w-full h-full' src="/thumbnailSample.png" alt="room" />
            </div>
            <div className='flex bg-yellow-950 w-full h-[9%]'>
                
            </div>
        </div>
    )
}

export default Home