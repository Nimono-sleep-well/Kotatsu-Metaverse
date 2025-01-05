import React from 'react';
import Clock from '../components/Clock';

const Monitor = () => {
  return (
    <div className='relative w-full h-full'>
      <img
        src="/monitor.png"
        alt="clockBackground"
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full'
      />
      <div
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full'
        
      >
        <Clock />
      </div>
    </div>
  );
};

export default Monitor;
