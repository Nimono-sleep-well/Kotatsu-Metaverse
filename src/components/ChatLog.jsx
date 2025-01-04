import React, { useState, useEffect } from 'react'

import "../index.css";

import { format } from 'date-fns';

import { db } from '../../firebaseConfig'
import { addDoc, collection, doc, deleteDoc, DocumentSnapshot, getDoc, getDocs, onSnapshot, query, QuerySnapshot, serverTimestamp, setDoc, where, updateDoc, orderBy } from 'firebase/firestore'

const ChatLog = ({ roomID }) => {

    const [messages, setMessages] = useState([]);
    const [isChangedLog, setIsChangedLog] = useState(false);

    useEffect(() => {

        const messageCollectionRef = collection(db, 'rooms', roomID, 'messages');
        const q = query(messageCollectionRef, orderBy('sendAt', 'asc'));
        const unsub = onSnapshot(q, (QuerySnapshot) => {
            setMessages(
                QuerySnapshot.docs.map(
                    (doc) => ({ ...doc.data({ serverTimestamps: "estimate" }), id: doc.id })
                )
            )
        });
        return unsub;

        const temp = onSnapshot(messageCollectionRef, (QuerySnapshot) => {
            setIsChangedLog(true);
        });
        return temp;

    }, []);

    return (
        <div className='grid font-SourceHanSansJP max-w-2xl h-auto pb-1 items-end'>
            <ul className='w-full h-auto'>
                {messages.map((message) => (
                    <li className='flex relative flex-wrap w-full pl-1 py-1 bg-black bg-opacity-50 text-2xl text-white' key={message.id}>
                        <div className='grid pb-1'>
                            <div>
                                <span className='font-bold'>{message.name}</span>
                                <span className='font-light pl-1 text-base text-zinc-200'>{format(message.sendAt.toDate(), 'HH:mm')}</span>
                            </div>
                            <span className='pl-2'>{message.text}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ChatLog