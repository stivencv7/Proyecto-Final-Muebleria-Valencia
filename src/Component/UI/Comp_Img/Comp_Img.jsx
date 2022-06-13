import React from 'react'

export const Comp_Img = ({url , description , text}) => {
  return (
    <div>
        <img src={url} alt={description} className='products'/>
        <p>{text}</p>
    </div>
  )
}
