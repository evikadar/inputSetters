import './App.css';
import React, { useState } from 'react';


// implemented functions: 
// 1. one setstate is implemented
// 2. character length, negative character length, on the fly changing state, and reversed string of on the fly changing state is displayed
// 3. in case we type in the 2nd input field, character is reversed first, then original state is set
// 4. in case we type into the 2nd input field, we can type a character anywhere but then the cursor jumps to the beginning of the input field


// helper function to reverse strings
function reverse(s) {
  return s.split("").reverse().join("");
}

function App() {

  const [inputData, setInputData] = useState("");

  function addInputToReversed(e) {
    setInputData(reverse(e.target.value));
    e.target.selectionStart = 0;
    e.target.selectionEnd = 0;
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {inputData.length}
        </p>
        <h1>{inputData}</h1>
        <input type="text" value={inputData} onChange={e => setInputData(e.target.value)} />
        <p>
          {inputData.length * (-1)}
        </p>
        <h1>{reverse(inputData)}</h1>
        <input type="text" value={reverse(inputData)} onChange={addInputToReversed} />
      </header>
    </div>
  );
}

export default App;
