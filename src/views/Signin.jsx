import React, { useState, useEffect } from 'react';
import { addDoc, collection, doc, deleteDoc, DocumentSnapshot, getDoc, getDocs, onSnapshot, query, QuerySnapshot, serverTimestamp, setDoc, where, updateDoc, orderBy } from 'firebase/firestore';

const Signin = () => {
    const [userName, setUsername] = useState('');
    const [registeredUserNames, setRegisteredUserNames] = useState([]);

    const registerUserNames = () => {
        if (userName.trim() !== '') {
            setRegisteredUserNames([...registeredUserNames, userName]);
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
            {registeredUserNames.length > 0 && (
                <div>
                    <h2>登録されたユーザー名:</h2>
                    <ul>
                        {registeredUserNames.map((name, index) => (
                            <li key={index}>{name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Signin;
