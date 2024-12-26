import React from 'react'
import { useState, useEffect } from 'react';
import { db } from '../../firebaseConfig';
import { collection, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';

const InputChat = ({ roomID }) => {

    const [inputText, setInputText] = useState('');

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            console.log(inputText);
            const chatLogcollectionRef = collection(db, 'rooms', roomID, 'messages');
            const documentRef = await addDoc(chatLogcollectionRef, {
            name: 'User',
            text: inputText,
            sendAt: serverTimestamp(),
        });
            setInputText('');
        }
    }

    return (
        <div>
            <input 
                className='bg-gray-100 shadow-md'
                type="text"
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}

export default InputChat