import React from 'react'
import { data } from 'react-router-dom'

const Home = ({id}) => {
    return (
        <div>
            <h1>Home</h1>
            <h1>{id}</h1>
        </div>
    )
}

export default Home