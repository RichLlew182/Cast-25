import { MainMenu } from "./components/mainmenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>

    <MainMenu />

    <main className=" mx-auto flex  min-h-screen  max-w-[1320px] flex-col justify-center gap-6 px-6">
      <h1 className="text-8xl dark:text-white">Dynamic and versatile project delivery consultancy</h1>
      <h2 className="text-4xl dark:text-white">Website coming soon</h2>
      <a className="text-2xl font-syne font-bold" href="#footer">
      Get in touch <FontAwesomeIcon icon={faCircleArrowUp} /></a>
      </main>
      </>
  );
}

export default App;
