import React from "react";
import parse from "html-react-parser";
import styles from './StringToHTML.module.scss'
const StringToHTML = ({ string , options ={}}) => {
  return <div className={styles.parser}>{parse(string, { ...options })}</div>;
};

export default StringToHTML;
