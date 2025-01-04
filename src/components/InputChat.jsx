import React from 'react'

import "../index.css";

import { useState } from 'react';
import { db } from '../../firebaseConfig';
import { collection, addDoc, doc, serverTimestamp, getDoc } from 'firebase/firestore';

const InputChat = ({ user, roomID }) => {

    const [inputText, setInputText] = useState('');
    const [userName, setUserName] = useState('');

    const userDocRef = doc(db, 'usersInLobby', user);
    getDoc(userDocRef).then((doc) => {
        if (doc.exists()) {
            setUserName(doc.data().name);
        } else {
            console.log('No such document!');
        }
    })

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            console.log(inputText);
            const chatLogcollectionRef = collection(db, 'rooms', roomID, 'messages');
            if (inputText !== '') {
                await addDoc(chatLogcollectionRef, {
                    name: userName,
                    text: inputText,
                    sendAt: serverTimestamp(),
                });
            } else {
                console.log('No input text!');
            }
            setInputText('');
        }
    }

    return (
        <div className='flex font-Koruri max-w-2xl h-16'>
            <input
                className='w-full h-full bg-black bg-opacity-50 font-bold text-xl text-white'
                type="text"
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
                onKeyDown={handleKeyDown}
            />
            <div className='w-16 h-full bg-black bg-opacity-50 justify-center items-center flex'>
                <img className='scale-50' src="/sendChat.svg" alt="send" />
            </div>
        </div>
    )
}

export default InputChat