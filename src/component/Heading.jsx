import React from 'react'

const Heading = ({className,firstText,secondText}) => {
  
  return (
    <div>
      <h1 className={className}>{firstText}<span className='textUnderline ml-2.5 cursor-pointer'>{secondText}</span></h1>
 
    </div>
  )
}

export default Heading
