import React, { useEffect, useState } from "react";
import "./styles.scss";

import editorData from "../../data/editorData.json";
import ReactLogo from "../../assets/logos/reactLogo.svg";
import Toolset from "../Toolset/Toolset";
import lineNumbers from "./lineNumbers";

const Editor = () => {
  const [codeEnd, setCodeEnd] = useState(false);

  const sleepNow = async (delay) => {
    return new Promise((resolve) => setTimeout(resolve, delay));
  };

  const typeCode = async (element, word) => {
    let selectedElement = document.querySelector(element);
    let index = 0;
    let maxIndex = word.length;
    let letter = "";

    while (index <= maxIndex) {
      await sleepNow(20);
      letter = word.slice(0, index);
      selectedElement.textContent = letter;
      index++;
    }
  };

  const typeAllCode = async () => {
    let delay = 0;
    for (let i = 0; i < editorData.length; i++) {
      await typeCode(editorData[i].element, editorData[i].text);

      if (i % 4 === 0) {
        await sleepNow(delay);
      }
    }

    setCodeEnd(true);
    await typeCode(
      ".lastp",
      "PS C:\\Users\\tiagoCosta\\Desktop\\Trabalhos\\portefolio>"
    );
  };

  useEffect(() => {
    typeAllCode();
    console.log(lineNumbers);
  }, []);

  return (
    <div className="about" id="about">
      <div className="aboutMe">
        <div className="card">
          <h1 className="title">
            Editor.jsx - portefolio - Visual Studio Code
          </h1>
          <h1 className="file">
            <span>
              <img src={ReactLogo} alt="" />
              Editor.jsx
              <i className="fas fa-times"></i>
            </span>
          </h1>
          <h2>
            src
            <i className="fas fa-chevron-right"></i>
            views
            <i className="fas fa-chevron-right"></i>
            <b>{}</b> "Editor.jsx"
            <i className="fas fa-chevron-right"></i>
            <i className="fas fa-box"></i>
            template
            <i className="fas fa-chevron-right"></i>
            <i className="fas fa-box"></i>
            div.pageContent
            <i className="fas fa-chevron-right"></i>
            <i className="fas fa-box"></i>
            div.aboutMe
            <i className="fas fa-chevron-right"></i>
            <i className="fas fa-box"></i>
            div.card
          </h2>
          <div className="editor">
            <div className="lineNumbers">
              {lineNumbers.map((number) => (
                <p key={number + Math.random() * 900}>{number}</p>
              ))}
            </div>
            <div className="code">
              <p>&nbsp;</p>
              <p>
                <span className="code-purple const"></span>
                <span id="me" className="code-red"></span>
                <span id="igual1"></span>
                <span id="chavetas1" className="code-purple"></span>
              </p>
              <p>
                <span id="nome" className="code-red"></span>
                <span id="doisPontos1"></span>
                <span id="Tiago" className="code-green"></span>
                <span id="virgula1"></span>
              </p>
              <p>
                <span id="age" className="code-red"></span>
                <span id="doisPontos2"></span>
                <span id="idade" className="code-green"></span>
                <span id="virgula2"></span>
              </p>
              <p>
                <span id="role" className="code-red"></span>
                <span id="doisPontos3"></span>
                <span id="fullstack" className="code-green"></span>
                <span id="virgula3"></span>
              </p>
              <p>
                <span id="git" className="code-red"></span>
                <span id="doisPontos4"></span>
                <span className="code-green">
                  <a
                    href="https://github.com/MrValraven"
                    target="_blank"
                    id="githubLink"
                    className="code-green"
                    rel="noopener noreferrer"
                  ></a>
                </span>
                <span id="virgula4"></span>
              </p>
              <p>
                <span id="IDE" className="code-red"></span>
                <span id="doisPontos5"></span>
                <span id="vscode" className="code-green"></span>
              </p>
              <p>
                <span id="chavetas2" className="code-purple"></span>
              </p>
              <p className="blankSpace">&nbsp;</p>
              <p>
                <span id="class" className="code-purple"></span>
                <span id="toolset" className="code-yellow"></span>
                <span id="chavetas3" className="code-purple"></span>
              </p>
              <p>
                <span id="skills" className="code-red"></span>
                <span id="doisPontos6"></span>
                <span id="chavetas4" className="code-purple"></span>
                <span id="icon1" className="code-red"></span>
                <span id="doisPontos7"></span>
                <span id="string1" className="code-yellow"></span>
                <span id="virgula4"></span>
                <span id="name2" className="code-red"></span>
                <span id="doisPontos8"></span>
                <span id="string2" className="code-yellow"></span>
                <span id="chavetas5" className="code-purple"></span>
                <span id="array1" className="code-purple"></span>
                <span id="array2" className="code-purple"></span>
                <span id="pontovirgula1"></span>
              </p>
              <p className="blankSpace">&nbsp;</p>
              <p>
                <span id="constructor" className="code-yellow"></span>
                <span id="parenteses1" className="code-purple"></span>
                <span id="skillset" className="code-red"></span>
                <span id="doisPontos9" className="code-red"></span>
                <span id="chavetas6" className="code-purple"></span>
                <span id="icon2" className="code-red"></span>
                <span id="doisPontos10"></span>
                <span id="string3" className="code-yellow"></span>
                <span id="virgula5"></span>
                <span id="name3" className="code-red"></span>
                <span id="doisPontos11"></span>
                <span id="string4" className="code-yellow"></span>
                <span id="chavetas7" className="code-purple"></span>
                <span id="array3" className="code-purple"></span>
                <span id="array4" className="code-purple"></span>
                <span id="parenteses2" className="code-purple"></span>
                <span id="chavetas8" className="code-purple"></span>
              </p>
              <p>
                <span id="this1" className="code-yellow"></span>
                <span id="ponto1"></span>
                <span id="skills2" className="code-red"></span>
                <span id="ponto2"></span>
                <span id="push" className="code-blue"></span>
                <span id="parenteses3" className="code-blue"></span>
                <span id="reticencias"></span>
                <span id="skillset2" className="code-red"></span>
                <span id="parenteses4" className="code-blue"></span>
                <span id="pontovirgula2"></span>
              </p>
              <p>
                <span id="chavetas9" className="code-purple"></span>
              </p>
              <p className="blankSpace">&nbsp;</p>
              <p>
                <span id="display" className="code-blue"></span>
                <span id="parenteses5" className="code-blue"></span>
                <span id="parenteses6" className="code-blue"></span>
                <span id="chavetas10" className="code-purple"></span>
              </p>
              <p>
                <span id="for" className="code-blue"></span>
                <span id="parenteses7" className="code-blue"></span>
                <span id="let" className="code-purple"></span>
                <span id="skill1" className="code-red"></span>
                <span id="in" className="code-purple"></span>
                <span id="this2" className="code-yellow"></span>
                <span id="ponto3"></span>
                <span id="skills3" className="code-red"></span>
                <span id="parenteses8" className="code-blue"></span>
                <span id="chavetas11" className="code-blue"></span>
              </p>
              <p>
                <span id="console" className="code-yellow"></span>
                <span id="ponto4"></span>
                <span id="log" className="code-blue"></span>
                <span id="parenteses9" className="code-blue"></span>
                <span id="skill2" className="code-red"></span>
                <span id="parenteses20" className="code-blue"></span>
                <span id="pontovirgula3"></span>
              </p>
              <p>
                <span id="chavetas12" className="code-blue"></span>
              </p>
              <p>
                <span id="chavetas13" className="code-purple"></span>
              </p>
              <p>
                <span id="chavetas14" className="code-yellow"></span>
              </p>
              <p>&nbsp;</p>
              <p>
                <span id="export" className="code-purple"></span>
                <span id="chavetas15" className="code-yellow"></span>
                <span id="toolset2" className="code-yellow"></span>
                <span id="chavetas16" className="code-yellow"></span>
                <span id="pontovirgula4"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="toolset">
        <h1 className="title">main.ts - portefolio - Visual Studio Code</h1>
        <h1 className="file">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="20px"
              height="20px"
            >
              <rect width="36" height="36" x="6" y="6" fill="#1976d2" />
              <polygon
                fill="#fff"
                points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
              />
              <path
                fill="#fff"
                d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
              />
            </svg>
            main.ts
            <i className="fas fa-times"></i>
          </span>
        </h1>
        <h2>
          src <i className="fas fa-chevron-right"></i> main.ts
        </h2>

        <div className="editor">
          <div className="lineNumbers">
            <li>0</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </div>
          <div className="finalCode">
            <p className="toolCode">
              <span id="import" className="code-purple"></span>
              <span id="chavetas17" className="code-yellow"></span>
              <span id="toolset4" className="code-red"></span>
              <span id="chavetas18" className="code-yellow"></span>
              <span id="from" className="code-purple"></span>
              <span id="home" className="code-green"></span>
              <span id="pontovirgula5" className="code-purple"></span>
            </p>
            <p className="toolCode">
              <span id="const2" className="code-purple"></span>
              <span id="toolset5" className="code-red"></span>
              <span id="igual2"></span>
              <span id="new" className="code-purple"></span>
              <span id="toolset6" className="code-yellow"></span>
              <span id="parenteses21" className="code-purple"></span>
              <span id="currentSkills" className="code-red"></span>
              <span id="parenteses22" className="code-purple"></span>
              <span id="pontovirgula6"></span>
            </p>
            <p className="toolCode">
              <span id="toolsetFinal" className="code-red"></span>
              <span id="ponto5" className="code-purple"></span>
              <span id="display2" className="code-blue"></span>
              <span id="pontovirgula7"></span>
            </p>
          </div>
        </div>
        <div className={`terminal ${codeEnd ? "terminalOn" : null}`}>
          <p
            className={`terminalOptions ${
              codeEnd ? "terminalOnOptions" : null
            }`}
          >
            Problems Output Debug Console <span>Terminal</span>
          </p>
          <p className="toolCode lastp"></p>
        </div>

        <Toolset codeEnd={codeEnd} />
      </div>
    </div>
  );
};

export default Editor;
