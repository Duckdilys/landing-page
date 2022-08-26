import React from "react";
import styles from './FixLayout.module.scss';

const FixLayout = (props) => {
    return(
        <div className={`${styles.layout} ${props.className}`} {...props.options}>
            {props.children}
        </div>
    )
}

export default FixLayout
