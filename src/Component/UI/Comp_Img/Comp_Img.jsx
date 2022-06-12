import React from 'react'

export const Comp_Img = ({url , description , style2}) => {
  return (
    <div>
        <img src={url} alt={description} className='products'/>
    </div>
  )
}
