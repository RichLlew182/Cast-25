
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Carousel, Flowbite } from "flowbite-react";
import CustomTheme from "../theme/customTheme";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

"use client";


export default function Testimonials({ refs }) {

  const container = useRef()

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
            once: true,
          },
        });
      });
    },
    { scope: container }
  );

  return (
    <section ref={refs.testimonials} className="bg-white cursor-auto" id="testimonials">

      <div ref={container} className="container mx-auto flex  flex-col justify-center items-start gap-6 md:gap-12 py-12 md:py-14 xl:py-24  px-6">

        <h2 className="box fade text-3xl md:text-4xl xl:text-5xl">Testimonials</h2>

        <Flowbite theme={{ theme: CustomTheme }}>
          <Carousel pauseOnHover slideInterval={10000} indicators={false} className="box carousel h-auto">

            <div className="slide flex flex-col h-auto items-start justify-start gap-6 px-8 sm:px-16  xl:px-32 relative">
              <blockquote className="testimonial-text text-lg sm:text-2xl  lg:text-2xl font-syne font-semibold">
                <span className="text-tomato">“</span>Chris’s diligence and proactive approach to problem-solving are crucial in navigating complex challenges and ensuring success. One of Chris’s notable qualities is his exceptional communication skills. He excels at fostering clear and open lines of communication among team members, stakeholders and clients.<span className="text-tomato">”</span>
              </blockquote>
              <p className="font-prompt text-lg sm:text-base font-light">Emma Saunders | Avis Budget Group</p>
            </div>

            <div className="slide flex flex-col h-auto items-start justify-start gap-6 px-8 sm:px-16  xl:px-32 relative">
              <blockquote className="testimonial-text text-lg sm:text-2xl lg:text-2xl font-syne font-semibold">
                <span className="text-tomato">“</span>Andy focused on what we needed to do and ensured it happened on time and to budget. He was always keen to ensure we understood what we were asking for and making sure it was what we really needed. If you’re looking for someone to get you on track and moving forward, he’s your guy.<span className="text-tomato">”</span>
              </blockquote>
              <p className="font-prompt text-lg sm:text-base font-light">Jeff Wass | Royal Yachting Association</p>
            </div>

            <div className="slide flex flex-col h-auto items-start justify-start gap-6 px-8 sm:px-16  xl:px-32 relative">
              <blockquote className="testimonial-text text-lg sm:text-2xl lg:text-2xl font-syne font-semibold">
                <span className="text-tomato">“</span>Chris was an amazing team worker, consistently striving for excellence and taking the time to understand the local context and nuances<span className="text-tomato">”</span>
              </blockquote>
              <p className="font-prompt text-lg sm:text-base font-light">Elena Hermosilla | Discovery Channel</p>
            </div>



          </Carousel>
        </Flowbite >
      </div>
    </section>
  );
}
