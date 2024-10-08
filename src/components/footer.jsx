
"use client";

import { Footer } from "flowbite-react";

export function FooterBottom() {
  return (
      <Footer className="flex flex-col bg-licorice text-white rounded-none  font-syne lining-nums font-semibold p-0">
          <div id="footerTop" className=" w-full">
              <div className="container flex mx-auto justify-center py-48 px-6">
                  <a className="text-8xl text-white" href="mailto:hello@cast25.com?subject=Hello CAST25">hello@cast25.com</a></div>
          </div>
    <div id="footerBottom" className="w-full bg-tomato py-12">
         <div className="container flex mx-auto justify-between px-6">
              <Footer.Copyright  className="text-licorice text-2xl" by="CAST25" year={2024} />
              <Footer.LinkGroup className="text-licorice text-2xl">
                <Footer.Link target="_blank"href="https://richllew.dev/">Design by richllew.dev</Footer.Link>
              </Footer.LinkGroup>
         </div>
    </div>
    </Footer>
  );
}
