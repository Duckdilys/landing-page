import React from "react";
import styles from './overlay.module.scss';
const OverlayBG = (props) => {
    return(
        <div className={styles.container} {...props}>
            {props.children}
        </div>
    )

}

export default OverlayBG;