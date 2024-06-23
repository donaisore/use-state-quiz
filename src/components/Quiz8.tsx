import { useState } from "react";
import styles from "./style.module.css";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const Quiz8 = () => {
  console.log("Quiz8 is rendered!!!!");

  const [count, setCount] = useState(0);

  const handleClick = async () => {
    setCount(1);
    // sleep(3000).then(() => {
    //   setCount(3);
    // });
    await sleep(3000);
    setCount(3);
    setCount(2);
  };

  return (
    <div className={styles.container}>
      <h1>Quiz8</h1>
      <p>{count}</p>
      <button onClick={handleClick}>click!!</button>
    </div>
  );
};
