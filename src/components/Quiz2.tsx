import { useState } from "react";
import { QuizContainer } from "./QuizContainer";
import sourceCode from "./Quiz2.tsx?raw";

export const Quiz2 = () => {
  const [array, setArray] = useState([1, 2]);

  const handleClick = () => {
    const newArray = array;
    newArray.push(3);
    setArray(newArray);
  };

  return (
    <QuizContainer title="Quiz2" onClick={handleClick} sourceCode={sourceCode}>
      <span>button を click すると [1, 2] が [1, 2, 3] になる。</span>
      <span>この時、この Component は再 rendering される？</span>

      {array.map((n) => (
        <span key={n}>{n}</span>
      ))}
    </QuizContainer>
  );
};

// https://ja.react.dev/reference/react/useState#setstate-caveats
