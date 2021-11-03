import React from "react";
import styles from './Type.module.scss';
const Type = ({children}) => {
    return(
        <div className={styles.type}>
            {children}
        </div>
    )
}

export default Type;