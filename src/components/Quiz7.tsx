import { useState } from "react";
import { QuizContainer } from "./QuizContainer";
import sourceCode from "./Quiz7.tsx?raw";

export const Quiz7 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(1);
    setTimeout(() => {
      setCount(2);
      setCount(3);
    }, 1000);
    setCount(4);
  };

  return (
    <QuizContainer title="Quiz7" onClick={handleClick} sourceCode={sourceCode}>
      <span>何回 rendering される？</span>
      <span>button をクリックした後の count は？</span>
      <p>{count}</p>
    </QuizContainer>
  );
};
