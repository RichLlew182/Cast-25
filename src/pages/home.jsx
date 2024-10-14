import { FooterBottom } from "../components/footer";
import React, {useRef } from "react";
import AboveFold from "../components/above-fold";
import { MainMenu } from "../components/navbar";
import BelowFold from "../components/below-fold";
import WhatWeDo from "../components/what-we-do";
import HowWeDoIt from "../components/how-we-do-it";
import Clients from "../components/clients";
import Testimonials from "../components/testimonials";

export default function Home() {

  const refs = {

    footer: useRef(null),
    workWithUs: useRef(null),
    whatWeDo: useRef(null),
    howWeDoIt: useRef(null),
    clients: useRef(null),
    testimonials: useRef(null)

  }
  
    const scrollTo = (ref) => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <>
        
        <MainMenu scrollTo={scrollTo}  refs={refs}/>
  
        <AboveFold scrollTo={scrollTo} refs={refs}/>
        <main>
          <BelowFold refs={refs} />
          <WhatWeDo refs={refs} />
          <HowWeDoIt refs={refs} />
          <Clients refs={refs} />
          <Testimonials refs={refs} />
        </main>
     
        <FooterBottom refs={refs}/>
      </>
      
    );
  }
  