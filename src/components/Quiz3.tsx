import { useState } from "react";
import { QuizContainer } from "./QuizContainer";
import sourceCode from "./Quiz3.tsx?raw";

export const Quiz3 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(1);
    setCount(2);
  };

  return (
    <QuizContainer title="Quiz3" onClick={handleClick} sourceCode={sourceCode}>
      <span>handleClick 内で `setCount()` を2度呼んでいる。</span>
      <span>この時、Quiz3 の再レンダリング回数は？</span>
      <span>count の表示はどうなる？</span>
      <span>1 が(見えないくらい)一瞬ちらついて 2 が表示される?</span>
      <span>いきなり 2 が表示される?</span>

      <p>{count}</p>
    </QuizContainer>
  );
};
