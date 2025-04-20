import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components//Hero";
import Company from "./components/Company";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Company />
    </>
  );
}

export default App;
