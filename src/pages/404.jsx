import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { MainMenu } from "../components/navbar";
import { FooterBottom } from "../components/footer";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function NotFound() {

  const container = useRef();

  useGSAP(() => {
    gsap.from(".fade", { opacity: 0, y: 20, stagger: 0.3, delay: .5 });
  }, { scope: container }); // 

  const refs = {

    footer: useRef(null),
    workWithUs: useRef(null),
    whatWeDo: useRef(null),
    howWeDoIt: useRef(null),
    clients: useRef(null),
    testimonials: useRef(null)

  }

  const scrollTo = (refs) => {
    refs.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>

      {/* <MainMenu refs={refs}/> */}

      <section id="notFound" className="bg-tomato">
        <MainMenu scrollTo={scrollTo} refs={refs} />
        <div ref={container} className="container min-h-screen h-full mx-auto flex  flex-col justify-center items-start gap-6 py-48 md:py-64 xl:py-72 px-6">
          <h1 className="fade text-4xl sm:text-5xl lg:text-7xl dark:text-white">404 - Page not found</h1>
          <h2 className="fade text-3xl  xl:text-4xl dark:text-white">Sorry, the page you are looking for does not exist.</h2>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <a href="/" className="fade text-xl sm:text-2xl flex gap-2 font-syne font-bold text-licorice hover:text-white">
              Go back</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollTo(refs.footer) }} className="fade text-xl sm:text-2xl flex gap-2 font-syne font-bold text-licorice hover:text-white">
              Start your project<FontAwesomeIcon icon={faCircleArrowUp} /></a>
          </div>

        </div>
      </section>
      <FooterBottom refs={refs} />

    </>

  );
}
