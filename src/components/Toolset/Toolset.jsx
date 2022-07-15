import React from "react";
import "./styles.scss";

import HTMLIcon from "../../assets/toolset/html.svg";
import CSSIcon from "../../assets/toolset/css.svg";
import SASSIcon from "../../assets/toolset/sass.svg";
import JavascriptIcon from "../../assets/toolset/javascript.svg";
import TypescriptIcon from "../../assets/toolset/typescript.svg";
import VueIcon from "../../assets/toolset/vue.svg";
import NodeIcon from "../../assets/toolset/node.svg";
import ExpressIcon from "../../assets/toolset/express.svg";
import MongoIcon from "../../assets/toolset/mongodb.svg";
import GitIcon from "../../assets/toolset/git.svg";
import ReactIcon from "../../assets/toolset/react.svg";
import ReduxIcon from "../../assets/toolset/redux.svg";
import NextjsIcon from "../../assets/toolset/nextjs.svg";

const Toolset = ({ codeEnd }) => {
  const toolset = [
    {
      name: "HTML5",
      icon: HTMLIcon,
      class: "html",
    },
    {
      name: "CSS3",
      icon: CSSIcon,
      class: "css",
    },
    {
      name: "SASS",
      icon: SASSIcon,
      class: "sass",
    },
    {
      name: "Javascript",
      icon: JavascriptIcon,
      class: "javascript",
    },
    {
      name: "Typescript",
      icon: TypescriptIcon,
      class: "typescript",
    },
    {
      name: "Vue.js",
      icon: VueIcon,
      class: "vue",
    },
    {
      name: "Node.js",
      icon: NodeIcon,
      class: "node",
    },
    {
      name: "Express.js",
      icon: ExpressIcon,
      class: "express",
    },
    {
      name: "MongoDB",
      icon: MongoIcon,
      class: "mongodb",
    },
    {
      name: "Git",
      icon: GitIcon,
      class: "git",
    },
    {
      name: "React",
      icon: ReactIcon,
      class: "react",
    },
    {
      name: "Redux",
      icon: ReduxIcon,
      class: "redux",
    },
    {
      name: "Next.js",
      icon: NextjsIcon,
      class: "nextjs",
    },
  ];
  return (
    <ul className="toolsetContainer">
      {toolset.map((tool, index) => (
        <li key={tool.name} className={codeEnd ? tool.class : null}>
          <img src={tool.icon} alt="" />
          <p>{tool.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Toolset;
