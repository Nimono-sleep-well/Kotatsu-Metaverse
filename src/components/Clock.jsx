import React, { useState, useEffect } from 'react';
const Clock = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        
        return () => clearInterval(timer);
    }, []);

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const month = monthNames[currentDate.getMonth()];
    const day = dayNames[currentDate.getDay()];
    const date = currentDate.getDate();
    const hour = currentDate.getHours().toString().padStart(2, "0");
    const minute = currentDate.getMinutes().toString().padStart(2, "0");
    const second = currentDate.getSeconds().toString().padStart(2, "0");

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center',
            flexDirection: 'column',
            color: '#000000',
            letterSpacing: '0.1em'
        }}>
            <p style={{
                fontSize: '6em',
                fontFamily: 'kana, monospace', 
            }}>
                {hour}:{minute}:{second}
            </p>
            <p style={{
                fontSize: '5em',
                fontFamily: 'DotGothic, monospace', 
                fontWeight:'bold'
            }}>
                {month} {date} {day}
            </p>
        </div>
    );
};

export default Clock;
