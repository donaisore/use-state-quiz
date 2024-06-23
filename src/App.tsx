import { useMemo, useState } from "react";
import styles from "./style.module.css";
import { Quiz1 } from "./components/Quiz1";
import { Quiz2 } from "./components/Quiz2";
import { Quiz3 } from "./components/Quiz3";
import { Quiz4 } from "./components/Quiz4";
import { Quiz5 } from "./components/Quiz5";
import { Quiz6 } from "./components/Quiz6";
import { Quiz7 } from "./components/Quiz7";
import { Quiz8 } from "./components/Quiz8";

const numberComponentMap = {
  1: Quiz1,
  2: Quiz2,
  3: Quiz3,
  4: Quiz4,
  5: Quiz5,
  6: Quiz6,
  7: Quiz7,
  8: Quiz8,
} as const;

type NumberComponentMapKey = keyof typeof numberComponentMap;

function App() {
  const [number, setNumber] = useState<NumberComponentMapKey | null>(null);

  const handleClick = (n: NumberComponentMapKey) => () => {
    setNumber(n);
  };

  const QuizComponent = useMemo(
    () => (number === null ? null : numberComponentMap[number]),
    [number]
  );

  return (
    <>
      Quiz
      {Object.keys(numberComponentMap).map((key) => (
        <button
          key={key}
          className={styles.button}
          onClick={handleClick(Number(key) as NumberComponentMapKey)}
        >
          {key}
        </button>
      ))}
      <div className={styles.container}>
        {QuizComponent && (
          <div className={styles.item}>
            <QuizComponent />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
