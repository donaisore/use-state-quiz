import styles from "./style.module.css";

type Props = {
  title: string;
  onClick: () => void;
  children: React.ReactNode;
};

export const QuizContainer = ({ title, onClick, children }: Props) => {
  console.log(`${title} is rendered!!!!`);

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      {children}
      <button onClick={onClick}>click!!</button>
    </div>
  );
};
