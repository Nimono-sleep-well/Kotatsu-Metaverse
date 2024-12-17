import React, { useState, useEffect } from 'react';
const Clock = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        
        return () => clearInterval(timer);
    }, []);

    const year = currentDate.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const month = monthNames[currentDate.getMonth()];
    const day = dayNames[currentDate.getDay()]
    const date = currentDate.getDate();
    const hour = currentDate.getHours().toString().padStart(2, "0");
    const minute = currentDate.getMinutes().toString().padStart(2, "0");
    const second = currentDate.getSeconds().toString().padStart(2, "0");

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center', // 横方向の中央揃え
            alignItems: 'center',     // 縦方向の中央揃え
            height: '50vh',          // 画面全体の高さ
            textAlign: 'center',      // 文字を中央揃え
            flexDirection: 'column'   // 要素を縦方向に並べる
        }}>
            <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '6em', fontWeight: 'bold' }}>
                {hour}:{minute}:{second}
            </p>
            <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2em', fontWeight: 'bold' }}>
                {month} {date} {day}
            </p>
        </div>
    );
};

export default Clock;