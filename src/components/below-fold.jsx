import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function BelowFold({ refs }) {

  const container = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.box');
      boxes.forEach((box) => {
        gsap.from(box, {
          y: 100,
          opacity: 0,
          stagger: .5,
          scrollTrigger: {
            trigger: box,
            start: '-60% bottom',
            end: 'bottom 50%',
            scrub: true,
          },
        });
      });
    },
    { scope: container }
  );

  return (
    <>

      <section ref={refs.workWithUs} id="working-with-us" className="bg-snow">
        <div ref={container} className="container mx-auto flex flex-col justify-center items-start gap-6 md:gap-12 py-12 md:py-14 xl:py-24  px-6">
          <h2 className="box fade text-3xl md:text-4xl xl:text-5xl ">What working with us is like</h2>

          <div className=" flex flex-col md:flex-row gap-6 md:gap-12">

            <div className="box flex flex-col bg-white p-10 lg:p-14 gap-6">
              <img src="/images/client-logos/RCSE.png" height="96" width="225" alt="Royal College of Surgeons of England Logo" />
              <blockquote className="text-base">“Andy was brilliant. He closed a complex project calmly and to clear timescales and we'd recommend him to anyone.”</blockquote>
              <p className="text-lg font-bold font-syne">James Pearson-Jadwat</p></div>
            <div className="box flex flex-col bg-white  p-10 lg:p-14 gap-6">
              <img src="/images/client-logos/discovery-channel.png" height="96" width="225" alt="Discovery Channel Logo" />
              <blockquote className="text-base">“Chris did a stellar job of building rapport with teams and gets the tough stuff done on time, on budget and with a keen attention to detail.”</blockquote>
              <p className="text-lg font-bold font-syne">Michelle Goff</p></div>
          </div>

        </div>
      </section>
    </>

  );
}