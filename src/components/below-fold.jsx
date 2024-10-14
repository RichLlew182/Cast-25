import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function BelowFold({refs}) {

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
  
      <section ref={refs.workWithUs}id="working-with-us" className="bg-snow">
        <div ref={container} className="container mx-auto flex  flex-col justify-center items-start  gap-12 py-20 xl:py-36 :gap-20 px-6">
          <h2 className="box fade text-4xl sm:text-5xl lg:text-6xl dark:text-white">What working with us is like</h2>
          
            <div className=" flex flex-col lg:flex-row gap-6 md:gap-12">
              
              <div className="box flex flex-col bg-white p-12 md:p-20 gap-6">
                <img src="/images/client-logos/RCSE.png" height="158" width="370" alt="Royal College of Surgeons of England Logo" />
                <blockquote className="text-xl">“Andy was brilliant. He closed a complex project calmly and to clear timescales and we'd recommend him to anyone.”</blockquote>
                <p className="text-2xl font-bold font-syne">James Pearson-Jadwat</p></div>
              <div className="box flex flex-col bg-white  p-12 md:p-20 gap-6">
                <img src="/images/client-logos/discovery-channel.png" height="157" width="370" alt="Discovery Channel Logo" />
                <blockquote className="text-xl">“Chris did a stellar job of building rapport with teams and gets the tough stuff done on time, on budget and with a keen attention to detail.”</blockquote>
                <p className="text-2xl font-bold font-syne">Andrew Shields</p></div>
            </div>
           
        </div>
        </section>
      </>
      
    );
  }