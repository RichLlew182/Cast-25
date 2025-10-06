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
        <div className="container min-h-screen h-full mx-auto flex  flex-col justify-center items-start gap-8 py-36 xl:py-52 px-6">
          <div className="flex flex-col gap-2" >
            <h1 className="fade text-6xl sm:text-7xl lg:text-8xl font-semibold">CAST25
            </h1>
            <h2 className="fade text-4xl sm:text-5xl lg:text-6xl ">Empowering teams to deliver with confidence
            </h2>
          </div>

          <a href="#" onClick={(e) => { e.preventDefault(); e.stopPropagation(); scrollTo(refs.whatWeDo) }} className="fade text-xl sm:text-lg flex gap-2 font-syne font-bold text-licorice hover:text-white">
            Work with us<FontAwesomeIcon icon={faCircleArrowUp} /></a>
        </div>
      </section>
    </>

  );
}