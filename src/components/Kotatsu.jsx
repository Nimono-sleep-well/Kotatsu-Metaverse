import React from 'react'
const Kotatsu = () => {
  const east = false;
  const west = true; 
  let imageSrc = '';

    if(east&&west){
      imageSrc='public/kotatsu.png';
    }else if(east){
      imageSrc='public/kotatsu.png';
    }else if(west){
      imageSrc='public/kotatsu.png';
    }else{
      imageSrc='public/kotatsu.png';
    }

  return (
    <div>
      <img src={imageSrc} alt="Location" />
    </div>
  )
}

export default Kotatsu
