import React from "react";
import styles from "./TextArea.module.scss";

const TextArea = (props) => {
  return <textarea className={`${styles["text-area"]} ${props.className}`} {...props.textarea} />;
};


export default TextArea;