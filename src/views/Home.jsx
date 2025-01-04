import React from 'react'
import Chat from '../components/Chat'
import Kotatsu from '../components/Kotatsu'
import Monitor from '../components/Monitor'
import LeaveRoomButton from '../components/LeaveRoomButton'

const Home = ({ user, id }) => {

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <div className='w-full h-full'>
                <img className='w-full h-full' src="/thumbnailSample.png" alt="room" />
            </div>
            <div className='absolute top-10 right-10'>
                <LeaveRoomButton roomID={id}/>
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