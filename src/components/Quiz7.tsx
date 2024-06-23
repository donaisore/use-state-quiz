import { useState } from "react";
import { QuizContainer } from "./QuizContainer";

export const Quiz7 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(1);
    setTimeout(() => {
      setCount(3);
    }, 1000);
    setCount(2);
  };

  return (
    <QuizContainer title="Quiz7" onClick={handleClick}>
      <span>何回 rendering される？</span>
      <span>button をクリックした後の count は？</span>
      <p>{count}</p>
    </QuizContainer>
  );
};
