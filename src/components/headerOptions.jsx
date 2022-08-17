import React from 'react'
import "../sass/components/headerOptions.scss";

function HeaderOptions({ 
   Icon,
   title,
   titleVisibility,
   onClick,
   img,
   colorName,
   marginTop,}) {

  function stringToHslColor(str, s, l) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    var h = hash % 360;
    return 'hsl('+h+', '+s+'%, '+l+'%)';
  }  

  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className='headerOption__icon'/>}

      {img && <img src={img} className="headerOption__img" alt="" ></img>}
      
      {colorName && <div className='headerOption__color' style={{
        backgroundColor:stringToHslColor(colorName, 50, 50)
      }}
      ><p style={{marginTop: marginTop}}>{colorName.charAt(0).toUpperCase()}</p></div>}

      <h4 style={{ display: titleVisibility}} className='headerOption__title'>{title}</h4>

    </div>
  )
}

export default HeaderOptions