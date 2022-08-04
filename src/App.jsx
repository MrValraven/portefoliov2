import { useState } from "react";
import "./app.scss";
import BuiltWith from "./components/BuiltWith/BuiltWith";
import Contacts from "./components/Contacts/Contacts";
import Editor from "./components/Editor/Editor";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import OtherProjects from "./components/OtherProjects/OtherProjects";
import TiagosGuides from "./components/TiagosGuides/TiagosGuides";

function App() {
  const [theme, setTheme] = useState("light");
  const [colorScheme, setColorScheme] = useState({
    backgroundColor: "#e7ecef",
    color: "#274c77",
  });

  const toggleColorScheme = () => {
    if (theme === "light") {
      setColorScheme({
        backgroundColor: "#0e1720",
        color: "#e7ecef",
      });
      setTheme("dark");
    } else {
      setColorScheme({
        backgroundColor: "#e7ecef",
        color: "#274c77",
      });
      setTheme("light");
    }
  };

  return (
    <div className="app" style={colorScheme}>
      <Header toggleColorScheme={toggleColorScheme} style={colorScheme} />
      <Hero />
      <Editor />
      <Experience />
      <TiagosGuides />
      <OtherProjects />
      <BuiltWith />
      <Contacts />
    </div>
  );
}

export default App;
