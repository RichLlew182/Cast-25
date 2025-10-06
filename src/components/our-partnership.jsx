import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function OurPartnership({ refs }) {

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

      <section ref={refs.workWithUs} id="working-with-us" className="bg-snow">
        <div ref={container} className="container mx-auto flex flex-col justify-center items-start gap-6 md:gap-12 py-12 md:py-14 xl:py-24  px-6">


          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">

            <div className="box flex flex-col p-0 gap-6 lg:w-2/5">
              <h2 className="text-3xl md:text-4xl xl:text-5xl">But our partnership doesn’t have to end there</h2>

              <a href="#" onClick={(e) => { e.preventDefault(); e.stopPropagation(); scrollTo(refs.footer) }} className="hidden box fade text-xl sm:text-lg lg:flex gap-2 font-syne font-bold text-tomato hover:text-orange">
                Work with us<FontAwesomeIcon icon={faCircleArrowUp} /></a>
            </div>

            <div className="flex flex-col gap-6 lg:gap-10 lg:w-3/5">

              <div className="box flex flex-col p-0 gap-6">
                <h3 className="text-2xl md:text-3xl xl:text-4xl text-tomato">
                  Ongoing support
                </h3>
                <p className="text-base">Once we’ve set up or transformed your project management function, our relationship doesn’t have to stop there. We can continue to work alongside your team to ensure the structures,processes, and tools we’ve implemented are embedded successfully and deliver long-term value. This can include tailored mentoring for your project leads, upskilling team members to take on greater responsibility, and providing targeted training sessions that strengthen both technical project management capabilities and softer leadership skills.</p>
              </div>

              <div className="box flex flex-col p-0 gap-6">
                <h3 className="text-2xl md:text-3xl xl:text-4xl text-tomato">
                  Building your team
                </h3>
                <p className="text-base">Through our network of like-minded and strategically aligned PMs, we take the guesswork out of recruitment and match you with professionals who fit your organisation’s specific needs and ways of working. Whether you require short-term support to get a project over the line or a longer-term placement to lead ongoing initiatives, we can provide the right person at the right time. By outsourcing to us, you not only gain access to proven talent but also benefit from significant time and cost savings.</p>
              </div>

            </div>

          </div>
          <a href="#" onClick={(e) => { e.preventDefault(); e.stopPropagation(); scrollTo(refs.footer) }} className="flex box fade text-xl sm:text-lg lg:hidden gap-2 font-syne font-bold text-tomato hover:text-orange">
            Work with us<FontAwesomeIcon icon={faCircleArrowUp} /></a>

        </div>
      </section>
    </>

  );
}