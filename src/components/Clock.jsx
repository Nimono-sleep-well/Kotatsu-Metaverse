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
    const month = currentDate.getMonth() + 1;
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
            <p style={{ fontFamily: 'Impact, sans-serif', fontSize: '10em', fontWeight: 'bold' }}>
                {hour}:{minute}:{second}
            </p>
            <p style={{ fontFamily: 'Impact, sans-serif', fontSize: '4em', fontWeight: 'bold' }}>
                {year}年{month}月{date}日
            </p>
        </div>
    );
};

export default Clock;