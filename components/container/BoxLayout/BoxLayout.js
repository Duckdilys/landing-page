import React from "react";
import { Container } from "..";
import styles from './BoxLayout.module.scss';
const BoxLayout = ({children, className}) => {
    return(
        <Container data-aos="fade-down" className={`${styles.container} ${className}`}>
            {children}
        </Container>
    )
}

export default BoxLayout;