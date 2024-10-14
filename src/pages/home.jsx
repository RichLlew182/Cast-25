import { FooterBottom } from "../components/footer";
import React, { useRef } from "react";
import AboveFold from "../components/above-fold";
import { MainMenu } from "../components/navbar";
import BelowFold from "../components/below-fold";

export default function Home() {

    const footerRef = useRef(null)
  
    const scrollToFooter = () => {
      footerRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <>
        
        <MainMenu scrollToFooter={scrollToFooter} />
  
        <AboveFold scrollToFooter={scrollToFooter} />
        <main><BelowFold /></main>
     
        <FooterBottom footerRef={footerRef}/>
      </>
      
    );
  }
  