import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, QuerySnapshot, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig"
import { React, useState, useEffect } from "react"

import RoomButton from "../components/RoomButton";
import CreateRoom from "../components/CreateRoom";

const SelectRoom = (props) => {

    const [currentUserName, setCurrentUserName] = useState('');

    const [rooms, setRooms] = useState([]);

    const [isShowModal, setIsShowModal] = useState(false);

    useEffect(() => {

        const usersDocumentRef = doc(db, 'usersInLobby', props.user);
        getDoc(usersDocumentRef).then((doc) => {
            if (doc.exists()) {
                setCurrentUserName(doc.data().name);
            } else {
                console.log('No such document!');
            }
        });

        const roomsCollectionRef = collection(db, 'rooms');
        const q = query(roomsCollectionRef, orderBy('peopleInRoom', 'desc'));
        const unsub = onSnapshot(q, (QuerySnapshot) => {
            setRooms(
                QuerySnapshot.docs.map(
                    (doc) => ({ ...doc.data({ serverTimestamps: "estimate" }), id: doc.id })
                )
            )
        });
        return unsub;
    }, []);

    return (
        <div className='font-body flex w-screen h-screen bg-amber-100 items-center justify-center'>
            <div className="flex w-16 h-16 absolute top-5 right-80 items-center justify-center">
                <img className="pr-3" src="/user_logo.svg" alt="room" />
                <p className="text-black text-5xl font-extrabold">{currentUserName}</p>
            </div>
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(theme(spacing.60),1fr))] p-10 w-11/12 h-5/6 bg-white">
                {rooms.map((room) => (
                    <RoomButton key={room.id} user={props.user} room={room} setData={props.setData} />
                ))}
                <button onClick={() => setIsShowModal(true)} className="flex w-32 h-32 font-Koruri text-white text-[96px] font-normal bg-blue-800 absolute rounded-full bottom-36 right-36 items-center justify-center transition duration-200 ease-in-out transform hover:scale-110">+</button>
                {isShowModal && (
                    <CreateRoom user={props.user} setIsShowModal={setIsShowModal}/>
                )}
            </div>
        </div>
    )
}

export default SelectRoom