// import { Fragment } from "react";
// or just use <> </> instead of <Fragment> </Fragment>, no need to import either
// items.map(item => <li key={item}>{item}</li>) -- how to convert from array to li in ts
// to use this in component, wrap in {}
// if using conditions in component, use {} and ? : ternarary syntax
// if using ? : but the second value === null, use condition && outcome in similar style
// true && "Deez" === "Deez", false && "Deez" === false
// no event-listeners for click, use property, onClick=={} instead. Use anonymous arrow function instead
// can add an event to onClick: onClick={(event) => console.log(event)}
// lots of useful info like target, where was clicked, etc.
// if complex, use const handleEventType (i.e., handleClick) = block.type.
// Since we're using TS, we need to specify type, if you hover over the event while it's in the function, it should tell you
// i.e., event w/ onClick === React.MouseEvent, this the block would need to specify this type
// also need to import this type (type annotation): import { MouseEvent } from "react";
// then pass (not call!) the function in the onClick property, onClick={handleClick}
// the compiler knows to call it when we get to that point
// "useState" imports itself AND brings state-related variables into scope of the arrow function below
// useState === hook
// each compnent has its own state
// prop/property -- input for code
// {items: [], heading: string}
// use ts interface: interface NameProps {
//   items: string[];
//   heading: string;
// }

import { useState } from "react";

// MANAGING STATE
// state === mutable

// props are immutable -- read-only
interface Props {
  items: string[];
  heading: string;
  direction: string;
  colour: string;
}

function ListGroup({items, heading, direction, colour}: Props) {
  // class="" >> className=""
  // if multi-line, return (multi-line)
  // seperate concerns, one element per component OR wrap in a div OR use fragments <Fragment>


  // selecting -1 === nothing selected upon initialisation
  // no need declare let here; deconstruct array as below
  // let selectedIndex = -1;

  // const [name, setName] = useState(''); SYNTAX

  return (
    <>
      <p className={ `fade-${direction}-list-animation list-heading-${direction} fade-list-heading font-32 heading-${colour} ${heading}` }> {heading} </p>
      <ul>
        {items.map((item) => (
          <li
          className={ `fade-${direction}-list-animation font-24 li-index-${direction}` }
          key={item}
          >
          {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
