import React from 'react'
import Chat from '../components/Chat'
import ChatLog from '../components/ChatLog'
import InputChat from '../components/InputChat'
import Kotatsu from '../components/Kotatsu'
import User from '../components/User'

const Home = ({ user, id }) => {

    const x = 0;
    const y = 100;

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <div className='w-full h-full'>
                <img className='w-full h-full' src="/thumbnailSample.png" alt="room" />
                
            </div>
            <div className='absolute bottom-10'>
                    <Kotatsu></Kotatsu>
            </div>
            <div className='absolute left-0 bottom-20'>
                <Chat user={user} roomID={id}></Chat>
            </div>
        </div>
    )
}

export default Home