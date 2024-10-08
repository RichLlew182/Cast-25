import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FooterBottom } from "../components/footer";
import { MainMenu } from "../components/navbar";
import React, { useRef } from "react";

export default function Home() {

    const footerRef = useRef(null)
  
    const scrollToFooter = () => {
      footerRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <>
  
        <header className="absolute w-full">
          <MainMenu scrollToFooter={scrollToFooter}/>
        </header>
  
      <main className="container mx-auto flex  min-h-screen flex-col justify-center items-start gap-6 px-6">
        <h1 className="text-4xl sm:text-6xl xl:text-8xl dark:text-white">Dynamic and versatile project delivery consultancy</h1>
        <h2 className="text-3xl  xl:text-4xl dark:text-white">Website coming soon</h2>
          <a href="#"onClick={(e) => { e.preventDefault(); scrollToFooter() }} className="text-xl sm:text-2xl flex gap-2 font-syne font-bold text-licorice hover:text-white">
        Get in touch <FontAwesomeIcon icon={faCircleArrowUp} /></a>
        </main>
        <FooterBottom footerRef={footerRef}/>
      </>
      
    );
  }
  