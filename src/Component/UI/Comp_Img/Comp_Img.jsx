import React from 'react'

export const Comp_Img = ({evento, url , description , text, text2,evento2,ids,ids2,textButton ,ids3}) => {
  return (
    <div className='tar' id="tar" onMouseOver={evento} onMouseLeave={evento2}>
        <img src={url} alt={description}  className='products'/>
        <p id={ids} className="despintar" >{text}</p>
        <br></br>
        <p id={ids2} className="despintar">{text2}</p> 
        <br />
        <button className='despintar' id={ids3}>{textButton}<i className='pi pi-shopping-cart'></i></button>
      </div>
  )
}
