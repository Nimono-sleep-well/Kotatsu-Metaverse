import React from 'react';
import Chat from '../components/Chat';
import Kotatsu from '../components/Kotatsu';
import Monitor from '../components/Monitor';

const Home = ({ user, id }) => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center relative'>
      <div className='w-full h-full'>
        <img
          className='w-full h-full absolute top-0 left-0'
          src="/thumbnailSample.png"
          alt="room"
        />
      </div>
      <div className='absolute top-0 left-0 w-full h-full'>
        <Monitor />
      </div>
      <div className='absolute bottom-10'>
        <Kotatsu />
      </div>
      <div className='absolute left-0 bottom-20'>
        <Chat user={user} roomID={id} />
      </div>
    </div>
  );
};

export default Home;
