import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./LayoutProduct.module.scss";
import Icon from "./Icon/Icon";
import { Line, Button } from "../../container";
const LayoutProduct = ({
  children,
  title,
  content,
  className,
  src,
  path,
  aos,
}) => {
  return (
    <div
      data-aos={aos}
      className={`${styles.layout} ${className} position-relative`}
    >
      <div>
        <Icon />
        <h4>{title}</h4>
      </div>
      <div className={`position-relative ${styles.image}`}>
        {src && (
          <Image
            src={src}
            alt=""
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
          />
        )}
      </div>
      <div className={`${styles["show--container"]}`}>
        <Icon className={styles.color} src={"/project_icon_white.svg"} />
        <h4 data-transition-delay="500">{title}</h4>
        <Line className={styles.line} />
        <p data-transition-delay="1000">{content}</p>
        <Link data-transition-delay="1500" href={path || "/"} passHref={true}>
          {/* just temporary for not being error, dynamic route */}
          <a>
            <Button className={styles.button}>Tìm hiểu thêm</Button>
          </a>
        </Link>
      </div>
      {children}
    </div>
  );
};

export default LayoutProduct;
