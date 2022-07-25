import { useState } from "react";
import "./app.scss";
import Contacts from "./components/Contacts/Contacts";
import Editor from "./components/Editor/Editor";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import TiagosGuides from "./components/TiagosGuides/TiagosGuides";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Editor />
      <Experience />
      <TiagosGuides />
      <Contacts />
    </div>
  );
}

export default App;
