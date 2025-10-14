import { FooterBottom } from "../components/footer";
import React, { useRef } from "react";
import AboveFold from "../components/above-fold";
import BelowFold from "../components/below-fold";
import WhatWeDo from "../components/what-we-do";
import HowWeDoIt from "../components/how-we-do-it";
import Testimonials from "../components/testimonials";

export default function Home() {

  const refs = {

    footer: useRef(null),
    workWithUs: useRef(null),
    whatWeDo: useRef(null),
    howWeDoIt: useRef(null),
    testimonials: useRef(null)

  }

  const scrollTo = (refs) => {
    if (!refs) return

    const element = refs.current?.getBoundingClientRect().top + window.scrollY

    window.scroll({
      top: element,
      behavior: "smooth"
    })
  }

  return (
    <>

      <AboveFold scrollTo={scrollTo} refs={refs} />
      <main>
        <BelowFold scrollTo={scrollTo} refs={refs} />
        <WhatWeDo scrollTo={scrollTo} refs={refs} />
        <HowWeDoIt scrollTo={scrollTo} refs={refs} />
        <Testimonials scrollTo={scrollTo} refs={refs} />
      </main>

      <FooterBottom refs={refs} />
    </>

  );
}
