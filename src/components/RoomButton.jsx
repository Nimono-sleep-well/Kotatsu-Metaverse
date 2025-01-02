import React from 'react'

import "../index.css"

import { db } from '../../firebaseConfig';
import { addDoc, collection, doc, deleteDoc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';

import { format } from 'date-fns';
import { Link, useNavigate } from "react-router-dom";

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const RoomButton = (props) => {

    const navigate = useNavigate();

    const deleteRoom = async (id) => {
        const roomsDocumentRef = doc(db, 'rooms', id);
        await deleteDoc(roomsDocumentRef);
    }
    
    const transitionRoom = async (room) => {
        const roomsDocumentRef = doc(db, 'rooms', room.id);
        const usersDocumentRef = doc(db, 'usersInLobby', props.user);
    
        getDoc(usersDocumentRef).then((DocumentSnapshot) => {
            if (DocumentSnapshot.exists()) {
                userData = DocumentSnapshot.data().name;
                console.log(DocumentSnapshot.data().name);
                console.log(userData);
            } else {
                console.log('[Err]No such document');
            }
        })
    
        const nextValueOfPeopleInRoom = room.peopleInRoom + 1;
        props.setData(room.id);
        navigate("/Home");
        await setDoc(roomsDocumentRef, {
            name: room.name,
            peopleInRoom: nextValueOfPeopleInRoom,
        });
        await addDoc(collection(db, 'rooms', room.id, 'messages'), {
            name: 'System',
            text: 'Welcome to ' + room.name,
        });
        await addDoc(collection(db, 'rooms', room.id, 'users'), {
            name: userData,
            motion: 0,
            x: 0,
            y: 0,
        });
    }

    return (
        <div className='font-SourceHanSansJP relative group w-60 h-60 rounded-3xl bg-amber-200 transition duration-200 ease-in-out transform hover:scale-110'>
            <button onClick={() => transitionRoom(props.room)}>
                <img className='rounded-t-3xl' src="/thumbnailSample.png" alt="room" />
                <div className='flex m-2 w-56 h-10 rounded-lg bg-amber-300 items-center justify-center'>
                    <p className='text-xl font-black truncate'>{props.room.name}</p>
                </div>
                <div className='flex w-auto'>
                    <div className='ml-2 mr-1 w-1/3 h-10 rounded-lg bg-amber-300'>
                        <img src="/user_logo.svg" alt="userLogo" className='size-5 translate-x-2.5 translate-y-2.5' />
                        <p className='text-center text-xl font-extrabold translate-x-2.5 -translate-y-3'>{props.room.peopleInRoom}</p>
                    </div>
                    <div className='ml-1 mr-2 w-2/3 h-10 rounded-lg bg-amber-300'>
                        <p className='text-center text-lg font-bold translate-y-2'>{}</p>
                    </div>
                </div>
            </button>
            <button onClick={() => deleteRoom(props.room.id)} className='flex w-10 h-10 invisible bg-red-400 ring-2 ring-white translate-x-48 -translate-y-56 rounded-full items-center justify-center transition duration-200 ease-in-out transform hover:scale-110 group-hover:visible absolute'>
                <img className='size-6' src="/trashRoom.svg" alt="trashRoomButton" />
            </button>
        </div>
    )
}

export default RoomButton