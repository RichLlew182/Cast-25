
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Carousel, Flowbite } from "flowbite-react";
import CustomTheme from "../theme/customTheme";

gsap.registerPlugin(ScrollTrigger)

"use client";


export default function Testimonials({ refs }) {

  return (
    <section ref={refs.testimonials} className="bg-snow cursor-auto" id="testimonials">

      <div className="container mx-auto flex  flex-col justify-center items-start gap-6  md:gap-14 py-12 md:py-20 xl:py-36  px-6">

        <h2 className="box fade text-4xl sm:text-5xl xl:text-6xl ">Testimonials</h2>

        <Flowbite theme={{ theme: CustomTheme }}>
          <Carousel slideInterval={5000} indicators={false} className="carousel h-auto">

            <div className="slide flex flex-col h-auto items-start justify-start gap-6 px-10 sm:px-16 md:px-20 xl:px-40 relative">
              <blockquote className="testimonial-text text-xl sm:text-2xl md:text-3xl lg:text-4xl font-syne font-semibold">
                <span className="text-tomato">“</span>Chris has great ability to seamlessly coordinate diverseteams and resources, ensuring that projects are delivered on time and within budget. His diligence and proactive approach to problem-solving are crucial in navigating comple challenges and ensuring project success. One of Chris’s notable qualities is his exceptional communication skills. He excels at fostering clear and ope lines of communication among team members, stakeholders and clients.<span className="text-tomato">”</span>
              </blockquote>
              <p className="font-prompt text-lg sm:text-xl font-light">Emma Saunders - Avis Budget</p>
            </div>

            <div className="slide flex flex-col h-auto items-start justify-start gap-6 px-10 sm:px-16 md:px-20 xl:px-40 relative">
              <blockquote className="testimonial-text text-xl sm:text-2xl md:text-3xl lg:text-4xl font-syne font-semibold">
                <span className="text-tomato">“</span>Andy was a great support and essentially became part of our team. Andy worked with us for a year, during which time Andy focused on what we needed to do and ensured it happened on time and to budget. He was always keen to ensure we understood what we were asking for and making sure it was what we really needed. If you’re looking for someone to get you on track and moving forward, he’s your guy.<span className="text-tomato">”</span>
              </blockquote>
              <p className="font-prompt text-lg sm:text-xl font-light">Jeff Wass | Royal Yachting Association</p>
            </div>

            <div className="slide flex flex-col h-auto items-start justify-start gap-6 px-10 sm:px-16 md:px-20 xl:px-40 relative">
              <blockquote className="testimonial-text text-xl sm:text-2xl md:text-3xl lg:text-4xl font-syne font-semibold">
                <span className="text-tomato">“</span>Chris led our multi-site project calmly and diligently, delivering on time and seamlessly integrating with our local team to ensure all parties understood deadlines and responsibilities - even as parts of the scope changed. He was an amazing team worker, consistently striving for excellence in the project and taking the time to understand the local context and nuances<span className="text-tomato">”</span>
              </blockquote>
              <p className="font-prompt text-lg sm:text-xl font-light">Elena Hermosilla, Discovery Channel</p>
            </div>



          </Carousel>
        </Flowbite >
      </div>
    </section>
  );
}
