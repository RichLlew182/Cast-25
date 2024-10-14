import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function HowWeDoIt({refs}) {

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
  
      <section ref={refs.howWeDoIt} id="how-we-do-it" className="bg-snow">
        <div ref={container} className="container mx-auto flex  flex-col justify-center items-start  gap-12 py-20 xl:py-36 px-6">
          <h2 className="box fade text-4xl sm:text-5xl lg:text-6xl dark:text-white">How we do it</h2>
          
            <div className="flex flex-col lg:flex-row gap-6 md:gap-12">
              
            
           
              <div className="box flex flex-col bg-white  p-12 md:p-20 gap-6">
              <h3 className=" text-3xl sm:text-4xl lg:text-5xl dark:text-white">Responding to your brief</h3>
                <p className="text-xl">Having interrogated your project requirements, we’ll return with a clear path to success, breaking down timelines, risks and budgets.</p>
                <p className="text-xl">If required, we can also propose potential third parties to deliver any expertise you don’t already have in-house, leaning on our vast network of trusted contacts.</p>
                <div className="w-full flex justify-center">
           
        </div>
              </div>
            </div>
           
        </div>
        </section>
      </>
      
    );
  }