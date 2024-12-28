import React from 'react'
import Clock from '../components/Clock'
import Chat from '../components/Chat'
import Kotatsu from '../components/Kotatsu'

const Home = ({id}) => {
    return (
        <div>
            <h1>{id}</h1>
            <Clock></Clock>
            <Kotatsu></Kotatsu>
            <Chat roomID={id}></Chat>
        </div>
    )
}

export default Home