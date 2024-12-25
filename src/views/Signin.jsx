import React, { useState } from 'react';

const Signin = ({ name, age }) => {
    const [userName, setUsername] = useState('');
    const [registeredUserNames, setRegisteredUserNames] = useState([]);

    const registerUserNames = () => {
        if (userName.trim() !== '') {
            setRegisteredUserNames([...registeredUserNames, userName]);
            setUsername(''); // 入力欄をクリア
        }
    };

    // Enterキーで登録する処理
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            registerUserNames();
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="ユーザー名"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={handleKeyDown} 
            />
            <button style={{ border: '1px solid black' }} onClick={registerUserNames}>登録</button> {/* ボタンで登録 */}
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
