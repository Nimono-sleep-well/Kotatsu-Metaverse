import React from 'react'
import Chat from '../components/Chat'
import Kotatsu from '../components/Kotatsu'

const Home = ({id}) => {
    return (
        <div>
            <h1>{id}</h1>
            <Kotatsu></Kotatsu>
            <Chat roomID={id}></Chat>
        </div>
    )
}

export default Home