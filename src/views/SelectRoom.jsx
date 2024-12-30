import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, QuerySnapshot, setDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig"
import { React, useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";

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
        const usersDocumentRef = doc(db, 'usersInLobby', props.user);

        getDoc(usersDocumentRef).then((DocumentSnapshot) => {
            if(DocumentSnapshot.exists()){
                userData = DocumentSnapshot.data().name;
                console.log(DocumentSnapshot.data().name);
                console.log(userData);
            } else {
                console.log('[Err]No such document');
            }
        })

        const nextValueOfPeopleInRoom = room.peopleInRoom + 1;
        props.setData(room.id);
        navigate("/Home");
        await setDoc(roomsDocumentRef, {
            name: room.name,
            peopleInRoom: nextValueOfPeopleInRoom,
        });
        await addDoc(collection(db, 'rooms', room.id, 'messages'), {
            name: 'System',
            text: 'Welcome to ' + room.name,
        });
        await addDoc(collection(db, 'rooms', room.id, 'users'), {
            name: userData,
            motion: 0,
            x: 0,
            y: 0,
        });
    }

    return (
        <div>
            <h1>RoomList</h1>
            <h2>{props.user}</h2>
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