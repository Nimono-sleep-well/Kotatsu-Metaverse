import React, { useState, useEffect } from 'react';
import { db } from '../../firebaseConfig';
import { addDoc, collection, doc, deleteDoc, DocumentSnapshot, getDoc, getDocs, onSnapshot, query, QuerySnapshot, serverTimestamp, setDoc, where, updateDoc, orderBy } from 'firebase/firestore';

const Signin = (props) => {
    const [userName, setUsername] = useState('');

    const registerUserNames = () => {
        if (userName.trim() !== '') {

            const usersCollectionRef = collection(db, 'usersInLobby');
            const documentRef = addDoc(usersCollectionRef, {
                name: userName,
            })
            .then(docRef => {
                props.setUser(docRef.id);
            })
            setUsername(''); // 入力欄をクリア
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            registerUserNames();
        }
    };

    return (
        <div>
            <h1>Signin</h1>
            <input
                type="text"
                placeholder="ユーザー名"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={handleKeyDown} 
            />
            <button style={{ border: '1px solid black' }} onClick={registerUserNames}>登録</button>
        </div>
    );
};

export default Signin;
