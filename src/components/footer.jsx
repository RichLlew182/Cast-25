
"use client";

import { Footer } from "flowbite-react";

export function FooterBottom({ footerRef }) {
  return (
      <Footer className="flex flex-col bg-licorice text-white rounded-none  font-syne lining-nums font-semibold p-0">
          <div id="footerTop" ref={footerRef} className=" w-full">
              <div className="container flex mx-auto justify-center py-24 md:py-48 px-6">
                  <a className="text-4xl sm:text-6xl xl:text-8xl text-white" href="mailto:hello@cast25.com?subject=Hello CAST25"><span>hello</span><span className="text-tomato">@</span><span>cast25.com</span></a></div>
          </div>
    <div id="footerBottom" className="w-full bg-tomato py-6 md:py-12">
         <div className="container flex flex-col justify-center md:flex-row md:justify-between gap-2 px-6">
              <Footer.Copyright  className="text-xl sm:text-2xl flex justify-center text-licorice" by="CAST25" year={2024} />
              <Footer.LinkGroup className="justify-center text-xl sm:text-2xl text-licorice ">
                <Footer.Link  target="_blank"href="https://richllew.dev/">Design by richllew.dev</Footer.Link>
              </Footer.LinkGroup>
         </div>
    </div>
    </Footer>
  );
}
