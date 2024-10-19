import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MainMenu } from "./navbar";

export default function AboveFold({ scrollTo, refs }) {

  const container = useRef();

  useGSAP(() => {
    gsap.from(".fade", { opacity: 0, y: 20, stagger: 0.3, delay: .5 });
  }, { scope: container }); // 

  return (
    <>

      <section id="above-fold" ref={container} className="bg-tomato">
        <MainMenu scrollTo={scrollTo} refs={refs} />
        <div className="container min-h-screen h-full mx-auto flex  flex-col justify-center items-start gap-6 py-48 md:py-64 xl:py-72 px-6">
          <h1 className="fade text-4xl sm:text-5xl lg:text-7xl ">Dynamic and versatile project delivery consultancy</h1>

          <a href="#" onClick={(e) => { e.preventDefault(); e.stopPropagation(); scrollTo(refs.footer) }} className="fade text-xl sm:text-2xl flex gap-2 font-syne font-bold text-licorice hover:text-white">
            Start your project<FontAwesomeIcon icon={faCircleArrowUp} /></a>
        </div>
      </section>
    </>

  );
}