import React from 'react'
import Clock from '../components/Clock'

const Home = ({id}) => {
    return (
        <div>
            <h1>{id}</h1>
            <Clock></Clock>
        </div>
    )
}

export default Home