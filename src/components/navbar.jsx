"use client";
import { Flowbite, Navbar } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";


const customTheme = {
  navbar: {
    collapse: {
      base: "w-full xl:block xl:w-auto test",
      list: "my-0 h-full flex flex-col justify-center xl:my-0 xl:flex-row xl:space-x-7",
      hidden: {
        "on": "hidden",
        "off": ""
      }
    },

    toggle: {
      base: 'text-white hover:bg-blue-700 focus:ring-blue-300', // Custom styles for toggle button
    },
    
  },
};

export function MainMenu( {scrollToFooter}) {
  return (


    <Flowbite theme={{ theme: customTheme }}>
    <header className="absolute w-full bg-tomato z-10 ">
    <Navbar  fluid rounded className="container py-12 px-6 sm:px-6 mx-auto bg-transparent">
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-4xl font-syne font-semibold lining-nums">CAST25</span>
      </Navbar.Brand>
      <Navbar.Toggle id="navbarToggle" className="xl:hidden p-0 text-licorice focus:border-none  focus:outline-none focus:shadow-none hover:bg-transparent"/>
      <Navbar.Collapse className="xl:my-0 h-screen xl:h-auto font-syne font-medium">
        <Navbar.Link href="#" onClick={(e) => { e.preventDefault(); scrollToFooter() }} className="font-bold xl:font-medium px-0 md:py-2 xl:py-0 flex gap-2 text-4xl xl:text-xl text-licorice md:hover:text-white hover:bg-transparent border-none">What we do</Navbar.Link>
        <Navbar.Link href="#" onClick={(e) => { e.preventDefault(); scrollToFooter() }} className="font-bold xl:font-medium px-0 md:py-2 xl:py-0 flex gap-2 text-4xl xl:text-xl text-licorice md:hover:text-white hover:bg-transparent border-none">How we do it</Navbar.Link>
        <Navbar.Link href="#" onClick={(e) => { e.preventDefault(); scrollToFooter() }} className="font-bold xl:font-medium px-0 md:py-2 xl:py-0 flex gap-2 text-4xl xl:text-xl text-licorice md:hover:text-white hover:bg-transparent border-none">Who we've worked with</Navbar.Link>
        <Navbar.Link href="#" onClick={(e) => { e.preventDefault(); scrollToFooter() }} className="font-bold xl:font-medium px-0 md:py-2 xl:py-0 flex gap-2 text-4xl xl:text-xl text-licorice md:hover:text-white hover:bg-transparent border-none">Testimonials</Navbar.Link>
       <Navbar.Link href="#" onClick={(e) => { e.preventDefault(); scrollToFooter() }} className="font-bold xl:font-medium px-0 md:py-2 xl:py-0 flex gap-2 text-4xl xl:text-xl text-licorice md:hover:text-white hover:bg-transparent border-none">Start your project<FontAwesomeIcon icon={faCircleArrowUp} /></Navbar.Link>
      </Navbar.Collapse>
      </Navbar>
      </header>
      </Flowbite>
  );
}