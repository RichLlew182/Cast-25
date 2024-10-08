import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FooterBottom } from "../components/footer";
import { MainMenu } from "../components/navbar";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {

    const container = useRef();

    useGSAP(() => {
        gsap.from(".fade", {opacity: 0, y: 20, stagger: 0.3, delay: .5});
    }, { scope: container }); // 

  

    const footerRef = useRef(null)
  
    const scrollToFooter = () => {
      footerRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <>
  
        <header className="absolute w-full">
          <MainMenu className="fade" scrollToFooter={scrollToFooter}/>
        </header>
  
      <main ref={container} className="container mx-auto flex  min-h-screen flex-col justify-center items-start gap-6 px-6">
        <h1 className="fade text-4xl sm:text-6xl xl:text-8xl dark:text-white">Dynamic and versatile project delivery consultancy</h1>
        <h2 className="fade text-3xl  xl:text-4xl dark:text-white">Website coming soon</h2>
          <a href="#"onClick={(e) => { e.preventDefault(); scrollToFooter() }} className="fade text-xl sm:text-2xl flex gap-2 font-syne font-bold text-licorice hover:text-white">
        Get in touch <FontAwesomeIcon icon={faCircleArrowUp} /></a>
        </main>
        <FooterBottom footerRef={footerRef}/>
      </>
      
    );
  }
  