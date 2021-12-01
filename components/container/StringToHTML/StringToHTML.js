import React from "react";
import parse from "html-react-parser";
import styles from './StringToHTML.module.scss'
const StringToHTML = ({ string }) => {
  return <div className={styles.parser}>{parse(string)}</div>;
};

export default StringToHTML;
