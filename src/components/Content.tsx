import React from 'react'

interface Props {
  children: string;
  size: number;
  align: string;
}

const Content = ({children, size, align}: Props) => {
  return (
    <p className={"font-" + size + " fade-in-animation " + align}>{children}</p>
  )
}

export default Content
