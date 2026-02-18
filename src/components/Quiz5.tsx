import { useState } from "react";
import { QuizContainer } from "./QuizContainer";
import sourceCode from "./Quiz5.tsx?raw";

export const Quiz5 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((n) => n + 1); // updater function
    setCount(count + 1);
  };

  return (
    <QuizContainer title="Quiz5" onClick={handleClick} sourceCode={sourceCode}>
      <span>何回 rendering される？</span>
      <span>button をクリックした後の count は？</span>

      <p>{count}</p>
    </QuizContainer>
  );
};
