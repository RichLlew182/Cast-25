"use client";
import { Navbar } from "flowbite-react";

export function MainMenu() {
  return (
    <Navbar  fluid rounded className="container py-12 px-6 sm:px-6 mx-auto bg-transparent">
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-4xl font-syne font-semibold lining-nums">CAST25</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="font-syne font-medium">
        <Navbar.Link className="text-2xl text-licorice md:hover:text-white"href="#footerTop">Get in touch</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}