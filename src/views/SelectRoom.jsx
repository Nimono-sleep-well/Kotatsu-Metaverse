import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, QuerySnapshot, setDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig"
import { React, useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";

const SelectRoom = () => {

    const [rooms, setRooms] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        const roomsCollectionRef = collection(db, 'rooms');
        const unsub = onSnapshot(roomsCollectionRef, (QuerySnapshot) => {
            setRooms(
                QuerySnapshot.docs.map(
                    (doc) => ({ ...doc.data(), id: doc.id})
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
        });
    };

    const deleteRoom = async (id) => {
        const roomsDocumentRef = doc(db, 'rooms', id);
        await deleteDoc(roomsDocumentRef);
    }

    const transitionRoom = async (room) => {
        const roomsDocumentRef = doc(db, 'rooms', room.id);
        const nextValueOfPeopleInRoom = room.peopleInRoom + 1;
        navigate("/Home");
        await setDoc(roomsDocumentRef, {
            name: room.name,
            peopleInRoom: nextValueOfPeopleInRoom,
        })
    }

    return (
        <div>
            <h1>RoomList</h1>
            {rooms.map((room) => (
                <div key={room.id}>
                    <span>
                        <button onClick={
                            () => {
                                transitionRoom(room)}
                            }>
                            <span>{room.name}</span>
                            <span> | </span>
                            <span>{room.peopleInRoom}</span>
                        </button>
                    </span>
                    <span>
                        <span> | </span>
                        <button onClick={() => deleteRoom(room.id)}>Delete</button>
                    </span>
                </div>
            ))}
            <form onSubmit={createRoom}>
                <span>
                    <input name="name" type="text" placeholder="Roomの名前" />
                </span>
                <span>
                    <button>Create</button>
                </span>
            </form>
        </div>
    )
}

export default SelectRoom