import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger)

export default function WhatWeDo({ scrollTo, refs }) {

  const container = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.box');
      boxes.forEach((box) => {
        gsap.from(box, {
          y: 100,
          opacity: 0,
          stagger: .5,
          delay: 1,
          scrollTrigger: {
            trigger: box,
            start: 'top bottom',
            end: 'bottom 90%',
            scrub: true,

          },
        });
      });
    },
    { scope: container }
  );

  return (
    <>

      <section ref={refs.whatWeDo} id="what-we-do" className="bg-licorice text-white">

        <div ref={container} className="container mx-auto flex flex-col justify-center items-start gap-6 md:gap-12 py-12 md:py-14 xl:py-24  px-6">
          <h2 className="box fade text-3xl md:text-4xl xl:text-5xl ">Choose one of our Partnership Pillars</h2>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-12">

            <div className="box flex flex-col p-6 gap-6 border-solid border-2 border-white lg:w-1/3">
              <h3 className="text-2xl md:text-3xl xl:text-4xl ">
                <span>Build </span><span class="text-tomato inline"> + </span><span> Empower</span>
              </h3>
              <p className="text-base">If you don’t have dedicated Project Managers in-house, we can create a structure that enables your existing team to manage projects with confidence and clarity. We simplify processes, introduce practical tools, and provide guidance so non-PMs can run projects efficiently within the framework we’ve built — ensuring consistency, control, and successful outcomes.</p>
            </div>

            <div className="box flex flex-col p-6 gap-6 border-solid border-2 border-white lg:w-1/3">
              <h3 className="text-2xl md:text-3xl xl:text-4xl">
                <span>Design </span><span class="text-tomato inline"> + </span><span> Enable</span>
              </h3>
              <p className="text-base">We design and implement a complete project management structure from the ground up — establishing governance, processes, and reporting tailored to your organisation. Once in place, your future Project Managers take ownership, supported by a framework that ensures clarity, accountability, and ongoing success.</p>
            </div>

            <div className="box flex flex-col p-6 gap-6 border-solid border-2 border-white lg:w-1/3">
              <h3 className="text-2xl md:text-3xl xl:text-4xl ">
                <span>Refine </span><span class="text-tomato inline"> + </span><span> Enhance</span>
              </h3>
              <p className="text-base">If you already have a project management structure in place, we help you get the most from it. We review and optimise your current governance, processes, and reporting, ensuring they’re fit for purpose and aligned with your business goals. From there, your Project Managers continue with a more efficient and effective framework designed to drive results.</p>
            </div>
          </div>
          <a href="#" onClick={(e) => { e.preventDefault(); e.stopPropagation(); scrollTo(refs.footer) }} className="flex box fade text-xl sm:text-lg gap-2 font-syne font-bold text-tomato hover:text-orange">
            Work with us<FontAwesomeIcon icon={faCircleArrowUp} /></a>
        </div>




      </section>
    </>

  );
}
