import React from 'react'

jaider
export const Comp_Img = ({evento, url , description , text, text2,evento2,ids,ids2}) => {
  return (
    <div className='tar' id="tar" onMouseOver={evento} onMouseLeave={evento2}>
        <img src={url} alt={description}  className='products'/>
        <p id={ids} className="despintar" >{text}</p>
        <br></br>
        <p id={ids2} className="despintar">{text2}</p> 
  )
}
