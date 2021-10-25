import styles from "./Line.module.scss";

const Line = (props) => {
  return (
    <div className={`${styles.line} ${props.className}`}>{props.children}</div>
  );
};

export default Line;
