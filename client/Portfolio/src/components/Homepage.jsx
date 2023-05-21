import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import image1 from "./images/FireShot Capture 005 - Vite + React - localhost.png"
import image2 from "./images/FireShot Capture 001 - Vite + React - localhost.png"
import image3 from "./images/BLOG.png"
import image4 from "./images/images (1).jpg"
import image2b from "./images/recipeApp-b.png"
import image2c from "./images/RecipeApp-c.png"
import image2d from "./images/RecipeApp-d.png"
import image3b from "./images/FireShot Capture 003 - Vite + React - localhost.png"
import image3c from "./images/BlogSignin.png"
import image3d from "./images/BlogAdd.png"
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const Homepage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
  
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    const values = ["Experienced MERN Stack Developer",
"Proficient in JavaScript, React, Node.js, and Express.js",
"Experience with backend development and RESTful APIs",
"Skilled in working with databases like MongoDB",];
let currentIndex = 0;

// Function to fade in and out
function fadeAnimation() {
  const textElement = document.getElementById("text");
  const currentValue = values[currentIndex];

  // Fade In
  textElement.textContent = currentValue;
  textElement.style.opacity = 1;

  // Delay before fading out
  setTimeout(() => {
    // Fade Out
    textElement.style.opacity = 0;

    // Delay before fading in with new value
    setTimeout(() => {
      currentIndex++; // Move to the next element
      
      if (currentIndex === values.length) {
        // Check if reached the end of the array
        currentIndex = 0; // Start over
      }

      fadeAnimation(); // Recursively call the function for the next element
    }, 1000); // Wait for 1 second before fading in with new value
  }, 3000); // Display each value for 3 seconds
}

