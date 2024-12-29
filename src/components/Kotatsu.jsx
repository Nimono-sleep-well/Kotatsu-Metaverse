import React from 'react'
const Kotatsu = () => {
  const east = false;
  const west = true; 
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

  return (
    <div>
      <img src={imageSrc} alt="Location" />
    </div>
  )
}

export default Kotatsu
