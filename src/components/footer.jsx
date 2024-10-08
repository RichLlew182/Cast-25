
"use client";

import { Footer } from "flowbite-react";

export function FooterBottom() {
  return (
    <Footer container className="bg-licorice text-white rounded-none  font-syne lining-nums font-semibold">
     <div className="container flex max-w-[1320px] mx-auto justify-between">
          <Footer.Copyright  className="text-white"href="/" by="CAST25" year={2024} />
          <Footer.LinkGroup className="text-white">
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
     </div>
    </Footer>
  );
}
