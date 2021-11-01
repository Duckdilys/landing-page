import React from "react";
import styles from "./CardContent.module.scss";
import Image from "next/image";
import { Line } from "..";
import useHover from "../../../hook/use-hover";
const CardContent = ({
  iconSrc,
  iconWidth,
  title,
  lineClassName,
  content,
  className,
  classImage,
  colorLine,
  options,
  iconChangeInHover,
}) => {
  const { isHover, isHoverHandler, isNotHoverHandler } = useHover(false);
  return (
    <div
      onMouseEnter={isHoverHandler}
      onMouseLeave={isNotHoverHandler}
      className={`${styles.card} ${isHover && styles.hover} ${className}`}
      {...options}
    >
      <div
        className={`d-flex justify-content-center align-items-center ${
          styles.image
        } ${isHover && styles.bg} ${classImage}`}
      >
        <Image
          src={!isHover ? iconSrc : iconChangeInHover || iconSrc}
          alt=""
          width={iconWidth || "32px"}
          height={"38px"}
        />
      </div>
      <p className={styles.title}>{title}</p>
      <Line
        className={`${styles.line} ${
          isHover && styles["hover-line"]
        } ${lineClassName}`}
        style={{ background: colorLine || "black" }}
      />
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default CardContent;
