import React from 'react'

import InputChat from './InputChat'
import ChatLog from './ChatLog'

const Chat = ({ user, roomID }) => {
    return (
        <div className='h-full'>
            <div className='overflow-y-auto'>
            <ChatLog roomID={roomID}></ChatLog>
            </div>
            
            <InputChat user={user} roomID={roomID}></InputChat>
        </div>
    )
}

export default Chat