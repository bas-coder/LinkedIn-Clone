import React from 'react'

function inputOptions({ Icon, title, color}) {
  return (
    <div className='inputOptions'> 
        <Icon style={{color:color}} />
        <h4 className='inputOptions--title'>{title}</h4>
    </div>
  )
}

export default inputOptions
