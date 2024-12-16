import { collection, getDocs, onSnapshot, orderBy, query, QuerySnapshot } from "firebase/firestore";
import { db } from "../../firebaseConfig"
import { React, useState, useEffect } from "react"

const SelectRoom = () => {

    const [rooms, setRooms] = useState([]);

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

    return (
        <div>
            <h1>RoomList</h1>
            {rooms.map((room) => (
                <div key={room.id}>
                    <span>{room.id}</span>
                    <span> | </span>
                    <span>{room.peopleInRoom}</span>
                </div>
            ))}
        </div>
    )
}

export default SelectRoom