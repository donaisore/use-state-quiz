import styles from "./style.module.css";

type Props = {
  title: string;
  onClick: () => void;
  children: React.ReactNode;
  sourceCode: string;
};

export const QuizContainer = ({
  title,
  onClick,
  children,
  sourceCode,
}: Props) => {
  console.log(`${title} is rendered!!!!`);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>{title}</h1>
        {children}
        <button onClick={onClick}>click!!</button>
      </div>
      <pre className={styles.code}>
        <code>{sourceCode}</code>
      </pre>
    </div>
  );
};
