import React ,{useState}from 'react'
const Kotatsu = () => {
  const [east,setEast]= useState(false);
  const [west,setWest]= useState(true); 
  const [north,setNorth]= useState(false);
  const peopleInKotatsu=1; //使わなかった
  let imageSrc = '';

    if(east&&west){
      imageSrc='/kotatsu.png';
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
        console.log('満席です');
      }
    }

  return (
    <div>
      <img src={imageSrc} alt="Location" onClick={handleClick}/>
    </div>
  )
}

export default Kotatsu
