import React, {useEffect} from "react";
import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger)

export default function Clients({ scrollTo, refs }) {

  useEffect(() => {

    const clients1 = document.querySelector('#clients-1');
    const clients2 = document.querySelector('#clients-2');

    if (clients1 && clients2) {
      gsap.set(clients1, { x: '-100%' });
      gsap.set(clients2, { x: '0%' });

      gsap.to(clients1, {
        x: '-75%',
        scrollTrigger: {
          trigger: '#clients',
          start: 'top 90%',
          end: 'bottom 10%',
          scrub: true,
          // markers: true,
        },
      });

      gsap.to(clients2, {
        x: '-25%',
        scrollTrigger: {
          trigger: '#clients',
          start: 'top 90%',
          end: 'bottom 10%',
          scrub: true,
          // markers: true,
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

      <section  id="clients" className="bg-tomato">
        <div ref={refs.clients} className="clients-container container mx-auto flex  flex-col justify-center items-start  gap-16 py-20 xl:py-36 md:gap-24 px-6">
          <h2 className="box fade text-4xl sm:text-5xl lg:text-6xl dark:text-white">Who we've worked with</h2>

          <div id="clients-1" className="clients-marquee relative flex flex-row">

            <img src="/images/client-logos/RCSE.png" width="210" height="auto" alt="Royal College of Surgeons of England Logo" className="clients object-contain" />
            <img src="/images/client-logos/sainsburys.png" width="210" height="auto" alt="Sainsburys Logo" className="clients object-contain" />
            <img src="/images/client-logos/discovery-channel.png" width="210" height="auto" alt="Discovery Channel Logo" className="clients object-contain" />
            <img src="/images/client-logos/MQA.png" width="210" height="auto" alt="MQA Logo" className="clients object-contain" />
            <img src="/images/client-logos/RYA.png" width="210" height="auto" alt="RYA Logo" className="clients object-contain" />
            <img src="/images/client-logos/ppf.png" width="210" height="auto" alt="Pension Protection Fund Logo" className="clients object-contain" />
            <img src="/images/client-logos/RCSE.png" width="210" height="auto" alt="Royal College of Surgeons of England Logo" className="clients object-contain" />
            <img src="/images/client-logos/sainsburys.png" width="210" height="auto" alt="Sainsburys Logo" className="clients object-contain" />
            <img src="/images/client-logos/discovery-channel.png" width="210" height="auto" alt="Discovery Channel Logo" className="clients object-contain" />
            <img src="/images/client-logos/MQA.png" width="210" height="auto" alt="MQA Logo" className="clients object-contain" />
            <img src="/images/client-logos/RYA.png" width="210" height="auto" alt="RYA Logo" className="clients object-contain" />
            <img src="/images/client-logos/ppf.png" width="210" height="auto" alt="Pension Protection Fund Logo" className="clients object-contain" />

          </div>

          <div id="clients-2" className="clients-marquee relative flex flex-row">

            <img src="/images/client-logos/CIPD.png" width="210" height="auto" alt="CIPD Logo" className="clients object-contain" />
            <img src="/images/client-logos/EE.png" width="210" height="auto" alt="EE Logo" className="clients object-contain" />
            <img src="/images/client-logos/airbnb.png" width="210" height="auto" alt="Airbnb Logo" className="clients object-contain" />
            <img src="/images/client-logos/hyundai.png" width="210" height="auto" alt="Hyundai Logo" className="clients object-contain" />
            <img src="/images/client-logos/ovo-energy.png" width="210" height="auto" alt="Ovo Energy Logo" className="clients object-contain" />
            <img src="/images/client-logos/vodafone.png" width="210" height="auto" alt="Vodafone Logo" className="clients object-contain" />
            <img src="/images/client-logos/visa.png" width="210" height="auto" alt="Visa Logo" className="clients object-contain" />
            <img src="/images/client-logos/CIPD.png" width="210" height="auto" alt="CIPD Logo" className="clients object-contain" />
            <img src="/images/client-logos/EE.png" width="210" height="auto" alt="EE Logo" className="clients object-contain" />
            <img src="/images/client-logos/airbnb.png" width="210" height="auto" alt="Airbnb Logo" className="clients object-contain" />
            <img src="/images/client-logos/hyundai.png" width="210" height="auto" alt="Hyundai Logo" className="clients object-contain" />
            <img src="/images/client-logos/ovo-energy.png" width="210" height="auto" alt="Ovo Energy Logo" className="clients object-contain" />
            <img src="/images/client-logos/vodafone.png" width="210" height="auto" alt="Vodafone Logo" className="clients object-contain" />
          

          </div>

        <div className="w-full flex justify-center">
            <a href="#"onClick={(e) => { e.preventDefault(); scrollTo(refs.footer) }} className="fade text-xl sm:text-2xl flex gap-2 font-syne font-bold text-licorice hover:text-white">
            Start your project<FontAwesomeIcon icon={faCircleArrowUp} /></a>
        </div>

        </div>
      </section>
    </>

  );
}