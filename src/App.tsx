import React from "react";

function App() {
  const fibonacci = (n: number): number[] => {
    const sequence: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  };

  const fibSequence = fibonacci(10); // Change the number to generate a different sequence

  return (
    <div className="App">
      <ul>
        {fibSequence.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
