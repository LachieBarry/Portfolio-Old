import React from 'react'
import { useState, useEffect } from "react";

interface Props {
  children: string;
  size: number;
  target: string;
  onClick: () => void
}

const Link = ({children, size, target}: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);


  const loadDataOnlyOnce = () => {
    const allLinks = document.querySelectorAll(".link");
    allLinks[0].classList.add(`fade-right-animation`);
    allLinks[1].classList.add(`fade-right-animation`);
    allLinks[2].classList.add(`fade-right-animation`);
    allLinks[3].classList.add(`fade-up-animation`);
    allLinks[4].classList.add(`fade-up-animation`);
    allLinks[5].classList.add(`fade-up-animation`);

    // (selectedIndex === -1) ? allLinks[3].classList.add("link-selected") : allLinks[3].classList.remove("link-selected") ;

  };

  const changeColours = () => {
    const allLinks = document.querySelectorAll(".link");

    allLinks[0].classList.add("heading-grey-yellow");
    allLinks[1].classList.add("heading-grey-blue");
    allLinks[2].classList.add("heading-yellow");

    allLinks[3].classList.add("heading-green");
    allLinks[4].classList.add("heading-orange");
    allLinks[5].classList.add("heading-purple");

  }


  const scrollTo = (target: string) => {
    const scrollTarget = document.querySelector(`#${target}`);
    scrollTarget?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  // const hideOthers = (index: number) => {
  //   // find the link-selected THEN hide the other divs based on ID

  //   const experience = document.querySelector("#experience");
  //   const education = document.querySelector("#education");
  //   const enjoyment = document.querySelector("#enjoyment");

  //   const bottomButton = document.querySelector("#bottom-button");

  //   if (index === 0) {
  //     bottomButton.classList.remove("hide")
  //     experience.classList.remove("hide")
  //     education.classList.add("hide")
  //     enjoyment.classList.add("hide")
  //   } else if (index === 1) {
  //     bottomButton.classList.remove("hide")
  //     experience.classList.add("hide")
  //     education.classList.remove("hide")
  //     enjoyment.classList.add("hide")
  //   } else if (index === 2) {
  //     bottomButton.classList.remove("hide")
  //     experience.classList.add("hide")
  //     education.classList.add("hide")
  //     enjoyment.classList.remove("hide")
  //   }
  // }

  const downloadPDFFile = () => {

    const pdfUrl = "./public/LachlanBarryResume.pdf";
    const link = document.createElement("a");

    link.href = pdfUrl;
    link.download = "LachlanBarryResume.pdf"; // specify the filename

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    // Update the document title using the browser API
    // + " fade-" + direction + "-animation"
    loadDataOnlyOnce(); // this will fire only on first render
    changeColours();
    }, [loadDataOnlyOnce]);

    const selectLink = (event: PointerEvent) => {

      event.target?.classList.add("link-selected");

    }

  return (
    <li
      key={children}
      className={"link" + " font-" + size }
      onClick={(event) => {
        const allLinks = document.querySelectorAll(".link");

        const highlights = document.querySelector("#highlights");
        const contact = document.querySelector("#contact");

        const experience = document.querySelector("#experience");
        const education = document.querySelector("#education");
        const enjoyment = document.querySelector("#enjoyment");


        allLinks[0].classList.remove("link-selected");
        allLinks[1].classList.remove("link-selected");
        allLinks[2].classList.remove("link-selected");
        allLinks[3].classList.remove("link-selected");
        allLinks[4].classList.remove("link-selected");
        allLinks[5].classList.remove("link-selected");

        selectLink(event);
        if (allLinks[0] === event.target) {
          highlights?.classList.add("hide");
          contact?.classList.remove("hide");
          experience?.classList.add("hide")
          education?.classList.add("hide")
          enjoyment?.classList.add("hide")
          scrollTo("contact")

        } else if (allLinks[1] === event.target) {
          downloadPDFFile()
          setTimeout(() => {
            allLinks[1].classList.remove("link-selected");
          }, 1000);
        } else if (allLinks[3] === event.target) {

          experience?.classList.remove("hide")
          education?.classList.add("hide")
          enjoyment?.classList.add("hide")

        } else if (allLinks[4] === event.target) {

          experience?.classList.add("hide")
          education?.classList.remove("hide")
          enjoyment?.classList.add("hide")

        } else if (allLinks[5] === event.target) {

          experience?.classList.add("hide")
          education?.classList.add("hide")
          enjoyment?.classList.remove("hide")
        }
        changeColours();
      }}
    >
      {children}
    </li>
    // <ul>
    //   {links.map((children, index) => (
    //     <li
    //     className={ selectedIndex === index ? "link link-selected" + " font-" + size : "link" + " font-" + size }
    //     key={children}
    //     onClick={() => {
    //       setSelectedIndex(index);
    //       // changeColours();
    //       // hideOthers(index);
    //       scrollToHighlights(target);
    //     }}
    //     >
    //     {children}
    //     </li>
    //   ))}
    // </ul>
    // class link-selected
    // === transformY -16
  )
}

export default Link
