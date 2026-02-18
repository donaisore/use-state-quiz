import { useState } from "react";
import { QuizContainer } from "./QuizContainer";
import sourceCode from "./Quiz4.tsx?raw";

export const Quiz4 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <QuizContainer title="Quiz4" onClick={handleClick} sourceCode={sourceCode}>
      <span>何回 rendering される？</span>
      <span>button をクリックした後の count は？</span>

      <p>{count}</p>
    </QuizContainer>
  );
};
