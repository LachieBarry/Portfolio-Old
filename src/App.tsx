import Button from './components/Button'
import Content from './components/Content'
import Heading from './components/Heading'
import Link from './components/Link'
import ListGroup from './components/ListGroup'
import Title from './components/Title'
import Subtitle from './components/Subtitle'

import Headshot from './assets/Headshot 2.png';
import ComboCounter from './assets/ComboCounter.png';
import Postings from './assets/Postings.png';
import Boxing from './assets/Kickboxing.png';
import Weights from './assets/Weights.png';
import History from './assets/History.png';
import PixelArt from './assets/Rural.webp';
import Gaming from './assets/MinishCap.png';
import LeWagon from './assets/LeWagon.png';
import Monash from './assets/Monash.png';

import EWD1 from './assets/EWD1.png';
import EWD2 from './assets/EWD2.png';

import Email from './assets/email.svg';
import GitHub from './assets/github.svg';
import LinkedIn from './assets/linkedin.svg';




import Resume from './public/LachlanBarryResume.pdf';



const skills = [
  'HTML',
  'CSS',
  'SCSS',
  'Bootstrap',
  'JavaScript',
  'TypeScrript',
  'Stimulus',
  'React',
  'Ruby',
  'Rails',
  'pgSQL',
  'sqLite',
  'MikroTik',
  'Cambium',
  'Ruckus'
];

const linksTop = [
  'Resume',
  'Contact',
  'Links'
]

const linksHighlight = [
  'Experience',
  'Education',
  'Enjoyment'
]

const comboStack = [
  'HTML',
  'SCSS',
  'JS',
  'Rails',
  'pgSQL'
]

const postingsStack = [
  'HTML',
  'SCSS',
  'Bootstrap',
  'StimulusJS',
  'Rails',
  'pgSQL'
]

const ewdDuties = [
  'Assurance',
  'Configuration',
  'Report-Writing',
  'Ticketing',
]

const ewdSkills = [
  'MikroTik',
  'Cambium',
  'Ruckus'
]

const leWagonStack = [
  'HTML',
  'CSS',
  'SCSS',
  'JS',
  'Stimulus',
  'Ruby',
  'Rails',
  'pgSQL',
  'RESTful APIs',
  'Bootstrap',
  'Git',
  'GitHub'
]

const weightPBs = [
  'Deadlift: 1x180kg',
  'Knee-High DL: 3x260kg',
  'Squat: 1x160kg',
  'Bench: 2x90kg',
  'Leg Press: 3x520kg'
]

// <Button onClick={() => console.log("test")}>TEST</Button>
// <Heading size={48} offset={"left"}> TEST </Heading>
// <Link links={links1} size={24}/>

