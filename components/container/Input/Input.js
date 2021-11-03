import React from "react";
import styles from "./Input.module.scss";
import { CSSTransition } from "react-transition-group";
const Input = ({ input, className, children, error }) => {
    return(
        <div className={`${styles.input} ${className}`}>
            <input {...input} />
            <CSSTransition in={error} classNames="scale" unmountOnExit mountOnEnter timeout={750}>
                <p className={styles.error}>{error}</p>
             </CSSTransition>   
            {children}
        </div>
    )
};

export default Input;
