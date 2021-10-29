import React from "react";
import styles from "./CardContent.module.scss";
import Image from "next/image";
import { Line } from "..";
const CardContent = ({
  iconSrc,
  iconWidth,
  title,
  lineClassName,
  content,
  className,
  classImage,
  colorLine,
  options
}) => {
  return (
    <div className={`${styles.card} ${className}`} {...options}>
      <div
        className={`d-flex justify-content-center align-items-center ${styles.image} ${classImage}`}
      >
        <Image
          src={iconSrc}
          alt=""
          width={iconWidth || "32px"}
          height={"38px"}
        />
      </div>
      <p className={styles.title}>{title}</p>
      <Line
        className={`${styles.line} ${lineClassName}`}
        style={{ background: colorLine || "black" }}
      />
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default CardContent;
