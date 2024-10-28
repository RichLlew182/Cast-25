"use client";

import { Footer } from "flowbite-react";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function FooterBottom({ refs }) {

  const currentYear = new Date().getFullYear();
  const main = useRef();

  useGSAP(() => {
    const boxes = gsap.utils.toArray('.box');
    boxes.forEach((box) => {
      gsap.to(box, {
        x: 0,
        delay: 0.5,
        scrollTrigger: {
          trigger: box,
          start: '-50% bottom',
          end: 'bottom 70%',
          scrub: true,
          once: true, // Ensures the animation happens only once
        },
      });
    });
  }, { scope: main });

  return (
    <Footer id="footer" className="flex flex-col bg-licorice text-white rounded-none font-syne lining-nums font-semibold p-0">
      <div ref={refs.footer} id="footerTop" className="w-full">
        <div ref={main} className="container flex mx-auto justify-center py-32 md:py-48 px-6">
          <a className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-white" href="mailto:hello@cast25.com?subject=Hello CAST25">
            <div className="text-center">
              <span className="box box-left">hello</span>
              <span className="text-tomato">@</span>
              <span className="box box-right">cast25.com</span>
            </div>
          </a>
        </div>
      </div>
      <div id="footerBottom" className="w-full bg-tomato py-6 md:py-9">
        <div className="container flex flex-col justify-center md:flex-row md:justify-between gap-2 px-6">
          <Footer.Copyright className="text-xl sm:text-lg flex justify-center text-licorice" by="CAST25" year={currentYear} />
          <Footer.LinkGroup className="justify-center text-xl sm:text-lg text-licorice">
            <Footer.Link target="_blank" href="https://richllew.dev/">Design by richllew.dev</Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
    </Footer>
  );
}
