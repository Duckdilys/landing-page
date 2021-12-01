import React from "react";
import styles from './Box.module.scss';
const Box = ({title, content, className}) => {
    return(
        <div className={`${styles.box} ${className}`}>
            <p>{title}</p>
            <h6>{content}</h6>
        </div>
    )
}

export default Box;