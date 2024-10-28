import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger)

export default function WhatWeDo({ scrollTo, refs }) {

  const container = useRef();

  const button1Ref = useRef(null);
  const button2Ref = useRef(null);
  const hr1Ref = useRef(null);
  const hr2Ref = useRef(null)
  const listRef1 = useRef(null);
  const listRef2 = useRef(null);

  const handleActive = (buttonId) => {
    if (buttonId === 1) {

      console.log(button1Ref)

      if (button1Ref.current.classList.contains('active')) {
        return
      } else {
        button1Ref.current.classList.add('active');
        button2Ref.current.classList.remove('active');
        hr1Ref.current.classList.add('active')
        hr2Ref.current.classList.remove('active');
        listRef1.current.classList.add('active');
        listRef2.current.classList.remove('active');
      }

    } else if (buttonId === 2) {

      if (button2Ref.current.classList.contains('active')) {
        return
      }

      else {
        button2Ref.current.classList.add('active');
        button1Ref.current.classList.remove('active');
        hr1Ref.current.classList.remove('active');
        hr2Ref.current.classList.add('active');
        listRef2.current.classList.add('active');
        listRef1.current.classList.remove('active');
      }


    }

  };

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.box');
      boxes.forEach((box) => {
        gsap.from(box, {
          y: 100,
          opacity: 0,
          stagger: .3,
          delay: 1,
          scrollTrigger: {
            trigger: box,
            start: 'top bottom',
            end: 'bottom 80%',
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
        <div ref={container} className="container mx-auto flex  flex-col justify-center items-start py-12 md:py-14 xl:py-24 gap-12  px-6">


          <h2 className="box text-4xl lg:text-5xl font-semibold w-full">What we do</h2>
          <div className=" flex flex-col lg:flex-row gap-4 md:gap-12">
            <div className="box flex flex-col px-0  gap-4 md:gap-6 w-full lg:w-1/2">
              <h3 ref={button1Ref} onClick={() => handleActive(1)} className="active box text-gray-400 text-3xl lg:text-4xl  font-semibold cursor-pointer">Digital project management</h3>
              <hr ref={hr1Ref} className="active box" />
              <h3 ref={button2Ref} onClick={() => handleActive(2)} className="box text-gray-400 text-3xl lg:text-4xl  font-semibold cursor-pointer">Creative Production</h3>
              <hr ref={hr2Ref} className="box" />
              <a href="#" onClick={(e) => { e.preventDefault(); e.stopPropagation(); scrollTo(refs.footer) }} className="hidden box fade text-xl sm:text-lg lg:flex gap-2 font-syne font-bold text-tomato hover:text-orange">
                Start your project<FontAwesomeIcon icon={faCircleArrowUp} /></a>
            </div>
            <div className="flex flex-col p-0 w-full lg:w-1/2">
              <ul ref={listRef1} id="projectManagementList" className="active flex flex-col gap-4 md:gap-6">
                <li className="box text-2xl  font-syne font-semibold">Website builds / redesigns</li>
                <li className="box text-2xl  font-syne font-semibold">Content and tech migrations</li>
                <li className="box text-2xl  font-syne font-semibold">Rebranding projects</li>
                <li className="box text-2xl  font-syne font-semibold">Localisation</li>
                <li className="box text-2xl  font-syne font-semibold">Digital marketing activity</li>
                <li className="box text-2xl  font-syne font-semibold">Email marketing campaigns</li>
              </ul>

              <ul ref={listRef2} id="creativeProductionList" className="flex flex-col gap-4 md:gap-6">
                <li className=" text-2xl  font-syne font-semibold">Print (press, POS and OOH)</li>
                <li className=" text-2xl  font-syne font-semibold">Social media (content production and campaign activity - incl. influencers)</li>
                <li className=" text-2xl  font-syne font-semibold">PR and events</li>
                <li className=" text-2xl  font-syne font-semibold">Audio production</li>
                <li className=" text-2xl  font-syne font-semibold">Video production</li>
              </ul>

            </div>



          </div>

          <a href="#" onClick={(e) => { e.preventDefault(); e.stopPropagation(); scrollTo(refs.footer) }} className="flex box fade text-xl sm:text-lg lg:hidden gap-2 font-syne font-bold text-tomato hover:text-orange">
            Start your project<FontAwesomeIcon icon={faCircleArrowUp} /></a>

        </div>
      </section>
    </>

  );
}
