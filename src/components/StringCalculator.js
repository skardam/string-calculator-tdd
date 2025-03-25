import React, { useState } from "react";
import { add } from "../utils/stringCalculator";
import "./StringCalculator.css";

function StringCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    try {
      const sum = add(input);
      setResult(sum);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="calculator-container">
      <h1>String Calculator</h1>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="numbers">Enter numbers</label>
          <p className="format-hint">
            (Format: //<span className="highlight">[delimiter]</span>\n
            <span className="highlight">[numbers]</span>)
          </p>
          <input
            type="text"
            id="numbers"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="E.g., //;\n1;2;3 or 1,2,3"
            className="input-field"
          />
        </div>

        <button type="submit" className="calculate-btn">
          Calculate
        </button>
      </form>

      {result !== null && (
        <div className="result">
          <h2>Result: {result}</h2>
        </div>
      )}

      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default StringCalculator;
