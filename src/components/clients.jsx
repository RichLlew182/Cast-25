import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger)

export default function Clients({ scrollTo, refs }) {

  const container = useRef()

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.box');
      boxes.forEach((box) => {
        gsap.from(box, {
          y: 100,
          opacity: 0,
          stagger: .5,
          scrollTrigger: {
            trigger: box,
            start: '-60% bottom',
            end: 'bottom 50%',
            scrub: true,
            once: true,
          },
        });
      });
    },
    { scope: container }
  );

  useEffect(() => {

    const clients1 = document.querySelector('#clients-1');
    const clients2 = document.querySelector('#clients-2');

    if (clients1 && clients2) {
      gsap.set(clients1, { x: '-100%' });
      gsap.set(clients2, { x: '-25%' });

      gsap.to(clients1, {
        x: '-75%',
        scrollTrigger: {
          trigger: '#clients',
          start: 'top 90%',
          end: 'bottom 10%',
          scrub: true,
        },
      });

      gsap.to(clients2, {
        x: '-50%',
        scrollTrigger: {
          trigger: '#clients',
          start: 'top 90%',
          end: 'bottom 10%',
          scrub: true,
        },
      });
    }

    // Cleanup function to kill scroll triggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []); // Empty
  ;

  return (
    <>

      <section ref={refs.clients} id="clients" className="bg-tomato">
        <div ref={container} className="clients-container container mx-auto flex  flex-col justify-center items-start gap-12 sm:gap-16 py-12 md:py-14 xl:py-24 md:gap-20 px-6">
          <h2 className="box fade text-3xl md:text-4xl xl:text-5xl ">Who we've worked with</h2>

          <div id="clients-1" className="box clients-marquee relative flex flex-row">

            <img src="/images/client-logos/RCSE.png" width="160" height="auto" alt="Royal College of Surgeons of England Logo" className="clients object-contain" />
            <img src="/images/client-logos/sainsburys.png" width="160" height="auto" alt="Sainsburys Logo" className="clients object-contain" />
            <img src="/images/client-logos/discovery-channel.png" width="160" height="auto" alt="Discovery Channel Logo" className="clients object-contain" />
            <img src="/images/client-logos/MQA.png" width="160" height="auto" alt="MQA Logo" className="clients object-contain" />
            <img src="/images/client-logos/RYA.png" width="160" height="auto" alt="RYA Logo" className="clients object-contain" />
            <img src="/images/client-logos/ppf.png" width="160" height="auto" alt="Pension Protection Fund Logo" className="clients object-contain" />
            <img src="/images/client-logos/RCSE.png" width="160" height="auto" alt="Royal College of Surgeons of England Logo" className="clients object-contain" />
            <img src="/images/client-logos/sainsburys.png" width="160" height="auto" alt="Sainsburys Logo" className="clients object-contain" />
            <img src="/images/client-logos/discovery-channel.png" width="160" height="auto" alt="Discovery Channel Logo" className="clients object-contain" />
            <img src="/images/client-logos/MQA.png" width="160" height="auto" alt="MQA Logo" className="clients object-contain" />
            <img src="/images/client-logos/RYA.png" width="160" height="auto" alt="RYA Logo" className="clients object-contain" />
            <img src="/images/client-logos/ppf.png" width="160" height="auto" alt="Pension Protection Fund Logo" className="clients object-contain" />

          </div>

          <div id="clients-2" className="box clients-marquee relative flex flex-row">

            <img src="/images/client-logos/CIPD.png" width="160" height="auto" alt="CIPD Logo" className="clients object-contain" />
            <img src="/images/client-logos/EE.png" width="160" height="auto" alt="EE Logo" className="clients object-contain" />
            <img src="/images/client-logos/google.png" width="160" height="auto" alt="Google Logo" className="clients object-contain" />
            <img src="/images/client-logos/hyundai.png" width="160" height="auto" alt="Hyundai Logo" className="clients object-contain" />
            <img src="/images/client-logos/ovo-energy.png" width="160" height="auto" alt="Ovo Energy Logo" className="clients object-contain" />
            <img src="/images/client-logos/vodafone.png" width="160" height="auto" alt="Vodafone Logo" className="clients object-contain" />
            <img src="/images/client-logos/visa.png" width="160" height="auto" alt="Visa Logo" className="clients object-contain" />
            <img src="/images/client-logos/CIPD.png" width="160" height="auto" alt="CIPD Logo" className="clients object-contain" />
            <img src="/images/client-logos/EE.png" width="160" height="auto" alt="EE Logo" className="clients object-contain" />
            <img src="/images/client-logos/google.png" width="160" height="auto" alt="Google Logo" className="clients object-contain" />
            <img src="/images/client-logos/hyundai.png" width="160" height="auto" alt="Hyundai Logo" className="clients object-contain" />
            <img src="/images/client-logos/ovo-energy.png" width="160" height="auto" alt="Ovo Energy Logo" className="clients object-contain" />
            <img src="/images/client-logos/vodafone.png" width="160" height="auto" alt="Vodafone Logo" className="clients object-contain" />


          </div>

          <div className="box w-full flex justify-center">
            <a href="#" onClick={(e) => { e.preventDefault(); scrollTo(refs.footer) }} className="fade text-xl sm:text-lg flex gap-2 font-syne font-bold text-licorice hover:text-white">
              Start your project<FontAwesomeIcon icon={faCircleArrowUp} /></a>
          </div>

        </div>
      </section>
    </>

  );
}