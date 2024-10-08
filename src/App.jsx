import { MainMenu } from "./components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FooterBottom } from "./components/footer";

function App() {
  return (
    <>

      <header className="absolute w-full">
        <MainMenu />
      </header>

    <main className="container mx-auto flex  min-h-screen flex-col justify-center gap-6 px-6">
      <h1 className="text-8xl dark:text-white">Dynamic and versatile project delivery consultancy</h1>
      <h2 className="text-4xl dark:text-white">Website coming soon</h2>
      <a className="text-2xl font-syne font-bold text-licorice hover:text-white" href="#footerTop">
      Get in touch <FontAwesomeIcon icon={faCircleArrowUp} /></a>
      </main>
      <FooterBottom />
    </>
    
  );
}

export default App;
