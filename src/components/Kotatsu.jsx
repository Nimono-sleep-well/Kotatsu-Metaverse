import React ,{useState}from 'react'
const Kotatsu = () => {
  const [east,setEast]= useState(false);
  const [west,setWest]= useState(true); 
  const [north,setNorth]= useState(false);
  const peopleInKotatsu=1;
  let imageSrc = '';

    if(east&&west){
      imageSrc='/kotatu Free image.jpg';
    }else if(east){
      imageSrc='/kotatsu.png';
    }else if(west){
      imageSrc='/kotatsu.png';
    }else{
      imageSrc='/kotatsu.png';
    }

    const handleClick = () => {
      if (!east) {
        setEast(true);
      } else if (!west) {
        setWest(true);
      } else if (!north) {
        setNorth(true);
      } else {
        return(
          <div>
            <p>こたつに３人いるので入れません</p>
          </div>
        )
      }
    }

  return (
    <div>
      <img src={imageSrc} alt="Location" onClick={handleClick}/>
      <p>現在のこたつの状態:</p>
      <ul>
        <li>East: {east ? 'Occupied' : 'Empty'}</li>
        <li>West: {west ? 'Occupied' : 'Empty'}</li>
        <li>North: {north ? 'Occupied' : 'Empty'}</li>
      </ul>
    </div>
  )
}

export default Kotatsu
