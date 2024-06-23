import { useState } from "react";
import { QuizContainer } from "./QuizContainer";

export const Quiz1 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(0);
  };

  return (
    <QuizContainer title="Quiz1" onClick={handleClick}>
      <span>button を click すると同じ値を State に詰める(0 から 0)</span>
      <span>この時、この Component は再 rendering される？</span>

      <p>{count}</p>
    </QuizContainer>
  );
};