function App() {
  // return <div>< Link links={links} /></div>;
  return <>
    <div id="top"></div>
      <div className="flex align-between">
        <div className="title-div">
          <Title/>
        </div>
        <div>
          <ul>
            <Link target="highlights" size={24} onClick={() => {}}> Contact </Link>
            <Link target="highlights" size={24} onClick={() => {}}> Resume </Link>
            <div className="hide">
              <Link target="highlights" size={24} onClick={() => {}}> Links </Link>
            </div>
          </ul>
        </div>
      </div>
      <br />
      <br />
      <div className="flex align-around">
        <div className="flex-one"></div>
        <div className="flex-five">
          <div id="subtitle">
            <Subtitle size={32} direction="left1"> Aspiring Developer </Subtitle>
            <Subtitle size={32} direction="left2"> Clear Communicator </Subtitle>
            <Subtitle size={32} direction="left3"> Tenacious Problem Solver </Subtitle>
          </div>
          <div id="blurb" className="hide">
            <Content align="center" size={24}>
            Coming from a small country town in South Gippsland, I've had to forge my own path in Melbourne.
            </Content>
            <Content align="center" size={24}>
            I'm a diligent worker who loves to solve new problems with new people.
            </Content>
            <Content align="center" size={24}>
            Moving from Networking, I'm looking for a developer role where I can cut my teeth and flourish as a member of the team.
            </Content>
          </div>
          <div className="flex align-center">
            <div id="read-more-button">
            <Button onClick={() => {
              const seeMoreButton = document.querySelector("#see-more-button");
              const readMoreButton = document.querySelector("#read-more-button");

              const blurb = document.querySelector("#blurb");
              const subtitle = document.querySelector("#subtitle");
              const skillsSpacer = document.querySelector("#skills-spacer");
              const skills = document.querySelector("#skills");


              seeMoreButton?.classList.remove("hide");
              readMoreButton?.classList.add("hide");


              skillsSpacer?.classList.add("hide")
              skills?.classList.remove("hide")
              skills?.classList.add("quick-list-animation")
              subtitle?.classList.add("hide");
              blurb?.classList.remove("hide");
            }}>
              Read More
            </Button>
            </div>
            <div id="see-more-button" className="hide">
              <Button onClick={() => {
                const highlights = document.querySelector("#highlights");
                const contact = document.querySelector("#contact");
                const allLinks = document.querySelectorAll(".link");
                const bottomButton = document.querySelector("#bottom-button");
                const experience = document.querySelector("#experience");



                bottomButton?.classList.remove("hide")
                contact?.classList.add("hide")

                highlights?.classList.remove("hide");
                highlights?.scrollIntoView({behavior: "smooth", block: "start"})

                allLinks[0].classList.remove("link-selected");
                allLinks[1].classList.remove("link-selected");
                allLinks[2].classList.remove("link-selected");
                allLinks[3].classList.remove("fade-up-animation");
                allLinks[3].classList.add("link-selected");
                experience?.classList.remove("hide")
                allLinks[4].classList.remove("link-selected");
                allLinks[5].classList.remove("link-selected");
              }}>
                See More
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-two"></div>
        <div className="flex flex-four">
        <div id="skills-spacer" className="flex-one"></div>
        <div id="skills" className="flex-one hide push-up-112">
          <ListGroup items={skills} heading="Stack" direction="right" colour=""></ListGroup>
        </div>
        <div className="flex-four">
          <img id="headshot" src={Headshot} className="photo fade-in-animation" alt="Me" />
        </div>
        </div>
        <div className="flex-one"></div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div id="contact" className="hide">
        <div className="flex align-center height-64">
          <br />
          <br />
          <Heading size={64} offset="center" colour="yellow" direction="up"> Contact </Heading>
        </div>
        <div className="flex align-center">
        <div className="flex-one"></div>
        <div className="flex-one">
          <Content align="center" size={24}>
            I'm always keen to chat about new oppertunities and to meet new people.
            Feel free to get in touch with me below!
          </Content>
          </div>
          <div className="flex-one"></div>
        </div>
        <div className="flex align-center fade-in-animation">
          <br />
          <a href="mailto: lachlan.j.barry@gmail.com">
            <button className="button"> Reach Out </button>
          </a>
        </div>
        <div className="flex align-center height-64">
          <br />
          <br />
          <br />
          <br />
          <Heading size={64} offset="center" colour="yellow" direction="up"> Links </Heading>
        </div>
        <div className="flex align-center">
          <div className="flex-one"></div>
          <div className="flex-one">
            <Content align="center" size={24}>
              If you're interested in seeing a bit more of what I'm about,
              please check out the links below to peruse my work further.
            </Content>
          </div>
          <div className="flex-one"></div>
        </div>
        <div className="flex align-center">
          <a className="small_icons" href="https://github.com/LachieBarry" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" className="vector" viewBox="0 0 480 512"> <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg>
          </a>
          <a className="small_icons" href="https://dev.to/bigbadbazz" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" className="vector" viewBox="0 0 448 512"><path d="M120.1 208.3c-3.9-2.9-7.8-4.4-11.7-4.4H91v104.5h17.5c3.9 0 7.8-1.5 11.7-4.4 3.9-2.9 5.8-7.3 5.8-13.1v-69.7c0-5.8-2-10.2-5.8-13.1zM404.1 32H43.9C19.7 32 .1 51.6 0 75.8v360.4C.1 460.4 19.7 480 43.9 480h360.2c24.2 0 43.8-19.6 43.9-43.8V75.8c-.1-24.2-19.7-43.8-43.9-43.8zM154.2 291.2c0 18.8-11.6 47.3-48.4 47.3h-46.4V173h47.4c35.4 0 47.4 28.5 47.4 47.3l0 70.9zm100.7-88.7H201.6v38.4h32.6v29.6H201.6v38.4h53.3v29.6h-62.2c-11.2 .3-20.4-8.5-20.7-19.7V193.7c-.3-11.2 8.6-20.4 19.7-20.7h63.2l0 29.5zm103.6 115.3c-13.2 30.8-36.9 24.6-47.4 0l-38.5-144.8h32.6l29.7 113.7 29.6-113.7h32.6l-38.5 144.8z"/></svg>
          </a>
          <a className="small_icons" href="https://www.linkedin.com/in/lachlan-barry-450a12275/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" className="vector"  viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
          </a>
        </div>

        <br />
        <br />
        <div className=" flex align-center page-break"/>
        <br />
        <br />

        <div id="bottom-button" className="flex align-center">
          <Button onClick={() => {
              const top = document.querySelector("#top");
              top?.scrollIntoView({behavior: "smooth", block: "start"})
            }
          }>Page Top</Button>
        </div>
      </div>

      <div id="highlights" className="hide">
        <div className="flex">
          <div className="align-center">
            <Heading size={64} offset="center" colour="" direction="up"> Highlights </Heading>
          </div>
        </div>
        <div className="flex">
          <div className="align-center">
            <ul>
              <Link target="highlights" size={24} onClick={() => {
                console.log("clicked")
              }}> Experience </Link>
              <Link target="highlights" size={24} onClick={() => {
                console.log("clicked")
                }}> Education </Link>
              <Link target="highlights" size={24} onClick={() => {
                console.log("clicked")
                }}> Enjoyment </Link>
            </ul>
          </div>
        </div>
        <div id="experience" className="">
          <div className="flex align-end">
            <div className="flex-two"></div>
            <div className="flex-four"></div>
              <Heading size={48} offset="right" colour="green" direction="right"> Projects </Heading>
            <div className="flex-one"></div>
          </div>
          <br />
          <div className="flex">
            <div className="flex-one"></div>
            <div className="flex-four flex push-down">
              <div className="flex-four">
                <ListGroup items={comboStack} heading="Stack" direction="right" colour="green"></ListGroup>
              </div>
              <div className="flex-four ">
                <img src={ComboCounter} className="photo photo-small fade-in-animation" alt="ComboCounter" />
              </div>
            </div>
            <div className="flex-one"></div>
            <div className="flex-four">
              <div className="flex">
                <Heading size={40} offset="left" colour="green" direction="right"> Combo Counter </Heading>
              </div>
              <Content align="" size={24}>
                A hands-free, programmable interval-timer.
                The front-end and timer utilise vanilla JavaScript.
              </Content>
              <Content align="" size={24}>
                The back-end uses Rails with a pgSQL database.
              </Content>
              <div>
                <a href="https://github.com/LachieBarry/boxing_timer" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" className="vector vector-small" viewBox="0 0 480 512"> <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg>
                </a>
                <a href="https://dev.to/bigbadbazz" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" className="vector vector-small" viewBox="0 0 448 512"><path d="M120.1 208.3c-3.9-2.9-7.8-4.4-11.7-4.4H91v104.5h17.5c3.9 0 7.8-1.5 11.7-4.4 3.9-2.9 5.8-7.3 5.8-13.1v-69.7c0-5.8-2-10.2-5.8-13.1zM404.1 32H43.9C19.7 32 .1 51.6 0 75.8v360.4C.1 460.4 19.7 480 43.9 480h360.2c24.2 0 43.8-19.6 43.9-43.8V75.8c-.1-24.2-19.7-43.8-43.9-43.8zM154.2 291.2c0 18.8-11.6 47.3-48.4 47.3h-46.4V173h47.4c35.4 0 47.4 28.5 47.4 47.3l0 70.9zm100.7-88.7H201.6v38.4h32.6v29.6H201.6v38.4h53.3v29.6h-62.2c-11.2 .3-20.4-8.5-20.7-19.7V193.7c-.3-11.2 8.6-20.4 19.7-20.7h63.2l0 29.5zm103.6 115.3c-13.2 30.8-36.9 24.6-47.4 0l-38.5-144.8h32.6l29.7 113.7 29.6-113.7h32.6l-38.5 144.8z"/></svg>
                </a>
              </div>
            </div>
            <div className="flex-two"></div>
          </div>
          <br />
          <br />
          <br />
          <div className="flex">
            <div className="flex-two"></div>
            <div className="flex-four">
              <div className="flex align-end">
                <Heading size={40} offset="right" colour="green" direction="left"> Postings </Heading>
              </div>
              <Content align="end" size={24}>
              An employment marketplace targeting short-term contracts; written in a two-week sprint.
              The back-end employs Rails along with a pgSQL database and Elasticsearch.
              </Content>
              <Content align="end" size={24}>
              Bootstrap and SCSS were used for styling, and StimulusJS for front-end behaviours and map.

              </Content>
              <div>
              <a href="https://dev.to/bigbadbazz" target="_blank">
               <svg xmlns="http://www.w3.org/2000/svg" className="vector vector-small vector-right" viewBox="0 0 448 512"><path d="M120.1 208.3c-3.9-2.9-7.8-4.4-11.7-4.4H91v104.5h17.5c3.9 0 7.8-1.5 11.7-4.4 3.9-2.9 5.8-7.3 5.8-13.1v-69.7c0-5.8-2-10.2-5.8-13.1zM404.1 32H43.9C19.7 32 .1 51.6 0 75.8v360.4C.1 460.4 19.7 480 43.9 480h360.2c24.2 0 43.8-19.6 43.9-43.8V75.8c-.1-24.2-19.7-43.8-43.9-43.8zM154.2 291.2c0 18.8-11.6 47.3-48.4 47.3h-46.4V173h47.4c35.4 0 47.4 28.5 47.4 47.3l0 70.9zm100.7-88.7H201.6v38.4h32.6v29.6H201.6v38.4h53.3v29.6h-62.2c-11.2 .3-20.4-8.5-20.7-19.7V193.7c-.3-11.2 8.6-20.4 19.7-20.7h63.2l0 29.5zm103.6 115.3c-13.2 30.8-36.9 24.6-47.4 0l-38.5-144.8h32.6l29.7 113.7 29.6-113.7h32.6l-38.5 144.8z"/></svg>
              </a>
              <a href="https://github.com/LachieBarry/Postings" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" className="vector vector-small vector-right" viewBox="0 0 480 512"> <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg>
              </a>
              </div>
            </div>
            <div className="flex-one"></div>
            <div className="flex-four flex push-down-80">
              <div className="flex-four">
                <img src={Postings} className="photo photo-small-rectangle fade-in-animation" alt="Postings" />
              </div>
              <div className="flex-four">
              <ListGroup items={postingsStack} heading="Stack" direction="left" colour="green"></ListGroup>
              </div>
            </div>
            <div className="flex-one"></div>
          </div>
          <br />
          <div className="flex align-end">
            <div className="flex-two"></div>
            <div className="flex-four"></div>
              <Heading size={48} offset="right" colour="green" direction="right"> Positions </Heading>
            <div className="flex-one"></div>
          </div>
          <br />
          <div className="flex">
          <div className="flex-one"></div>
            <div className="flex flex-four push-down-64">
              <div className="flex-four">
                <ListGroup items={ewdSkills} heading="Skills" direction="right" colour="green"></ListGroup>
              </div>
              <div className="flex-four">
                <img src={EWD1} className="photo fade-in-animation" alt="A SkyMuster Plus install from remote NT" />
              </div>
            </div>
            <div className="flex-one"></div>
            <div className="flex-four">
              <div className="flex">
                <Heading size={40} offset="left" colour="green" direction="right"> Easyweb Digital </Heading>
              </div>
              <Content align="" size={24}>
              Easyweb was my first tech job, where I worked my way out of the warehouse to become a Network Engineer on the Assurance Team.
              </Content>
              <Content align="" size={24}>
              I monitored and assured over 2000 sites, alongside configuring spares, tickets, client meetings and reports.
              </Content>
              <Content align="" size={24}>
              Most rewarding was working with nbn to provide WiFi to indigenous and remote communities.
              </Content>
            </div>
            <div className="flex-one"></div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="flex">
            <div className="flex-four"></div>
              <div className="flex flex-four">
                <div className="flex-four">
                  <ListGroup items={ewdDuties} heading="Duties" direction="right" colour="green"></ListGroup>
                </div>
                <div className="flex-four">
                  <img src={EWD2} className="photo photo-small-rectangle fade-in-animation" alt="Two Community Members Enjoying EWD-Supplied WiFi" />
                </div>
              </div>
            <div className="flex-two"></div>
          </div>
        </div>
        <div id="education" className="hide">
        <div className="flex align-end">
            <div className="flex-two"></div>
            <div className="flex-four"></div>
              <Heading size={48} offset="right" colour="orange" direction="right"> Courses </Heading>
            <div className="flex-one"></div>
          </div>
          <br />
          <div className="flex">
            <div className="flex-one"></div>
            <div className="flex-four flex push-down">
              <div className="flex-four push-up-64">
                <ListGroup items={leWagonStack} heading="Stack" direction="right" colour="orange"></ListGroup>
              </div>
              <div className="flex-four">
                <img src={LeWagon} className="photo fade-in-animation" alt="Me with the team at LeWagon" />
              </div>
            </div>
            <div className="flex-one"></div>
            <div className="flex-four">
              <div className="flex">
                <Heading size={40} offset="left" colour="orange" direction="right"> Le Wagon </Heading>
              </div>
                <Subtitle size={32}  direction="right"> Web Development Bootcamp </Subtitle>
                <Content align="" size={24}>
                  I completed a rigorous 10-week intensive, full-time coding bootcamp.
                </Content>
                <Content align="" size={24}>
                  Through the course, I laid the groundwork for my development skills - learning through pair-programming and developing web applications as a team.
                  </Content>
            </div>
            <div className="flex-two"></div>
          </div>
          <br />
          <div className="flex">
            <div className="flex-two"></div>
            <div className="flex-four">
              <div className="flex">
                <Heading size={40} offset="right" colour="orange" direction="left"> Monash University </Heading>
              </div>
              <Subtitle size={32} direction="left"> Bachelor of Arts </Subtitle>
              <Content align="end" size={24}>
              Having a double major in History and Archeology - with a minor in Literature, has endowed me with strong research, analytical and problem-solving skills.
              </Content>
              <Content align="end" size={24}>
              I also achieved a HD average within my major.
              </Content>
            </div>
            <div className="flex-one"></div>
            <div className="flex-three">
              <img src={Monash} className="photo fade-in-animation" alt="Me and the team at a dig for monash" />
            </div>
            <div className="flex-one"></div>
          </div>
          <br />
        </div>
        <div id="enjoyment" className="hide">
        <div className="flex align-end">
            <div className="flex-two"></div>
            <div className="flex-four"></div>
              <Heading size={48} offset="right" colour="purple" direction="right"> Hobbies </Heading>
            <div className="flex-one"></div>
          </div>
          <br />
          <div className="flex">
            <div className="flex-two"></div>
            <div className="flex-four">
              <img src={Boxing} className="photo fade-in-animation" alt="Me kicking the bag" />
            </div>
            <div className="flex-one"></div>
            <div className="flex-five">
              <div className="flex">
                <Heading size={40} offset="left" colour="purple" direction="right"> Boxing </Heading>
              </div>
              <Content align="" size={24}>
                Far be it from a usual tech hobby, I've been practicing martial arts since I was a child - starting with Taekwondo at age 5.              </Content>
              <Content align="" size={24}>
                There's something cathartic about throwing hands; the rhythm, the pacing, the power derived from technique, build to a deafening crescendo of concentration.              </Content>
            </div>
            <div className="flex-two"></div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="flex">
            <div className="flex-two"></div>
            <div className="flex-four">
              <div className="flex align-end">
                <Heading size={40} offset="right" colour="purple" direction="left"> Gaming </Heading>
              </div>
                <Content align="end" size={24}>
                  Currently, I have been on the Old School Runescape grind, sprinkling a bit of Minecraft in for nostalgia.
                </Content>
                <Content align="end" size={24}>
                  Outside of this, I typically play strategy games like Europa Universalis 4 and Rome: Imperator 2, sandbox games or some older GBA RPGs like Buu's Fury and Minish Cap.
                </Content>
            </div>
            <div className="flex-one"></div>
            <div className="flex-four">
              <img src={Gaming} className="photo fade-in-animation" alt="Minish Cap" />
            </div>
            <div className="flex-one"></div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="flex">
            <div className="flex-two"></div>
            <div className="flex-four">
              <img src={History} className="photo fade-in-animation" alt="Coin of Greco-Bactrian King -- Eucratides" />
            </div>
            <div className="flex-one"></div>
            <div className="flex-five">
              <div className="flex">
                <Heading size={40} offset="left" colour="purple" direction="right"> History </Heading>
              </div>
              <Content align="" size={24}>
                Before I was in Tech, I had been in University, studying History and Archaeology.
              </Content>
              <Content align="" size={24}>
                I am absolutely fascinated by history - particularly the Hellenistic Realms left in the wake of Alexander's demise, mid-late Republican Rome, the Roman Empire, Medieval Europe and Sengoku Japan.
              </Content>
            </div>
            <div className="flex-two"></div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="flex">
            <div className="flex-one"></div>
            <div className="flex-four">
              <div className="flex align-end">
                <Heading size={40} offset="right" colour="purple" direction="left"> Pixel Art </Heading>
              </div>
              <Content align="end" size={24}>
              Since I got my first PC at age 8, I've been editing and creating sprites.
              </Content>
              <Content align="end" size={24}>
              I focus on 8 and 16 pixel canvases as I enjoy the challenge of representing form in a limited space.
              </Content>
            </div>
            <div className="flex-one"></div>
            <div className="flex-three">
              <img src={PixelArt} className="photo fade-in-animation" alt="Small Rural Scene" />
            </div>
            <div className="flex-two"></div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="flex">
            <div className="flex-one"></div>
            <div className="flex flex-five push-down-32">
              <div className="flex-four push-up-48">
                <ListGroup items={weightPBs} heading="PBs" direction="right" colour="purple"></ListGroup>
              </div>
              <div className="flex-four">
                <img src={Weights} className="photo fade-in-animation" alt="Incline Leg Press" />
              </div>
            </div>
            <div className="flex-one"></div>
            <div className="flex-four">
              <div className="flex">
                <Heading size={40} offset="left" colour="purple" direction="right"> Weightlifting </Heading>
              </div>
              <Content align="" size={24}>
                While I'm somewhat out of practice now, I used to be an avid lifter.
                Hailing from the home of Commonwealth Games lifter, Louise Letson.
              </Content>
              <Content align="" size={24}>
                The only gym in town had no shortage of talent.
                Here I learnt and developed my lifting technique, later improving while at university.
              </Content>
            </div>
            <div className="flex-two"></div>
          </div>
          <br />
        </div>
        <br />
        <div className=" flex align-center page-break"/>
        <br />
        <br />

        <div id="bottom-button" className="flex align-center">
          <Button onClick={() => {
              const top = document.querySelector("#top");
              top?.scrollIntoView({behavior: "smooth", block: "start"})
            }
          }>Page Top</Button>
        </div>
      </div>






    </>
}

export default App;
