import { useState } from "react";
import { QuizContainer } from "./QuizContainer";

export const Quiz3 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(1);
    setCount(2);
  };

  return (
    <QuizContainer title="Quiz3" onClick={handleClick}>
      <span>handleClick 内で `setCount()` を2度呼んでいる。</span>
      <span>この時、Quiz3 の再レンダリング回数は？</span>
      <span>count の表示はどうなる？ 1 が一瞬ちらついて 2 ?</span>

      <p>{count}</p>
    </QuizContainer>
  );
};

//https://ja.react.dev/learn/queueing-a-series-of-state-updates
