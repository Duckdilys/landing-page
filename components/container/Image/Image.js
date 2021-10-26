import React from "react";
import styles from "./Image.module.scss";
const Image = ({ src, className, imageConfig }) => {
  return (
    <div className={`${styles.image} ${className}`}>
      <img src={src} alt={src} loading="lazy" {...imageConfig} />
    </div>
  );
};

export default Image;
