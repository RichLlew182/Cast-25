"use client";
import { Navbar } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

export function MainMenu( {scrollToFooter}) {
  return (

    <header className="absolute w-full">
    <Navbar  fluid rounded className="container py-12 px-6 sm:px-6 mx-auto bg-transparent">
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-4xl font-syne font-semibold lining-nums">CAST25</span>
      </Navbar.Brand>
      <Navbar.Toggle id="navbarToggle" className="p-0 text-licorice focus:border-none  focus:outline-none focus:shadow-none hover:bg-transparent"/>
      <Navbar.Collapse className="font-syne font-medium">
        <Navbar.Link href="#" onClick={(e) => { e.preventDefault(); scrollToFooter() }} className="px-0 flex gap-2 text-xl text-licorice md:hover:text-white hover:bg-transparent border-none">What we do</Navbar.Link>
        <Navbar.Link href="#" onClick={(e) => { e.preventDefault(); scrollToFooter() }} className="px-0 flex gap-2 text-xl text-licorice md:hover:text-white hover:bg-transparent border-none">How we do it</Navbar.Link>
        <Navbar.Link href="#" onClick={(e) => { e.preventDefault(); scrollToFooter() }} className="px-0 flex gap-2 text-xl text-licorice md:hover:text-white hover:bg-transparent border-none">Who we've worked with</Navbar.Link>
        <Navbar.Link href="#" onClick={(e) => { e.preventDefault(); scrollToFooter() }} className="px-0 flex gap-2 text-xl text-licorice md:hover:text-white hover:bg-transparent border-none">Testimonials</Navbar.Link>
       <Navbar.Link href="#" onClick={(e) => { e.preventDefault(); scrollToFooter() }} className="px-0 flex gap-2 text-xl text-licorice md:hover:text-white hover:bg-transparent border-none">Start your project<FontAwesomeIcon icon={faCircleArrowUp} /></Navbar.Link>
      </Navbar.Collapse>
      </Navbar>
      </header>
  );
}