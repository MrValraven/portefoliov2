import { useState } from "react";
import "./app.scss";
import Contacts from "./components/Contacts/Contacts";
import Editor from "./components/Editor/Editor";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import TiagosGuide from "./components/TiagosGuide/TiagosGuide";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Editor />
      <TiagosGuide />
      <Contacts />
    </div>
  );
}

export default App;
