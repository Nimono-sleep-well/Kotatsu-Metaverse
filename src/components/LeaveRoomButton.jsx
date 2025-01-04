import React from 'react'
import { db } from '../../firebaseConfig';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

import { useNavigate } from 'react-router-dom'

const LeaveRoomButton = ({ roomID }) => {

    const navigate = useNavigate();

    const roomsDocRef = doc(db, 'rooms', roomID);

    const leaveRoom = () => {
        navigate('/SelectRoom');
        getDoc(roomsDocRef).then((doc) => {
            if (doc.exists()) {
                updateDoc(roomsDocRef, {
                    peopleInRoom: doc.data().peopleInRoom - 1,
                });
            } else {
                console.log('No such document!');
            }
        });
    }

    return (
        <div>
            <button onClick={leaveRoom} className='w-32 h-16 bg-red-500 hover:bg-red-400 text-white text-xl font-bold py-2 px-4 rounded'>
                退室
            </button>
        </div>
    )
}

export default LeaveRoomButton