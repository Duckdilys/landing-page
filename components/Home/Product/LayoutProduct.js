import React from "react";
import { Image } from "../../container";
import Link from "next/link";
import styles from "./LayoutProduct.module.scss";
import Icon from "./Icon/Icon";
import { Line, Button, StringToHTML } from "../../container";
import { useRouter } from "next/router";
const LayoutProduct = ({
  children,
  title,
  content,
  className,
  src,
  path,
  aos,
  tabletView,
  iconSrc,
  srcSet,
}) => {
  const router = useRouter();
  const pushLinkHandler = () => {
    router.push(path || "/");
  }
  return (
    <div
      onClick={tabletView ? null : pushLinkHandler}
      data-aos={aos}
      className={`${styles.layout} ${className} position-relative`}
    >
      <div
        className={`d-flex flex-column align-items-between align-items-center justify-content-between text-center`}
      >
        <Icon src={iconSrc} />
        <h4>{title}</h4>
      </div>
      <div className={`position-relative ${styles.image}`}>
        {src && <Image src={src || "/demo-image.png"} alt="" />}
      </div>

      <div className={`${styles["show--container"]}`}>
        <div className={`d-flex flex-column justify-content-center align-items-center`}>
          <Icon
            className={styles.color}
            src={srcSet || "/project_icon_white.svg"}
          />
          <h4 className={styles.header} data-transition-delay="500">
            {title}
          </h4>

          <Line
            style={{ width: tabletView ? "96px" : "150px" }}
            className={styles.line}
          />
        </div>
        <div className={`text-center ${styles.text}`}>
          <div className={`${styles.content}`} data-transition-delay="1000">
            <StringToHTML string={content} />
          </div>

          <Link href={path || "/"} passHref={true}><a><Button className={styles.button}>Tìm hiểu thêm</Button></a></Link>
        </div>
      </div>
      {children}
    </div>
  );
};

export default LayoutProduct;
