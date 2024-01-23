import React from 'react'

interface Props {
  children: string;
  size: number;
  direction: string;
}

const Subtitle = ({children, size, direction}: Props) => {
  return (
    <p className={"font-" + size + " subtitle" + " fade-" + direction + "-animation"}>{children}</p>
  )
}

export default Subtitle
