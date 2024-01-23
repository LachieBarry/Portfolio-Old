import React from 'react'

interface Props {
  children: string;
  size: number;
  offset: string;
  colour: string;
  direction: string;
  // concatinate class and size ("font-" + 48) ("offset-" + 16)
  // specify classes later to make it clean
}

const Heading = ({children, size, offset, colour, direction}: Props ) => {
  return (
    <>
      <p className={"heading-" + " heading-" + offset + " font-" + size + " heading-" + colour + " fade-" + direction + "-animation"}>
        {children}
      </p>
    </>
  )
}

export default Heading
