import { FooterBottom } from "../components/footer";
import React, {useRef } from "react";
import AboveFold from "../components/above-fold";
import { MainMenu } from "../components/navbar";
import BelowFold from "../components/below-fold";

export default function Home() {

  const refs = {

      footer: useRef(null),
      workWithUs: useRef(null),
  
  }
  
    const scrollTo = (ref) => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <>
        
        <MainMenu scrollTo={scrollTo}  refs={refs}/>
  
        <AboveFold scrollTo={scrollTo} refs={refs}/>
        <main><BelowFold refs={refs}/></main>
     
        <FooterBottom refs={refs}/>
      </>
      
    );
  }
  