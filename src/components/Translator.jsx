import React, { useState } from "react";

import face1 from "../images/face1.png";
import face2 from "../images/face2.png";
import face3 from "../images/face3.png";

const TranslatorUI = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [inputLang, setInputLang] = useState("English");
  const [outputLang, setOutputLang] = useState("French");

  const languages = ["English", "French", "Spanish", "German", "Hindi"];

  return (
    <div className="page">

      {/* HEADER */}
      <div className="header">
        <h1>SmartLingo</h1>
        <p className="subtitle">
          Translate easy and fast into 100+ languages
        </p>

        <div className="faces">
          <img src={face1} alt="face1" />
          <img src={face2} alt="face2" />
          <img src={face3} alt="face3" />
        </div>
      </div>

      {/* TRANSLATOR ROW */}
      <div className="translator-row">

        {/* INPUT */}
        <div className="card">
          <select
            value={inputLang}
            onChange={(e) => setInputLang(e.target.value)}
          >
            {languages.map((lang, i) => (
              <option key={i}>{lang}</option>
            ))}
          </select>

          <textarea
            placeholder="Enter text..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>

        {/* BUTTON */}
        <button className="translate-btn">Translate</button>

        {/* OUTPUT */}
        <div className="card">
          <select
            value={outputLang}
            onChange={(e) => setOutputLang(e.target.value)}
          >
            {languages.map((lang, i) => (
              <option key={i}>{lang}</option>
            ))}
          </select>

          <textarea
            placeholder="Output..."
            value={outputText}
            readOnly
          />
        </div>

      </div>
    </div>
  );
};

export default TranslatorUI;