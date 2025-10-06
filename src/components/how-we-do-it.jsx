import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Progress } from "flowbite-react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HowWeDoIt({ scrollTo, refs }) {

  const container = useRef();
  const [count, setCount] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [buttonText, setButtonText] = useState('Next');

  const [progressValue, setProgressValue] = useState(count * 33.3333);

  useEffect(() => {
    gsap.to({ val: progressValue }, {
      val: count * 33.3333,
      duration: .75,
      ease: 'power2.out',
      onUpdate: function () {
        setProgressValue(this.targets()[0].val);
      }
    });
  }, [count, progressValue]);

  useEffect(() => {
    gsap.to('.fade-steps', {
      opacity: 0,
      duration: 0,
      onComplete: () => {
        gsap.to('.fade-steps', {
          delay: 0.2,
          opacity: 1,
          duration: .75,
          stagger: 0.3,
        });
      }
    });
  }, [count]); //

  const loadStep = (step) => {
    if (step <= 3) {

      setButtonText('Next')
      setActiveStep(step);
      setCount(step)// Increment count safely using the function form of setState 

    }

    if (step === 3) {
      setButtonText('Start your project')
    }
  };

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

  let steps = [{
    id: 1,
    title: "Immersing ourselves in your organisation",
    paragraphs:
      ['Meeting all departments that interact with project management and production to fully understand workflows and relationships.',]

  }, {
    id: 2,
    title: "Reviewing recent projects / modelling future projects",
    paragraphs:
      ['Understanding how and why previous projects were successful (or not) will help us identify where improvements can be made. Similarly, preparing for the type of work you hope to deliver will ensure you’re fully prepared.']
  }, {
    id: 3,
    title: "Defining your foundations for success",
    paragraphs:
      ['In collaboration with all relevant stakeholders, we’ll use our expertise and your knowledge of your business to devise a bespoke framework of processes and documentation.']
  }, {
    id: 4,
    title: "Implementing and learning",
    paragraphs:
      ['Once aligned, we’d quickly be able to put into place our proposals, offering ongoing support to ensure we adapt and refine to any real-life experiences.']
  },];

  return (
    <>

      <section ref={refs.howWeDoIt} id="how-we-do-it" className="bg-snow">
        <div ref={container} className="container mx-auto flex  flex-col justify-center items-start gap-6 md:gap-12 py-12 md:py-14 xl:py-24 px-6">
          <h2 className="box text-3xl md:text-4xl xl:text-5xl ">This is how we do it</h2>

          <div className="box steps flex flex-col md:flex-col  bg-white gap-6 md:gap-12 p-10 lg:p-14 ">

            <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-14">
              <div className="flex w-full md:w-auto justify-between sm:justify-start gap-auto flex-wrap flex-row md:flex-col gap-2 sm:gap-6">
                <button onClick={() => loadStep(0)} className={`step-nums text-base flex w-8 h-8 lining-nums rounded items-center justify-center font-syne font-bold ${activeStep === 0 ? 'bg-tomato' : 'bg-snow'
                  } text-licorice`}>1</button>
                <button onClick={() => loadStep(1)} className={`step-nums text-base flex w-8 h-8 lining-nums rounded items-center justify-center font-syne font-bold ${activeStep === 1 ? 'bg-tomato' : 'bg-snow'
                  } text-licorice`}>2</button>
                <button onClick={() => loadStep(2)} className={`step-nums text-base flex w-8 h-8 lining-nums rounded items-center justify-center font-syne font-bold ${activeStep === 2 ? 'bg-tomato' : 'bg-snow'
                  } text-licorice`}>3</button>
                <button onClick={() => loadStep(3)} className={`step-nums text-base flex w-8 h-8 lining-nums rounded items-center justify-center font-syne font-bold ${activeStep === 3 ? 'bg-tomato' : 'bg-snow'
                  } text-licorice`}>4</button>
              </div>

              <div className="flex flex-col gap-6">

                <div className="flex flex-col gap-6">
                  <h3 className="fade-steps text-2xl md:text-3xl xl:text-4xl ">{steps[count].title}</h3>

                  {steps[count].paragraphs.map((p, index) => {
                    return <p key={index} className="fade-steps text-base">{p}</p>
                  })
                  }

                </div>

                <a href="#" onClick={(e) => {
                  e.preventDefault(); e.stopPropagation();

                  if (activeStep !== 3) {
                    loadStep(count + 1);
                  } else {
                    scrollTo(refs.footer);
                  }
                }}

                  className="fade-steps text-xl sm:text-lg flex gap-2 font-syne font-bold text-tomato hover:text-orange"> {buttonText}<FontAwesomeIcon icon={activeStep !== 3 ? faCircleArrowRight : faCircleArrowUp} />

                </a>

              </div>

            </div>

            <Progress size="lg" progress={progressValue} color="red" className="w-full" />

          </div>

        </div>
      </section >
    </>

  );
}
