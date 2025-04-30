import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components//Hero";
import Company from "./components/Company";
import Category from "./components/Category";
import Promotion from "./components/Promotion";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Company />
      <Category />
      <Promotion />
    </>
  );
}

export default App;
