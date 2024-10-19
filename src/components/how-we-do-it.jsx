import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function HowWeDoIt({ scrollTo, refs }) {

  const container = useRef();

  useGSAP(() => {
    const steps = gsap.utils.toArray(".steps");
    steps.forEach((step) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: step,
          start: 'top 10%',
          end: 'bottom 10%',
          pin: true,
          pinSpacing: false,
          scrub: true,
          // markers: true
        }
      });

      tl.to(step, {
        autoAlpha: 1
      }).to(
        step,
        {
          autoAlpha: 0
        },
        0.5
      );
    });
  });

  return (
    <>

      <section ref={refs.howWeDoIt} id="how-we-do-it" className="bg-snow">
        <div ref={container} className="container mx-auto flex  flex-col justify-center items-start  gap-12 py-20 xl:py-36 px-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl dark:text-white">How we do it</h2>

          <div id="scroller" className="flex flex-col">

            <div id="step1" className="steps flex flex-col bg-white  p-10 md:p-20 gap-6">
              <h3 className="text-2xl sm:text-4xl xl:text-5xl dark:text-white">Responding to your brief</h3>
              <p className="text-lg md:text-xl">Having interrogated your project requirements, we’ll return with a clear path to success, breaking down timelines, risks and budgets.</p>
              <p className="text-lg md:text-xl">If required, we can also propose potential third parties to deliver any expertise you don’t already have in-house, leaning on our vast network of trusted contacts.</p>
            </div>

            <div id="step2" className="steps flex flex-col bg-white  p-10 md:p-20 gap-6">
              <h3 className=" text-2xl sm:text-4xl xl:text-5xl dark:text-white">Setting a strong platform</h3>
              <p className="text-lg md:text-xl">Upon appointment, we’ll arrange a series of kick-off meetings with all internal and external stakeholders, to ensure alignment from the off.</p>
              <p className="text-lg md:text-xl">We can help you determine which communication tools to use or have the flexibility to work with any existing platforms you have, as well as agreeing meeting cadence and frequency with each stakeholder.</p>
            </div>

            <div id="step3" className="steps flex flex-col bg-white  p-10 md:p-20 gap-6">
              <h3 className=" text-2xl sm:text-4xl xl:text-5xl dark:text-white">Choosing the right methodology</h3>
              <p className="text-lg md:text-xl">Every project management approach has its virtues and we can work to any methodology.</p>
              <p className="text-lg md:text-xl">Experience has taught us that most projects benefit from elements of all, but we can adopt fully Waterfall, Agile or Prince2 processes as your project or organisation necessitates.</p>
            </div>

            <div id="step4" className="steps flex flex-col bg-white  p-10 md:p-20 gap-6">
              <h3 className=" text-2xl sm:text-4xl xl:text-5xl dark:text-white">Preparedness for problems</h3>
              <p className="text-lg md:text-xl">We’re not naïve enough to think that there won’t be any bumps in the road, but our calm preparedness for such events means were are able to respond clearly and quickly.</p>
              <p className="text-lg md:text-xl">Building in appropriate contingency to timings and budgets is a key tenet of our approach, to give you peace of mind that your project will stay on the right track.</p>
            </div>

            <div id="step5" className="flex flex-col bg-white  p-10 md:p-20 gap-6">
              <h3 className=" text-2xl sm:text-4xl xl:text-5xl dark:text-white">Project end and ongoing support</h3>
              <p className="text-lg md:text-xl">The end of a project doesn’t necessarily mean the end of our work together.</p>
              <p className="text-lg md:text-xl">Depending on your project’s needs, at the formal end of a delivery we also offer ongoing support either on a specific requirement or as part of our fractional project management offering.</p>
            </div>

          </div>

          <a href="#" onClick={(e) => { e.preventDefault(); e.stopPropagation(); scrollTo(refs.footer) }} className="box fade text-xl sm:text-2xl flex gap-2 font-syne font-bold text-tomato hover:text-orange">
            Start your project<FontAwesomeIcon icon={faCircleArrowUp} /></a>

        </div>
      </section>
    </>

  );
}