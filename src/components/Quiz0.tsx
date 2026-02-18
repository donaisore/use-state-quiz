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
      <span>
        button をクリックすると、1度再レンダリングされ、console.log
        が出力されます
      </span>
      <p>{count}</p>
    </QuizContainer>
  );
};
