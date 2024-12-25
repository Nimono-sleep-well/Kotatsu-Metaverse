import React, { useState, useEffect } from 'react'

import { format } from 'date-fns';

import { db } from '../../firebaseConfig'
import { addDoc, collection, doc, deleteDoc, DocumentSnapshot, getDoc, getDocs, onSnapshot, query, QuerySnapshot, serverTimestamp, setDoc, where, updateDoc, orderBy } from 'firebase/firestore'

const ChatLog = ({ roomID }) => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {

        
        const messageCollectionRef = collection(db, 'rooms', roomID, 'messages');
        const q = query(messageCollectionRef, orderBy('sendAt', 'desc'));
        const unsub = onSnapshot(q, (QuerySnapshot) => {
            setMessages(
                QuerySnapshot.docs.map(
                    (doc) => ({ ...doc.data({ serverTimestamps: "estimate" }), id: doc.id})
                )
            )
        });
        return unsub;

        /*
        const messageDocumentRef = doc(db, 'rooms', roomID);
        const unsub = onSnapshot(messageDocumentRef, (DocumentSnapshot) => {
            console.log(DocumentSnapshot.data());
        });
        return unsub;
        */

    }, []);
    
    return (
        <div>
            {messages.map((message) => (
                <div key={message.id}>
                    <span>{message.name}</span>
                    <span> : </span>
                    <span>{message.text}</span>
                    <span> : </span>
                    <span>{format(message.sendAt.toDate(), 'hh:mm:ss')}</span>
                </div>
            ))}
        </div>
    )
}

export default ChatLog