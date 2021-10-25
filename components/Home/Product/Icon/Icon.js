import React from "react";
import Image from "next/image";
import styles from "../LayoutProduct.module.scss";
const Icon = ({ className , src}) => {
  return (
    <div
      className={`${styles["icon-image"]} d-flex justify-content-center align-items-center ${className}`}
    >
      <Image src={src || "/project_icon.png"} alt="" width="28" height="28" />
    </div>
  );
};

export default Icon;
