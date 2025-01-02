import React from 'react'

import "../index.css"

import { db } from '../../firebaseConfig';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const CreateRoom = ({ setIsShowModal }) => {

    const createRoom = async (event) => {
        event.preventDefault();
        const { name } = event.target.elements;
        const roomsCollectionRef = collection(db, 'rooms');

        await setIsShowModal(false);
        
        await addDoc(roomsCollectionRef, {
            name: name.value,
            peopleInRoom: 0,
            createdAt: serverTimestamp(),
        });
    };

    return (
        <div className='font-Koruri'>
            <div id="modal" className="target:block">
                <div className="block w-full h-full bg-black/70 absolute top-0 left-0">
                    <a onClick={() => setIsShowModal(false)} href="#" className="block w-full h-full cursor-default justify-center items-center"></a>
                    <div className="grid translate-x-30 w-3/4 mx-auto mt-20 relative -top-2/3 justify-center items-center">
                        <h1 className='text-center mb-10 font-extrabold text-white text-7xl'>ルーム作成</h1>
                        <form onSubmit={createRoom}>
                            <input
                                className='w-[48rem] h-16 rounded-xl text-xl font-bold'
                                name="name"
                                type="text"
                                placeholder='　ここにルーム名を入力' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateRoom