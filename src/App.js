import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <div className="box" style={{ backgroundColor: `${input}` }}>
        {input.length ? (
          <p className="text">{input}</p>
        ) : (
          <p>Type to change the color</p>
        )}
      </div>
      <form action="">
        <input
          type="text"
          placeholder="Add color name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
}

export default App;
