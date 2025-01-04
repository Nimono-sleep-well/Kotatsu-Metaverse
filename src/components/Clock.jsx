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
        <div className='flex justify-center items-center h-full text-center flex-col text-black tracking-widest' >
            <p className='font-kana text-8xl'>
                {hour}:{minute}:{second}
            </p>
            <p className='font-DotGothic text-7xl font-bold mt-5'>
                {month} {date} {day}
            </p>
        </div>
    );
};

export default Clock;
