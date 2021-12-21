import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./Image.module.scss";
import { SerializeImage } from "../../../util";
const Image = ({ src, className, imageConfig, size, isApplied }) => {
  const [srcImage, setSrcImage] = useState(src);
  const [isLoading, setIsLoading] = useState(false);

  const loadImageHandler = () => {
    setIsLoading(true);
    if(size) {
      return setSrcImage(SerializeImage(src, size));
    }
    setSrcImage(src);
  }
  useEffect(() => {
    if(window) {
      const image = new window.Image();
      setIsLoading(true);
      image.onload = () => {
        if(image.width <= 256) {
            setIsLoading(false);
        }
        setSrcImage(SerializeImage(src, 15));
        setIsLoading(true);
      }
      image.src = src;
    }
  }, [src]);
  return (
    <div className={`${styles.image} ${className}`}>
      <img onLoad={loadImageHandler} src={isApplied ? srcImage : src} alt={srcImage} loading="lazy" {...imageConfig} />
    </div>
  );
};

export default Image;
