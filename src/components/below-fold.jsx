import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function BelowFold({refs}) {

    const container = useRef();

    useGSAP(() => {
        gsap.from(".fade", {opacity: 0, y: 20, stagger: 0.3, delay: .5});
    }, { scope: container }); // 
  
    return (
      <>
  
      <section ref={refs.workWithUs}id="working-with-us" className="bg-snow">
        <div ref={container} className="container mx-auto flex  flex-col justify-center items-start gap-20 py-36 px-6">
          <h2 className="fade text-4xl sm:text-5xl lg:text-6xl dark:text-white">What working with us is like</h2>
          
            <div className="flex flex-col lg:flex-row gap-12">
              
              <div className="flex flex-col bg-white p-20 gap-6">
                <img src="/images/client-logos/RCSE.png" height="158" width="370" alt="Royal College of Surgeons of England Logo" />
                <blockquote className="text-xl">“Andy was brilliant. He closed a complex project calmly and to clear timescales and we'd recommend him to anyone.”</blockquote>
                <p className="text-2xl font-bold font-syne">James Pearson-Jadwat</p></div>
              <div className="flex flex-col bg-white p-20 gap-6">
                <img src="/images/client-logos/discovery-channel.png" height="157" width="370" alt="Discovery Channel Logo" />
                <blockquote className="text-xl">“Chris did a stellar job of building rapport with teams and gets the tough stuff done on time, on budget and with a keen attention to detail.”</blockquote>
                <p className="text-2xl font-bold font-syne">Andrew Shields</p></div>
            </div>
           
        </div>
        </section>
      </>
      
    );
  }