import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { Progress } from "flowbite-react";
// import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HowWeDoIt({ scrollTo, refs }) {

  const container = useRef();
  const [count, setCount] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [buttonText, setButtonText] = useState('Next');

  const loadStep = (step) => {
    if (step <= 4) {
      setButtonText('Next')
      setActiveStep(step);
      setCount(step)// Increment count safely using the function form of setState
    }

    if (step === 4) {
      setButtonText('Start your project')
    }
  };

  let steps = [{
    id: 1,
    title: "Responding to your brief",
    paragraphs:
      ['Having interrogated your project requirements, we’ll return with a clear path to success, breaking down timelines, risks and budgets. ',
        'If required, we can also propose potential third parties to deliver any expertise you don’t already have in-house, leaning on our vast network of trusted contacts.'
      ]

  }, {
    id: 2,
    title: "Setting a strong platform",
    paragraphs:
      ['Upon appointment, we’ll arrange a series of kick-off meetings with all internal and external stakeholders, to ensure alignment from the off.  ',
        'We can help you determine which communication tools to use or have the flexibility to work with any existing platforms you have, as well as agreeing meeting cadence and frequency with each stakeholder.']
  }, {
    id: 3,
    title: "Choosing the right methodology",
    paragraphs:
      ['Every project management approach has its virtues and we can work to any methodology. ',
        'Experience has taught us that most projects benefit from elements of all, but we can adopt fully Waterfall, Agile or Prince2 processes as your project or organisation necessitates.']
  }, {
    id: 4,
    title: "Preparedness for problems",
    paragraphs:
      ['We’re not naïve enough to think that there won’t be any bumps in the road, but our calm preparedness for such events means were are able to respond clearly and quickly.  ',
        'Building in appropriate contingency to timings and budgets is a key tenet of our approach, to give you peace of mind that your project will stay on the right track.']
  }, {
    id: 5,
    title: "Project end and ongoing support",
    paragraphs:
      ['The end of a project doesn’t necessarily mean the end of our work together. ',
        'Depending on your project’s needs, at the formal end of a delivery we also offer ongoing support either on a specific requirement or as part of our fractional project management offering.']
  },];

  return (
    <>

      <section ref={refs.howWeDoIt} id="how-we-do-it" className="bg-snow">
        <div ref={container} className="container mx-auto flex  flex-col justify-center items-start  gap-12 py-12 md:py-20 xl:py-36 px-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl ">How we do it</h2>

          <div className="steps flex flex-col md:flex-col  bg-white gap-6 md:gap-12 p-10 lg:p-20 ">

            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="flex w-full md:w-auto justify-between md:justify-start gap-auto flex-wrap flex-row md:flex-col gap-2 md:gap-6">
                <button onClick={() => loadStep(0)} className={`text-xl flex w-10 h-10 lining-nums rounded items-center justify-center font-syne font-bold ${activeStep === 0 ? 'bg-tomato' : 'bg-snow'
                  } text-licorice`}>1</button>
                <button onClick={() => loadStep(1)} className={`text-xl flex w-10 h-10 lining-nums rounded items-center justify-center font-syne font-bold ${activeStep === 1 ? 'bg-tomato' : 'bg-snow'
                  } text-licorice`}>2</button>
                <button onClick={() => loadStep(2)} className={`text-xl flex w-10 h-10 lining-nums rounded items-center justify-center font-syne font-bold ${activeStep === 2 ? 'bg-tomato' : 'bg-snow'
                  } text-licorice`}>3</button>
                <button onClick={() => loadStep(3)} className={`text-xl flex w-10 h-10 lining-nums rounded items-center justify-center font-syne font-bold ${activeStep === 3 ? 'bg-tomato' : 'bg-snow'
                  } text-licorice`}>4</button>
                <button onClick={() => loadStep(4)} className={`text-xl flex w-10 h-10 lining-nums rounded items-center justify-center font-syne font-bold ${activeStep === 4 ? 'bg-tomato' : 'bg-snow'
                  } text-licorice`}>5</button>
              </div>

              <div className="flex flex-col gap-6">

                <div className="flex flex-col gap-6">
                  <h3 className="text-2xl sm:text-4xl">{steps[count].title}</h3>
                  <p className="text-lg md:text-xl">{steps[count].paragraphs[0]}</p>
                  <p className="text-lg md:text-xl">{steps[count].paragraphs[1]}</p>
                </div>

                <a href="#" onClick={(e) => {
                  e.preventDefault(); e.stopPropagation();

                  if (activeStep !== 4) {
                    loadStep(count + 1);
                  } else {
                    scrollTo(refs.footer);
                  }
                }}

                  className="text-xl sm:text-2xl flex gap-2 font-syne font-bold text-tomato hover:text-orange"> {buttonText}<FontAwesomeIcon icon={activeStep !== 4 ? faCircleArrowRight : faCircleArrowUp} />

                </a>

              </div>

            </div>

            <Progress size="lg" progress={count * 25} color="red" className="w-full" />

          </div>

        </div>
      </section >
    </>

  );
}