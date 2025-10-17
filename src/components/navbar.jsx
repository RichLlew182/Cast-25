"use client";
import { Flowbite, Navbar } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import CustomTheme from "../theme/customTheme";

export function MainMenu({ scrollTo, refs }) {
  return (


    <Flowbite theme={{ theme: CustomTheme }}>
      <header className="absolute w-full bg-tomato z-10 ">
        <Navbar fluid rounded className="container py-12 px-6 sm:px-6 mx-auto bg-transparent">
          <Navbar.Toggle id="navbarToggle" className="xl:hidden p-0 text-licorice focus:border-none  focus:outline-none focus:shadow-none hover:bg-transparent" />
          <Navbar.Collapse className="container justify-end absolute xl:relative xl:left-0 right-0 px-6 xl:px-0 xl:my-0 h-screen xl:h-auto xl:me-auto font-syne font-medium w-full">
            <Navbar.Link href="#" onClick={(e) => { e.preventDefault(); e.stopPropagation(); scrollTo(refs.partnershipPillars) }} className="font-bold xl:font-medium px-0 md:py-2 xl:py-0 flex gap-2 text-2xl sm:text-4xl xl:text-base text-licorice md:hover:text-white hover:bg-transparent border-none">Our Partnership Pillars</Navbar.Link>
            <Navbar.Link href="#" onClick={(e) => { e.preventDefault(); e.stopPropagation(); scrollTo(refs.howWeDoIt) }} className="font-bold xl:font-medium px-0 md:py-2 xl:py-0 flex gap-2 text-2xl sm:text-4xl xl:text-base text-licorice md:hover:text-white hover:bg-transparent border-none">How we do it</Navbar.Link>
            <Navbar.Link href="#" onClick={(e) => { e.preventDefault(); e.stopPropagation(); scrollTo(refs.testimonials) }} className="font-bold xl:font-medium px-0 md:py-2 xl:py-0 flex gap-2 text-2xl sm:text-4xl xl:text-base text-licorice md:hover:text-white hover:bg-transparent border-none">Testimonials</Navbar.Link>
            <Navbar.Link href="#" onClick={(e) => { e.preventDefault(); e.stopPropagation(); scrollTo(refs.footer) }} className="font-bold xl:font-medium px-0 md:py-2 xl:py-0 flex gap-2 text-2xl sm:text-4xl xl:text-base text-licorice md:hover:text-white hover:bg-transparent border-none">Work with us<FontAwesomeIcon icon={faCircleArrowUp} /></Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </Flowbite>
  );
}