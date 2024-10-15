import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger)

export default function WhatWeDo({scrollTo, refs}) {

    const container = useRef();

    useGSAP(
      () => {
        const boxes = gsap.utils.toArray('.box');
        boxes.forEach((box) => {
          gsap.from(box, {
            y: 100,
            opacity: 0,
              stagger: .3,
            scrollTrigger: {
              trigger: box,
              start: '-50% bottom',
              end: 'bottom 70%',
                scrub: true,
            },
          });
        });
      },
      { scope: container }
    );
  
    return (
      <>
  
      <section ref={refs.whatWeDo}id="what-we-do" className="bg-licorice text-white">
        <div ref={container} className="container mx-auto flex  flex-col justify-center items-start py-20 xl:py-36 gap-12  px-6">
          
        
              <h2 className="box text-4xl sm:text-5xl lg:text-6xl font-semibold w-full">What we do</h2>
            <div className=" flex flex-col lg:flex-row gap-6 md:gap-12">
              <div className="box flex flex-col px-0  gap-6 w-1/2">
                <h3 className="box text-white text-3xl sm:text-4xl lg:text-5xl font-semibold cursor-pointer">Digital project management</h3>
                <hr className="box" />
                <h3 className="box text-gray-400 text-3xl sm:text-4xl lg:text-5xl font-semibold cursor-pointer">Creative Production</h3>
                <hr className="box"/>
                <a href="#"onClick={(e) => { e.preventDefault(); e.stopPropagation(); scrollTo(refs.footer) }} className="box fade text-xl sm:text-2xl flex gap-2 font-syne font-bold text-tomato hover:text-orange">
                Start your project<FontAwesomeIcon icon={faCircleArrowUp} /></a>
              </div>
              <div className="flex flex-col p-0 w-1/2">
              <ul id="projectManagementList" className="flex  flex-col gap-6">
                  <li className="box text-2xl sm:text-3xl lg:text-4xl font-syne font-semibold">Website builds / redesigns</li>
                  <li className="box text-2xl sm:text-3xl lg:text-4xl font-syne font-semibold">Content and tech migrations</li>
                  <li className="box text-2xl sm:text-3xl lg:text-4xl font-syne font-semibold">Rebranding projects</li>
                  <li className="box text-2xl sm:text-3xl lg:text-4xl font-syne font-semibold">Localisation</li>
                  <li className="box text-2xl sm:text-3xl lg:text-4xl font-syne font-semibold">Digital marketing activity</li>
                  <li className="box text-2xl sm:text-3xl lg:text-4xl font-syne font-semibold">Email marketing campaigns</li>
                </ul>
                
                <ul id="creativeProductionList" className="flex-col gap-6 hidden active:flex">
                  <li className="box text-2xl sm:text-3xl lg:text-4xl font-syne font-semibold">Website builds / redesigns</li>
                  <li className="box text-2xl sm:text-3xl lg:text-4xl font-syne font-semibold">Content and tech migrations</li>
                  <li className="box text-2xl sm:text-3xl lg:text-4xl font-syne font-semibold">Rebranding projects</li>
                  <li className="box text-2xl sm:text-3xl lg:text-4xl font-syne font-semibold">Localisation</li>
                  <li className="box text-2xl sm:text-3xl lg:text-4xl font-syne font-semibold">Digital marketing activity</li>
                  <li className="box text-2xl sm:text-3xl lg:text-4xl font-syne font-semibold">Email marketing campaigns</li>
              </ul>
                 
              </div>



            </div>

            
           
        </div>
        </section>
      </>
      
    );
  }