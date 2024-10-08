import { MainMenu } from "../components/navbar";
import { FooterBottom } from "../components/footer";
import { useRef } from "react";

export default function NotFound() {
    
    const footerRef = useRef(null)
  
    const scrollToFooter = () => {
      footerRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>  
            
            <header className="absolute w-full">
          <MainMenu scrollToFooter={scrollToFooter}/>
        </header>
  
      <main className="container mx-auto flex  min-h-screen flex-col justify-center items-start gap-6 px-6">
        <h1 className="text-4xl sm:text-6xl xl:text-8xl dark:text-white">404 - Page not found</h1>
        <h2 className="text-3xl  xl:text-4xl dark:text-white">Sorry, the page you are looking for does not exist.</h2>
       
            </main>
            <FooterBottom footerRef={footerRef}/>
   
      </>
      
    );
  }
  