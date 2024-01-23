import React from 'react'

interface Props {
  children: string;
  onClick: () => void
}

const Button = ({children, onClick}: Props) => {
  return (
    <button className='button fade-in-animation' onClick={onClick}>{children}</button>
  )
}

export default Button
