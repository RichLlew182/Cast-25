
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

"use client";

import { Carousel } from "flowbite-react";

export default function Testimonials({refs}) {

  return (
   <section ref={refs.testimonials}className="bg-snow" id="testimonials">
      
      <div className="container mx-auto flex  flex-col justify-center items-start  gap-12 py-20 xl:py-36  px-6">

      <h2 className="box fade text-4xl sm:text-5xl lg:text-6xl dark:text-white">Testimonials</h2>
        
        <Carousel className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 1
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 2
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 3
          </div>
        </Carousel>
      </div>
   </section>
  );
}