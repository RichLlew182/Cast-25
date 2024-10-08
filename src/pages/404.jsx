import { MainMenu } from "../components/navbar";
import { FooterBottom } from "../components/footer";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function NotFound() {

    const container = useRef();
    const footerRef = useRef(null)

    useGSAP(() => {
        gsap.from(".fade", {opacity: 0, y: 20, stagger: 0.3, delay: .5});
    }, { scope: container }); // 
    
    const scrollToFooter = () => {
      footerRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>  
        
            <header className="absolute w-full">
          <MainMenu scrollToFooter={scrollToFooter}/>
        </header>
  
      <main ref={container}className="container mx-auto flex  min-h-screen flex-col justify-center items-start gap-6 px-6">
        <h1 className="fade text-4xl sm:text-6xl xl:text-8xl dark:text-white">404 - Page not found</h1>
        <h2 className="fade text-3xl  xl:text-4xl dark:text-white">Sorry, the page you are looking for does not exist.</h2>
       
            </main>
            <FooterBottom footerRef={footerRef}/>
   
      </>
      
    );
  }
  