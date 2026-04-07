import React, { useState } from "react";

import face1 from "../images/face1.png";
import face2 from "../images/face2.png";
import face3 from "../images/face3.png";

const TranslatorUI = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [inputLang, setInputLang] = useState("English");
  const [outputLang, setOutputLang] = useState("French");
  const [loading, setLoading] = useState(false);

  const languages = [
    { name: "English", code: "en" },
    { name: "French", code: "fr" },
    { name: "Spanish", code: "es" },
    { name: "German", code: "de" },
    { name: "Hindi", code: "hi" }
  ];

  const handleTranslate = async () => {
    if (!inputText.trim()) return;

    try {
      setLoading(true);

      const source = languages.find(l => l.name === inputLang);
      const target = languages.find(l => l.name === outputLang);

      const res = await fetch("http://127.0.0.1:5000/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: inputText,
          source: source.code,
          target: target.code
        }),
      });

      const data = await res.json();

      if (data.error) {
        setOutputText("Error: " + data.error);
      } else {
        setOutputText(data.translated_text);
      }

    } catch (err) {
      console.error(err);
      setOutputText("Server not reachable");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setInputText("");
    setOutputText("");
  };

  return (
    <div className="page">

      {/* HEADER */}
      <div className="header">
        <h1>SmartLingo</h1>
        <p className="subtitle">
          Translate text into multiple languages instantly
        </p>

        <div className="faces">
          <img src={face1} alt="face1" />
          <img src={face2} alt="face2" />
          <img src={face3} alt="face3" />
        </div>
      </div>

      {/* TRANSLATOR */}
      <div className="translator-row">

        {/* INPUT */}
        <div className="card">
          <select
            value={inputLang}
            onChange={(e) => setInputLang(e.target.value)}
          >
            {languages.map((lang, i) => (
              <option key={i}>{lang.name}</option>
            ))}
          </select>

          <textarea
            placeholder="Enter text..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>

        {/* ACTIONS */}
        <div className="actions">
          <button className="translate-btn" onClick={handleTranslate}>
            {loading ? "Translating..." : "Translate"}
          </button>

          <button className="clear-btn" onClick={handleClear}>
            Clear
          </button>
        </div>

        {/* OUTPUT */}
        <div className="card">
          <select
            value={outputLang}
            onChange={(e) => setOutputLang(e.target.value)}
          >
            {languages.map((lang, i) => (
              <option key={i}>{lang.name}</option>
            ))}
          </select>

          <textarea
            placeholder="Translated text..."
            value={outputText}
            readOnly
          />
        </div>

      </div>
    </div>
  );
};

export default TranslatorUI;