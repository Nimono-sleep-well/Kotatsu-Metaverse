import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, QuerySnapshot, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig"
import { React, useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";

import RoomButton from "../components/RoomButton";

const SelectRoom = (props) => {

    const [rooms, setRooms] = useState([]);

    let userData = '';

    const navigate = useNavigate();

    useEffect(() => {

        const roomsCollectionRef = collection(db, 'rooms');
        const q = query(roomsCollectionRef, orderBy('peopleInRoom', 'desc'));
        const unsub = onSnapshot(q, (QuerySnapshot) => {
            setRooms(
                QuerySnapshot.docs.map(
                    (doc) => ({ ...doc.data(), id: doc.id })
                )
            )
        });
        return unsub;
    }, []);

    const createRoom = async (event) => {
        event.preventDefault();
        const { name } = event.target.elements;
        const roomsCollectionRef = collection(db, 'rooms');

        await addDoc(roomsCollectionRef, {
            name: name.value,
            peopleInRoom: 0,
            createdAt: serverTimestamp(),
        });
    };

    return (
        <div className='font-body flex w-screen h-screen bg-amber-100 items-center justify-center'>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(theme(spacing.60),1fr))] p-10 w-11/12 h-5/6 bg-white">
                {rooms.map((room) => (
                    <RoomButton key={room.id} user={props.user} room={room} setData={props.setData} />
                ))}
                <form onSubmit={createRoom}>
                    <span>
                        <input name="name" type="text" placeholder="Roomの名前" />
                    </span>
                    <span>
                        <button>Create</button>
                    </span>
                </form>
                <button className="flex w-32 h-32 font-Koruri text-white text-[96px] font-normal bg-blue-800 absolute rounded-full bottom-36 right-36 items-center justify-center transition duration-200 ease-in-out transform hover:scale-110">+</button>
            </div>
        </div>
    )
}

export default SelectRoom