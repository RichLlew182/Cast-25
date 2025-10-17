import { FooterBottom } from "../components/footer";
import React, { useRef } from "react";
import AboveFold from "../components/above-fold";
import PartnershipPillars from "../components/partnership-pillars";
import HowWeDoIt from "../components/how-we-do-it";
import Testimonials from "../components/testimonials";
import ExtendingOurPartnership from "../components/extending-our-partnership";

export default function Home() {

  const refs = {

    footer: useRef(null),
    workWithUs: useRef(null),
    whatWeDo: useRef(null),
    howWeDoIt: useRef(null),
    testimonials: useRef(null),
    partnershipPillars: useRef(null),
    extendingurPartnership: useRef(null)

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
        <PartnershipPillars scrollTo={scrollTo} refs={refs} />
        <ExtendingOurPartnership scrollTo={scrollTo} refs={refs} />
        <HowWeDoIt scrollTo={scrollTo} refs={refs} />
        <Testimonials scrollTo={scrollTo} refs={refs} />
      </main>

      <FooterBottom refs={refs} />
    </>

  );
}
