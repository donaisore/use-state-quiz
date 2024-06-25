import { useState } from "react";
import { QuizContainer } from "./QuizContainer";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const Quiz8 = () => {
  const [count, setCount] = useState(0);

  const handleClick = async () => {
    setCount(1);
    await sleep(3000);
    setCount(2);
  };

  return (
    <QuizContainer title="Quiz8" onClick={handleClick}>
      <span>何回 rendering される？</span>
      <span>button をクリックした後の count は？</span>

      <p>{count}</p>
    </QuizContainer>
  );
};
