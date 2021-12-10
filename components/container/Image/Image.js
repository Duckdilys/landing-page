import React, { useState } from "react";
import styles from "./Image.module.scss";

const Image = ({ src, className, imageConfig }) => {
  const [srcImage, setSrcImage] = useState(src);

  return (
    <div className={`${styles.image} ${className}`}>
      <img src={src} alt={srcImage} loading="lazy" {...imageConfig} />
    </div>
  );
};

export default Image;
