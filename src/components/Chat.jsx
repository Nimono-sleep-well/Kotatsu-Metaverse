import React from 'react'

import InputChat from './InputChat'
import ChatLog from './ChatLog'

const Chat = ({ roomID }) => {
    return (
        <div>
            <InputChat roomID={roomID}></InputChat>
            <ChatLog roomID={roomID}></ChatLog>
        </div>
    )
}

export default Chat