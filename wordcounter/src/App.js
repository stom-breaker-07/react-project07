import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState(""); 
  const [char, setChar] = useState(0);
  const [word, setWord] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value); 
    setChar(value.length); 
    const words = value.trim().split(/\s+/);
    const count = value.trim() === "" ? 0 : words.length;
    setWord(count); 
  };

  const handleClear = (e) => {
    e.preventDefault();
    setText(""); 
    setChar(0); 
    setWord(0); 
  };

  return (
    <div className="App">
      <div className="title">
        <span>Word Counter</span>
        <p>Free online character and word counter</p>
      </div>

      <div className="textBox">
        <form className="formBox">
          <textarea
            name="input"
            id="TA"
            placeholder="Type or paste your text"
            value={text} 
            onChange={handleChange} 
          ></textarea>

          <button className="Clear" onClick={handleClear}>
            Clear
          </button>
          
        </form>
      </div>

      <div className="outputBox">
        <div className="text">Characters: {char}</div>
        <div className="word">Words: {word}</div>
      </div>
    </div>
  );
}

export default App;
