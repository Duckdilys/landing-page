import React from "react";
import Link from "next/link";
import styles from "./Slide.module.scss";
import { Image } from "../../../container";
import { removeUnicode } from "../../../../util";
const Slide = ({ src, className, children, type, title }) => {
  return (
    <div className={`${styles.slide} ${className}`}>
      <Image src={src} alt={src || ""} />
      <div className={styles.content}>
        <span>{type}</span>
        <p>
          <Link href={`/${removeUnicode(title)}`}>{title}</Link>
          {/* temporary link */}
        </p>
        {children}
      </div>
    </div>
  );
};

export default Slide;
