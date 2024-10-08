
"use client";

import { Navbar } from "flowbite-react";

export function MainMenu() {
  return (
    <Navbar className="px-0 absolute w-full bg-tomato"fluid>

    <div className="container max-w-[1320px] px-6 mx-auto">
        <Navbar.Brand  href="/">
          <span className="self-center whitespace-nowrap text-xl font-bold font-syne lining-nums dark:text-white">CAST25</span>
        </Navbar.Brand>
    </div>
    
    </Navbar>

  );
}
