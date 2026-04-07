<h1>SmartLingo – Language Translation System</h1>

<h3>Project Overview</h3>
<p>
SmartLingo is a full-stack web application designed to translate text into multiple languages in real time. 
The system provides a clean and interactive user interface where users can input text, select source and target languages, 
and receive instant translations. It leverages external translation APIs to deliver accurate multilingual results efficiently.
</p>
<p>Dataset Link: https://www.kaggle.com/datasets/basilb2s/language-detection</p>

<h3>Translation API</h3>
<p>
Translation API Used: https://api.mymemory.translated.net/
</p>

<h3>Features</h3>
<ul>
  <li>Translate text into multiple languages</li>
  <li>Select both source and target languages</li>
  <li>Real-time translation with API integration</li>
  <li>Clean and responsive UI</li>
  <li>Loading state during translation</li>
  <li>Clear input and output functionality</li>
  <li>Modern user interface with interactive design</li>
</ul>

<h3>Tech Stack</h3>
<ul>
  <li><b>Front-end:</b> ReactJS, CSS</li>
  <li><b>Back-end:</b> Python, Flask, Flask-CORS</li>
  <li><b>API Integration:</b> MyMemory Translation API</li>
  <li><b>Libraries:</b> requests</li>
</ul>

<h3>Home Page</h3>
<p>
Designed a visually appealing homepage with a modern layout, including a title, description, and custom illustrations 
to enhance user experience.
</p>
<img src="https://github.com/IshitaSinha2002/SmartLingo/blob/main/src/images/home.png" style="width: 500px; height: 350px; object-fit: cover;">

<h3>Translation Interface</h3>
<p>
Built an intuitive translation interface where users can:
<ul>
  <li>Enter text to translate</li>
  <li>Select input language</li>
  <li>Select output language</li>
  <li>View translated output instantly</li>
</ul>
</p>
<img src="https://github.com/IshitaSinha2002/SmartLingo/blob/main/src/images/result.png" style="width: 500px; height: 350px; object-fit: cover;">

<h3>Implementation Details</h3>
<ol>
  <li><b>User Input Handling:</b>
    <ul>
      <li>Accepts text input from users through a textarea component.</li>
      <li>Allows selection of source and target languages via dropdowns.</li>
    </ul>
  </li>

  <li><b>Frontend Processing:</b>
    <ul>
      <li>Handles user interactions using React state management.</li>
      <li>Implements loading states for better user experience.</li>
    </ul>
  </li>

  <li><b>API Communication:</b>
    <ul>
      <li>Sends HTTP POST request from frontend to Flask backend.</li>
      <li>Passes text, source language, and target language.</li>
    </ul>
  </li>

  <li><b>Translation Logic:</b>
    <ul>
      <li>Backend calls MyMemory Translation API.</li>
      <li>Processes API response and extracts translated text.</li>
    </ul>
  </li>

  <li><b>Result Rendering:</b>
    <ul>
      <li>Displays translated output in a structured UI.</li>
      <li>Handles errors and fallback responses.</li>
    </ul>
  </li>
</ol>

<h3>Backend Implementation</h3>
<ol>
  <li><b>Framework and Setup:</b>
    <ul>
      <li>Developed RESTful API using Flask.</li>
      <li>Enabled CORS for seamless frontend-backend communication.</li>
    </ul>
  </li>

  <li><b>API Endpoint:</b>
    <ul>
      <li>Created <code>/translate</code> endpoint to handle translation requests.</li>
      <li>Receives JSON input with text and language parameters.</li>
    </ul>
  </li>

  <li><b>External API Integration:</b>
    <ul>
      <li>Integrated MyMemory Translation API using Python requests library.</li>
      <li>Constructed dynamic query based on selected languages.</li>
    </ul>
  </li>

  <li><b>Response Handling:</b>
    <ul>
      <li>Extracted translated text from API response.</li>
      <li>Returned structured JSON response to frontend.</li>
    </ul>
  </li>

  <li><b>Error Handling:</b>
    <ul>
      <li>Handled API failures and invalid responses.</li>
      <li>Ensured stable and user-friendly error messages.</li>
    </ul>
  </li>
</ol>