// Start the fade animation
fadeAnimation();
  }, []);
  
  
  const [small, setsmall] = useState(false);
  const [arrow, setarrow] = useState(
    "50px"
    );
    const [styleImage1, setstyleImage1] = useState({"height":"780px","width":"80%"});
    const [styleImage2, setstyleImage2] = useState({"height" : "500px","width":"80%"});
    const [styleImage3, setstyleImage3] = useState({"height" : "auto","width":"80%"});
    useEffect(() => {
      if(window.innerWidth<500){
        setsmall(true)
        setstyleImage1({"height":"200",width:"100%"})
        setstyleImage2({"height":"250",width:"100%"})
        setstyleImage3({"height":"400",width:"100%"})
        setarrow("30px")
      }
      else{
        setsmall(false)
        setstyleImage1({"height":"780px","width":"80%"})
        setstyleImage2({"height" : "500px","width":"80%"})
        setstyleImage3({"height" : "auto","width":"80%"})
      }
    }, [windowWidth]);
    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [desc, setdesc] = useState();
    const send = async () => {
      try {
        const response = await fetch('/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({ email, name, desc }),
      });

      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  const [indexB, setindexB] = useState(0);
  const [index, setindex] = useState(0);
  const RecipeForward = ()=>{
    if(index == 3){
      setindex(0)
    }
    else{
      
      setindex(e=>e+1);
    }
  }
  const RecipeBack = ()=>{
    if(index == 0){
      setindex(2)
    }
    else{
      setindex(e=>e-1)
    }
  }
  const BlogForward = ()=>{
    if(indexB == 2){
      setindexB(0)
    }
    else{

      setindexB(e=>e+1);
    }
  }
  const BlogBack = ()=>{
    if(indexB == 0){
      setindexB(2)
    }
    else{
      setindexB(e=>e-1)
    }
  }
  const handlers = useSwipeable({
    onSwipedLeft: () =>{ index == 3 ? setindex(0) :    setindex(prevIndex => prevIndex + 1)},
    onSwipedRight: () => { index == 0  ? setinde(2)  :  setindex(prevIndex => prevIndex - 1)},
  });
  const handlers2 = useSwipeable({
    onSwipedLeft: () =>{ indexB == 2 ? setindexB(0) :    setindexB(prevIndex => prevIndex + 1)},
    onSwipedRight: () => { indexB == 0  ? setindexB(2)  :  setindexB(prevIndex => prevIndex - 1)},
  });
  const [RecipeImages, setRecipeImage] = useState([{
    "img":image2
  },
{
  "img":image2b
},
{
  "img":image2c
},
{
  "img":image2d
},


]);
  const [BlogApp, setBlogApp] = useState([{
    "img":image3
  },
{
  "img":image3b
},
{
  "img":image3d
},

]);
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
        initclassNameName: "aos-init", // className applied after initialization
        animatedclassNameName: "aos-animate", // className applied on animation
        useclassNameNames: false, // if true, will add content of `data-aos` as classNamees on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 200, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: "ease", // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
      });
    return (
        <div>
             <div>
    <div id="container">
      <div className="Navbar">
        <div className="socials">
          <a style={{textDecoration:"none"}} target='__blank' href='https://github.com/Icecubesaad'>
          <div className="gihub">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.40-3.58-8-8-8z"
              />
            </svg>
          </div>
          </a>
          <div className="linkidn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
              />
            </svg>
          </div>
        </div>
        <div className="gib">
          <div className="email">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="icecube">
        <div className="containerGrid">
        SAAD-UR-REHMAN
        <div className="text-container-grid">
          <div id="text" className="fade-in-out"></div>
        </div>
        <ul>
          <a href="#about"><li className="button">ABOUT</li></a>
      <a href="#skills"><li className="button">SKILLS</li></a>
      <a href="#project"><li className="button">PROJECTS</li></a>
      <a href="#contact"><li className="button">CONTACT</li></a>

        </ul>
      </div>
    </div>
    </div>
    <div className="about" style={{fontFamily:"Inter"}} id="about">
      <h1>about</h1>
      <div className="main">
        <div className="info" data-aos="fade-in">
          <h1 >Hi there</h1>
          <p>
    I'm <span style={{color:"orange"}}>Saad</span>, an 18-year-old MERN stack developer. Since May 2022, I've been passionately learning and building my skills in web development. With a focus on the MERN stack <span style={{color:"orange"}}>(MongoDB, Express.js, React, and Node.js)</span>, I specialize in creating dynamic and user-friendly web applications. I have a solid foundation in React.js for front-end development and expertise in building <span style={{color:"orange"}}>RESTful APIs</span> using Node.js and Express.js on the back-end. I'm committed to clean code, maintainable architecture, and staying up to date with the latest industry trends. I'm eager to contribute my skills to meaningful projects and collaborate with fellow developers to create impactful applications. Let's connect and explore the world of MERN stack development together!
</p>
        </div>
        <div className="picture" data-aos="fade-in">
          <img
            src={image4}
            height="300px"
            width="200px"
            alt=""
          />
        </div>
      </div>
    </div>
    <div className="skills" id="skills" data-aos="fade-in">
      <h1>Skills</h1>
      <div className="main-skills" data-aos="fade-in">
        <div className="main-skills-lang">
          <div className="html">
            <svg
              fill="none"
              height="70px"
              width="70px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 124 141.53199999999998"
            >
              <path
                d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
                fill="#e34f26"
              />
              <path
                d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
                fill="#ef652a"
              />
              <path
                d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
                fill="#fff"
              />
            </svg>
          </div>
          <div className="css">
            <svg
              fill="none"
              height="70px"
              width="70px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 124 141.53"
            >
              <path
                d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z"
                fill="#1b73ba"
              />
              <path
                d="M62.468 129.275V12.085l51.064.17-9.106 104.85z"
                fill="#1c88c7"
              />
              <path
                d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z"
                fill="#fff"
              />
            </svg>
          </div>
          <div className="js">
            <svg
              fill="none"
              height="70px"
              width="70px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 124 141.53199999999998"
            >
              <path
                d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
                fill="#e9ca32"
              />
              <path
                d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
                fill="#ffde25"
              />
              <g fill="#fff">
                <path
                  d="M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5zM67.127 26H104.5L102 40.95H81.394v24.533H102L99.5 115l-32.373 7.5V107L89 99.5 90.263 79l-23.136 3.35z"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="main-skills-fw">
          <div className="react">
            <svg
              height="70px"
              viewBox="175.7 78 490.6 436.9"
              width="70px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#61dafb">
                <path
                  d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"
                />
                <circle cx="420.9" cy="296.5" r="45.7" />
              </g>
            </svg>
          </div>
          <div className="express">
            <svg
              width="80px"
              height="80px"
              viewBox="0 -181.5 512 512"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="xMidYMid"
              fill="#000000"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                <g>
                  <path
                    d="M3.33224862,115.629027 L3.33224862,58.6475756 L74.4757566,58.6475756 L74.4757566,55.315327 L3.33224862,55.315327 L3.33224862,3.33224862 L78.9742922,3.33224862 L78.9742922,0 L-3.55271368e-15,0 L-3.55271368e-15,118.961276 L79.640742,118.961276 L79.640742,115.629027 L3.33224862,115.629027 L3.33224862,115.629027 Z M143.786528,33.3224862 L114.296128,72.1431826 L85.472177,33.3224862 L81.1402538,33.3224862 L112.296778,74.642369 L78.14123,118.961276 L82.1399284,118.961276 L114.296128,77.1415554 L146.618939,118.961276 L150.78425,118.961276 L116.462089,74.642369 L147.785226,33.3224862 L143.786528,33.3224862 L143.786528,33.3224862 Z M160.780996,148.285063 L160.780996,94.9690856 L161.114221,94.9690856 C163.11358,102.744371 167.056701,108.992275 172.943703,113.712984 C178.830705,118.433693 186.32819,120.794012 195.436381,120.794012 C201.323384,120.794012 206.543854,119.599969 211.09795,117.211845 C215.652046,114.823722 219.456324,111.574812 222.510902,107.465018 C225.565478,103.355224 227.898028,98.5790488 229.508624,93.1363488 C231.119218,87.6936488 231.924504,81.973346 231.924504,75.9752684 C231.924504,69.532889 231.09145,63.5904384 229.425318,58.1477384 C227.759184,52.7050384 225.343328,47.9844 222.177676,43.9856818 C219.012024,39.9869634 215.179976,36.8768958 210.681418,34.6553856 C206.18286,32.4338754 201.101232,31.323137 195.436381,31.323137 C191.104437,31.323137 187.07801,31.9618116 183.35698,33.23918 C179.635951,34.5165484 176.331504,36.3214982 173.443541,38.654084 C170.555577,40.9866696 168.056416,43.7357472 165.945981,46.9013992 C163.835546,50.0670512 162.224976,53.5381088 161.114221,57.3146762 L160.780996,57.3146762 L160.780996,33.3224862 L157.448747,33.3224862 L157.448747,148.285063 L160.780996,148.285063 L160.780996,148.285063 Z M195.436381,117.628376 C184.995284,117.628376 176.609208,114.046245 170.277904,106.881874 C163.9466,99.717504 160.780996,89.415405 160.780996,75.9752684 C160.780996,70.421493 161.558513,65.1454854 163.11357,60.1470876 C164.668627,55.1486896 166.917872,50.7612728 169.861373,46.9847054 C172.804874,43.2081382 176.442543,40.2091444 180.774487,37.9876342 C185.106432,35.766124 189.993681,34.6553856 195.436381,34.6553856 C200.990156,34.6553856 205.849638,35.766124 210.01497,37.9876342 C214.1803,40.2091444 217.62359,43.2359066 220.34494,47.0680118 C223.06629,50.9001168 225.121156,55.2875336 226.5096,60.2303938 C227.898044,65.173254 228.592256,70.421493 228.592256,75.9752684 C228.592256,80.9736664 227.95358,85.9442208 226.676212,90.887081 C225.398844,95.8299412 223.427284,100.272895 220.76147,104.216075 C218.095658,108.159256 214.680138,111.380398 210.514806,113.879596 C206.349474,116.378795 201.323384,117.628376 195.436381,117.628376 L195.436381,117.628376 L195.436381,117.628376 Z M250.251872,118.961276 L250.251872,70.4770582 C250.251872,65.8118868 250.918314,61.2578592 252.25122,56.814839 C253.584126,52.3718186 255.638992,48.4564656 258.41588,45.0686626 C261.192768,41.6808596 264.719362,39.0150872 268.99577,37.0712658 C273.272176,35.1274444 278.353806,34.322159 284.240808,34.6553856 L284.240808,31.323137 C279.131334,31.2120614 274.660612,31.7674308 270.828506,32.9892614 C266.996402,34.211092 263.691954,35.8771996 260.915066,37.9876342 C258.138178,40.098069 255.916702,42.569462 254.25057,45.4018874 C252.584436,48.2343128 251.362624,51.2610752 250.585096,54.4822648 L250.251872,54.4822648 L250.251872,33.3224862 L246.919622,33.3224862 L246.919622,118.961276 L250.251872,118.961276 L250.251872,118.961276 Z M288.406118,76.8083306 L360.049464,76.8083306 C360.271614,70.9213286 359.688476,65.2565626 358.300032,59.8138626 C356.911588,54.3711628 354.690112,49.5394506 351.635536,45.3185812 C348.580958,41.0977118 344.637838,37.7099596 339.806052,35.155223 C334.974268,32.6004862 329.226196,31.323137 322.561666,31.323137 C317.78542,31.323137 313.120318,32.3228016 308.566222,34.3221608 C304.012126,36.32152 300.013468,39.2372084 296.570126,43.0693134 C293.126786,46.9014184 290.34994,51.5942884 288.239506,57.1480638 C286.12907,62.7018392 285.07387,69.0330484 285.07387,76.1418808 C285.07387,82.473185 285.79585,88.387867 287.23983,93.8861048 C288.683812,99.3843424 290.90529,104.160518 293.904328,108.214774 C296.903366,112.26903 300.763182,115.406866 305.483892,117.628376 C310.204602,119.849886 315.897136,120.905088 322.561666,120.794012 C332.33631,120.794012 340.555776,118.044935 347.220306,112.546697 C353.884836,107.048459 357.827958,99.3010588 359.049788,89.304263 L355.71754,89.304263 C354.273558,98.7456812 350.580352,105.826639 344.637814,110.547348 C338.695274,115.268057 331.225558,117.628376 322.228442,117.628376 C316.119288,117.628376 310.954354,116.573175 306.733486,114.46274 C302.512616,112.352305 299.069326,109.464385 296.403514,105.798894 C293.737702,102.133402 291.766142,97.8292904 290.488774,92.8864302 C289.211404,87.94357 288.517194,82.5842572 288.406118,76.8083306 L288.406118,76.8083306 L288.406118,76.8083306 Z M356.717214,73.476082 L288.406118,73.476082 C288.739344,67.4780046 289.850082,62.0909232 291.738366,57.3146762 C293.62665,52.5384294 296.098044,48.4564656 299.15262,45.0686626 C302.207196,41.6808596 305.76156,39.0983926 309.815816,37.3211846 C313.870072,35.5439764 318.22972,34.6553856 322.89489,34.6553856 C328.448666,34.6553856 333.335916,35.6828186 337.556784,37.7377156 C341.777654,39.7926126 345.304248,42.597227 348.136674,46.1516434 C350.9691,49.7060596 353.107272,53.8435602 354.551252,58.5642694 C355.995234,63.2849786 356.717214,68.255533 356.717214,73.476082 L356.717214,73.476082 L356.717214,73.476082 Z M429.193622,58.6475756 L432.52587,58.6475756 C432.52587,49.0950818 429.749024,42.1529666 424.195248,37.8210218 C418.641474,33.489077 411.088452,31.323137 401.535958,31.323137 C396.204334,31.323137 391.705844,31.98958 388.040352,33.3224862 C384.37486,34.6553922 381.375866,36.3770368 379.04328,38.4874716 C376.710694,40.5979062 375.044586,42.930457 374.044908,45.4851936 C373.045228,48.0399304 372.545396,50.4835548 372.545396,52.8161406 C372.545396,57.481312 373.37845,61.2022858 375.044582,63.9791734 C376.710714,66.7560612 379.32095,68.9220012 382.875366,70.4770582 C385.319028,71.5878134 388.095874,72.587478 391.205988,73.476082 C394.316102,74.364686 397.926002,75.3088138 402.035796,76.3084934 C405.701288,77.1970974 409.311188,78.0856882 412.865604,78.9742922 C416.42002,79.8628962 419.557856,81.0569402 422.279206,82.5564594 C425.000556,84.0559788 427.222032,85.9720026 428.943704,88.3045884 C430.665374,90.637174 431.526196,93.6917048 431.526196,97.468272 C431.526196,101.133764 430.665374,104.243831 428.943704,106.798568 C427.222032,109.353305 425.028324,111.435939 422.362512,113.046534 C419.6967,114.657129 416.725474,115.823405 413.448748,116.545395 C410.17202,117.267386 406.978646,117.628376 403.868532,117.628376 C393.760662,117.628376 386.01326,115.379131 380.626098,110.880573 C375.238936,106.382015 372.545396,99.3010572 372.545396,89.6374878 L369.213146,89.6374878 C369.213146,100.411812 372.128836,108.298055 377.9603,113.296453 C383.791764,118.294851 392.427754,120.794012 403.868532,120.794012 C407.534024,120.794012 411.22723,120.377485 414.94826,119.544419 C418.669288,118.711353 422.001504,117.350698 424.945004,115.462415 C427.888506,113.574131 430.276594,111.130506 432.10934,108.131468 C433.942086,105.132429 434.858444,101.466992 434.858444,97.1350472 C434.858444,93.0252534 434.05316,89.693038 432.442564,87.1383014 C430.83197,84.5835646 428.721566,82.4731616 426.111292,80.807029 C423.501018,79.1408964 420.55756,77.8357786 417.280834,76.8916368 C414.004106,75.947495 410.699658,75.0311358 407.367394,74.1425318 C402.702222,72.9207012 398.620258,71.8654996 395.12138,70.9768956 C391.622502,70.0882914 388.373592,69.03309 385.374552,67.8112594 C382.48659,66.5894288 380.181808,64.8400158 378.460136,62.5629678 C376.738466,60.2859198 375.877644,57.03701 375.877644,52.8161406 C375.877644,52.038612 376.099792,50.650189 376.544094,48.6508298 C376.988396,46.6514706 378.043598,44.624373 379.70973,42.569476 C381.375862,40.5145792 383.93056,38.6818608 387.373902,37.0712658 C390.817242,35.460671 395.53788,34.6553856 401.535958,34.6553856 C405.645752,34.6553856 409.394494,35.099681 412.782298,35.988285 C416.1701,36.8768892 419.085788,38.2930806 421.52945,40.236902 C423.973112,42.1807234 425.861366,44.6521164 427.194272,47.6511552 C428.527178,50.650194 429.193622,54.3156308 429.193622,58.6475756 L429.193622,58.6475756 L429.193622,58.6475756 Z M506.335178,58.6475756 L509.667426,58.6475756 C509.667426,49.0950818 506.89058,42.1529666 501.336804,37.8210218 C495.783028,33.489077 488.230008,31.323137 478.677514,31.323137 C473.34589,31.323137 468.847398,31.98958 465.181906,33.3224862 C461.516416,34.6553922 458.517422,36.3770368 456.184836,38.4874716 C453.85225,40.5979062 452.186142,42.930457 451.186462,45.4851936 C450.186784,48.0399304 449.68695,50.4835548 449.68695,52.8161406 C449.68695,57.481312 450.520004,61.2022858 452.186138,63.9791734 C453.85227,66.7560612 456.462506,68.9220012 460.016922,70.4770582 C462.460582,71.5878134 465.237428,72.587478 468.347544,73.476082 C471.457658,74.364686 475.067558,75.3088138 479.177352,76.3084934 C482.842842,77.1970974 486.452742,78.0856882 490.00716,78.9742922 C493.561576,79.8628962 496.699412,81.0569402 499.420762,82.5564594 C502.142112,84.0559788 504.363588,85.9720026 506.085258,88.3045884 C507.80693,90.637174 508.667752,93.6917048 508.667752,97.468272 C508.667752,101.133764 507.80693,104.243831 506.085258,106.798568 C504.363588,109.353305 502.16988,111.435939 499.504068,113.046534 C496.838256,114.657129 493.86703,115.823405 490.590302,116.545395 C487.313576,117.267386 484.120202,117.628376 481.010088,117.628376 C470.902216,117.628376 463.154816,115.379131 457.767654,110.880573 C452.380492,106.382015 449.68695,99.3010572 449.68695,89.6374878 L446.354702,89.6374878 C446.354702,100.411812 449.27039,108.298055 455.101854,113.296453 C460.93332,118.294851 469.56931,120.794012 481.010088,120.794012 C484.67558,120.794012 488.368784,120.377485 492.089814,119.544419 C495.810844,118.711353 499.14306,117.350698 502.08656,115.462415 C505.030062,113.574131 507.418148,111.130506 509.250894,108.131468 C511.08364,105.132429 512,101.466992 512,97.1350472 C512,93.0252534 511.194714,89.693038 509.58412,87.1383014 C507.973524,84.5835646 505.863122,82.4731616 503.252848,80.807029 C500.642572,79.1408964 497.699116,77.8357786 494.422388,76.8916368 C491.145662,75.947495 487.841214,75.0311358 484.508948,74.1425318 C479.843778,72.9207012 475.761814,71.8654996 472.262936,70.9768956 C468.764056,70.0882914 465.515146,69.03309 462.516108,67.8112594 C459.628144,66.5894288 457.323362,64.8400158 455.601692,62.5629678 C453.880022,60.2859198 453.0192,57.03701 453.0192,52.8161406 C453.0192,52.038612 453.241348,50.650189 453.68565,48.6508298 C454.129952,46.6514706 455.185152,44.624373 456.851286,42.569476 C458.517418,40.5145792 461.072116,38.6818608 464.515458,37.0712658 C467.958798,35.460671 472.679436,34.6553856 478.677514,34.6553856 C482.787308,34.6553856 486.53605,35.099681 489.923852,35.988285 C493.311656,36.8768892 496.227344,38.2930806 498.671006,40.236902 C501.114666,42.1807234 503.002922,44.6521164 504.335828,47.6511552 C505.668734,50.650194 506.335178,54.3156308 506.335178,58.6475756 L506.335178,58.6475756 L506.335178,58.6475756 Z"
                    fill="#ffffff"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div className="vite">
            <svg
              fill="white"
              height="70px"
              preserveAspectRatio="xMidYMid"
              width="70px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-1.871 -0.4069999999999627 259.721 257.849"
            >
              <linearGradient
                id="a"
                x1="-.828%"
                x2="57.636%"
                y1="7.652%"
                y2="78.411%"
              >
                <stop offset="0" stopColor="#41d1ff" />
                <stop offset="1" stopColor="#bd34fe" />
              </linearGradient>
              <linearGradient
                id="b"
                x1="43.376%"
                x2="50.316%"
                y1="2.242%"
                y2="89.03%"
              >
                <stop offset="0" stopColor="#ffea83" />
                <stop offset=".083" stopColor="#ffdd35" />
                <stop offset="1" stopColor="#ffa800" />
              </linearGradient>
              <path
                d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62z"
                fill="url(#a)"
              />
              <path
                d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113z"
                fill="url(#b)"
              />
            </svg>
          </div>
          <div className="node">
            <svg
              width="70px"
              height="70px"
              viewBox="0 0 256 282"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
            >
              <g fill="#8CC84B">
                <path
                  d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z"
                />
                <path
                  d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z"
                />
              </g>
            </svg>
          </div>
          <div className="mongodb">
            <svg
              width="70px"
              height="70px"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="512" cy="512" r="512" style={{fill: "#13aa52"}} />
              <path
                d="M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a726.68 726.68 0 0 1 13-78.53l1-.65a204.48 204.48 0 0 0 20.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347.07 347.07 0 0 0-5.05-56.76zM512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53z"
                style={{fill: "#fff"}}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="project" data-aos="fade-in" id="project">
      <h1>PROJECTS</h1>
      <div className="main-grid-project">
        <div className="project1">
          <img
            src={image1}
            height={styleImage1}
            width="80%"
            alt=""
            data-aos="flip-left"
          />
          <h1>E-Book store</h1>
          <p>
            An E-book commerce store structure where you can buy books of
            different categories. A user can buy a book by logging in to thier
            account and read it in pdf format. This apps works on self made api.
          </p>
          <div className="button-project1">
          <a target='__blank' href=""><button className="btn1">Live site</button></a>
            <a target='__blank'  href="https://github.com/Icecubesaad/Online-book-store"><button className="btn1">Source code</button></a>
          </div>
        </div>
        <div className="project2">
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <button onClick={RecipeBack} className='button-home'  style={{ backgroundColor: "transparent", border: "none", color: "white", fontSize: "1.3rem", zIndex: "9999" }}>
          <svg width={arrow} height={arrow} viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" transform="rotate(180)" stroke="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <title>arrow_right [#333]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-425.000000, -6679.000000)" fill="white"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M370.39,6519 L369,6520.406 L377.261,6529.013 L376.38,6529.931 L376.385,6529.926 L369.045,6537.573 L370.414,6539 C372.443,6536.887 378.107,6530.986 380,6529.013 C378.594,6527.547 379.965,6528.976 370.39,6519" id="arrow_right-[#333]"> </path> </g> </g> </g> </g>

</svg>
</button>
<div {...handlers} style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
          <img src={RecipeImages[index].img} height={styleImage2.height} width={styleImage2.width} alt="" data-aos="flip-left" />
          </div>
          <button onClick={RecipeForward} className='button-home' style={{ backgroundColor: "transparent", border: "none", color: "white", fontSize: "1.3rem", zIndex: "9999" }}><svg width={arrow} height={arrow} viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="white" stroke="white">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <title>arrow_right [#333]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-425.000000, -6679.000000)" fill="white"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M370.39,6519 L369,6520.406 L377.261,6529.013 L376.38,6529.931 L376.385,6529.926 L369.045,6537.573 L370.414,6539 C372.443,6536.887 378.107,6530.986 380,6529.013 C378.594,6527.547 379.965,6528.976 370.39,6519" id="arrow_right-[#333]"> </path> </g> </g> </g> </g>

</svg>
</button>
          </div>
          <h1>Recipe Sharing App</h1>
          <p>
          Introducing my MERN stack-powered recipe app: a comprehensive platform that fetches recipes from an open-source API and organizes them into different categories. Users can seamlessly navigate from categories to meals and access detailed recipes. The app features a recipe saving system, profile authentication, and a convenient search bar, allowing users to quickly find their desired recipes and create personalized collections.
          </p>
          <div className="button-project2">
          <a target='__blank' href=""><button className="btn1">Live site</button></a>
            <a target='__blank' href="https://github.com/Icecubesaad/Recipe-App"><button className="btn1">Source code</button>
            </a></div>
        </div>
        <div className="project3" style={{fontFamily:"Inter"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
          <button onClick={BlogBack} className='button-home'  style={{ backgroundColor: "transparent", border: "none", color: "white", fontSize: "1.3rem", zIndex: "9999" }}>
          <svg width={arrow} height={arrow} viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" transform="rotate(180)" stroke="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <title>arrow_right [#333]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-425.000000, -6679.000000)" fill="white"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M370.39,6519 L369,6520.406 L377.261,6529.013 L376.38,6529.931 L376.385,6529.926 L369.045,6537.573 L370.414,6539 C372.443,6536.887 378.107,6530.986 380,6529.013 C378.594,6527.547 379.965,6528.976 370.39,6519" id="arrow_right-[#333]"> </path> </g> </g> </g> </g>

</svg>
</button>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} {...handlers2}>
          <img src={BlogApp[indexB].img} height={styleImage3.height} width={styleImage3.width} alt="" data-aos="flip-left" />
          </div>
          <button onClick={BlogForward} className='button-home' style={{ backgroundColor: "transparent", border: "none", color: "white", fontSize: "1.3rem", zIndex: "9999" }}><svg width={arrow} height={arrow} viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="white" stroke="white">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <title>arrow_right [#333]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-425.000000, -6679.000000)" fill="white"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M370.39,6519 L369,6520.406 L377.261,6529.013 L376.38,6529.931 L376.385,6529.926 L369.045,6537.573 L370.414,6539 C372.443,6536.887 378.107,6530.986 380,6529.013 C378.594,6527.547 379.965,6528.976 370.39,6519" id="arrow_right-[#333]"> </path> </g> </g> </g> </g>

</svg>
</button>
          </div>
          <h1>Blog App</h1>
          <p>   
Introducing my MERN stack-powered blog application: a seamless platform for readers and writers. With user authentication, a liking system, trending and relatable blog algorithms, and categorized tags, this app offers an immersive experience. Users can create personalized author profiles, discover captivating content, engage in meaningful discussions, and express their appreciation through the liking system.
          </p>
          <div className="button-project3">
          <a target='__blank' href=""><button className="btn1">Live site</button></a>
          <a target='__blank' href="https://github.com/Icecubesaad/Blog"><button className="btn1">Source code</button></a>
          </div>
        </div>
      </div>
    </div>
    <div className="contact" data-aos="fade-in" id="contact" style={{fontFamily:"Inter"}}>
      <h1>contact</h1>
      <div className="box-contact">
        <form action="">
          <h2>Name</h2>
          <input value={name} onChange={(e)=>setname(e.target.value)} type="text" placeholder='Enter your name'/>
          <h2>Email</h2>
          <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Enter your Email'/>
          <h2>Message</h2>
          <textarea value={desc} onChange={(e)=>setdesc(e.target.value)} className="scrollable" placeholder='Enter the description here'></textarea>
          <div className="btn-contact">
            <button className="btn1" onClick={send}>Send</button>
          </div>
        </form>
      </div>
    </div>
        </div>
        </div>
    );
}

export default Homepage;
