import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, QuerySnapshot } from "firebase/firestore";
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

    const createRoom = async (event) => {
        event.preventDefault();
        const { name } = event.target.elements;
        const roomsCollectionRef = collection(db, 'rooms');
        const documentRef = await addDoc(roomsCollectionRef, {
            name: name.value,
            peopleInRoom: 0,
        });
    };

    const deleteRoom = async (id) => {
        const roomsDocumentRef = doc(db, 'rooms', id);
        await deleteDoc(roomsDocumentRef);
    }

    return (
        <div>
            <h1>RoomList</h1>
            {rooms.map((room) => (
                <div key={room.id}>
                    <span>
                        <button className="bg-red-50">
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