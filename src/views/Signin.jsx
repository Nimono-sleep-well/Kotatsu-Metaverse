import React, { useState } from 'react';
import { db } from '../../firebaseConfig';
import "../index.css";
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Signin = (props) => {
    const [userName, setUsername] = useState('');

    const navigate = useNavigate();

    const registerUserNames = () => {
        if (userName.trim() !== '') {

            const usersCollectionRef = collection(db, 'usersInLobby');
            addDoc(usersCollectionRef, {
                name: userName,
            })
            .then(docRef => {
                props.setUser(docRef.id);
                navigate('/SelectRoom');
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
        <div className='font-Koruri flex w-screen h-screen bg-[#847f68] items-center justify-center'>
            <div className='flex w-11/12 h-5/6 bg-[#858585] items-center justify-center'>
                    <div className='text-center'>
                        <h1 className='text-center text-white text-7xl leading-loose font-extrabold'>こたつメタバースへようこそ！</h1>
                        <h1 className='text-center text-white text-7xl leading-loose font-extrabold'>あなたの名前を入力してください</h1>
                        <input
                            className='text-center w-11/12 h-24 mt-4 p-2 text-5xl font-bold rounded-lg transition duration-500 ease-in-out transform hover:scale-105'
                            type="text"
                            value={userName}
                            onChange={(e) => setUsername(e.target.value)}
                            onKeyDown={handleKeyDown} 
                        />
                    </div>
            </div>
        </div>
    );
};

export default Signin;
