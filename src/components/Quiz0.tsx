import { useState } from "react";
import { QuizContainer } from "./QuizContainer";
import sourceCode from "./Quiz0.tsx?raw";

export const Quiz0 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(1);
  };

  return (
    <QuizContainer title="Quiz0" onClick={handleClick} sourceCode={sourceCode}>
      <p>{count}</p>
    </QuizContainer>
  );
};
