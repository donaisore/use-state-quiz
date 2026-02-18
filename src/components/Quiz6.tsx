import { useState } from "react";
import { QuizContainer } from "./QuizContainer";
import sourceCode from "./Quiz6.tsx?raw";

export const Quiz6 = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleClick = () => {
    setEmail("new email");
    setName("new name");
  };

  return (
    <QuizContainer title="Quiz6" onClick={handleClick} sourceCode={sourceCode}>
      <span>違う state を同時に更新します。何回 rendering される？</span>

      <p>email: {email}</p>
      <p>name: {name}</p>
    </QuizContainer>
  );
};
