
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Carousel, Flowbite } from "flowbite-react";
import CustomTheme from "../theme/customTheme";

gsap.registerPlugin(ScrollTrigger)

"use client";


export default function Testimonials({refs}) {

  return (
   <section ref={refs.testimonials}className="bg-snow cursor-auto" id="testimonials">
      
      <div className="container mx-auto flex  flex-col justify-center items-start  gap-14 py-20 xl:py-36  px-6">

      <h2 className="box fade text-4xl sm:text-5xl lg:text-6xl dark:text-white">Testimonials</h2>
        
      <Flowbite theme={{ theme: CustomTheme }}>
          <Carousel slideInterval={5000} indicators={false} className="h-auto">
          <div className=" flex flex-col h-auto items-start justify-start text-4xl font-syne font-semibold gap-6 px-12 xl:px-44 relative">
            <blockquote className="testimonial-text">
                <span className="text-tomato">“</span>Andy was a great support and essentially became part of our team. Andy worked with us for a year, during which time Andy focused on what we needed to do and ensured it happened on time and to budget. He was always keen to ensure we understood what we were asking for and making sure it was what we really needed. If you’re looking for someone to get you on track and moving forward, he’s your guy.<span className="text-tomato">”</span>
            </blockquote>
                <p className="font-prompt text-xl font-light">Jeff Wass | Royal Yachting Association</p>
          </div>
          <div className="flex flex-col h-auto items-start justify-start text-4xl font-syne font-semibold gap-6 px-12 xl:px-44 relative">
            <blockquote className="testimonial-text">
              <span className="text-tomato">“</span>Andy was a great support and essentially became part of our team. Andy worked with us for a year, during which time Andy focused on what we needed to do and ensured it happened on time and to budget. He was always keen to ensure we understood what we were asking for and making sure it was what we really needed. If you’re looking for someone to get you on track and moving forward, he’s your guy.<span className="text-tomato">”</span>
            </blockquote>
            <p className="font-prompt text-xl font-light">Jeff Wass | Royal Yachting Association</p>
          </div>
          <div className="flex flex-col h-auto items-start justify-start text-4xl font-syne font-semibold gap-6 px-12 xl:px-44 relative">
            <blockquote className="testimonial-text">
              <span className="text-tomato">“</span>Andy was a great support and essentially became part of our team. Andy worked with us for a year, during which time Andy focused on what we needed to do and ensured it happened on time and to budget. He was always keen to ensure we understood what we were asking for and making sure it was what we really needed. If you’re looking for someone to get you on track and moving forward, he’s your guy.<span className="text-tomato">”</span>
              </blockquote>
              <p className="font-prompt text-xl font-light">Jeff Wass | Royal Yachting Association</p>
          </div>
          </Carousel>
          </Flowbite >
      </div>
   </section>
  );
}
