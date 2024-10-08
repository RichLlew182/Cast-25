import { DarkThemeToggle } from "flowbite-react";
import { Component } from "./components/carousel";

function App() {
  return (
    <main className="mx-auto min-h-screen  max-w-screen-xl dark:bg-gray-800">
      <h1 className="text-2xl dark:text-white">Flowbite React + Vite</h1>
      <DarkThemeToggle />
      <Component />
    </main>
  );
}

export default App;
