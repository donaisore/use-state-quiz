import { useState } from "react";
import { QuizContainer } from "./QuizContainer";

export const Quiz0 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(1);
  };

  return (
    <QuizContainer title="Quiz0" onClick={handleClick}>
      <p>{count}</p>
    </QuizContainer>
  );
};
