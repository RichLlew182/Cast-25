import { DarkThemeToggle } from "flowbite-react";
import { Component } from "./components/carousel";

function App() {
  return (
    <main className="mx-auto min-h-screen  max-w-screen-xl">
      <h1 className="text-8xl dark:text-white">CAST25</h1>
      <DarkThemeToggle />
      <Component />
    </main>
  );
}

export default App;
