import React from 'react';
import Clock from '../components/Clock';

const Monitor = () => {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
      <img
        src="/ClockBackground.jpg"
        alt="clockBackground"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60vw', 
          zIndex: -1, // 背景画像を後ろ側に
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <Clock />
      </div>
    </div>
  );
};

export default Monitor;
