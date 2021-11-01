import React from "react";
import Link from "next/link";
import { Image } from "../../../container";
import styles from "./RenderSlide.module.scss";
const RenderSlide = ({ name, introduction, url_cover }) => {
  return (
    <div
      className={styles.container}
    >
      <Image src={url_cover} alt="" />

      <div className={styles.content}>
        <div
          className={`d-flex flex-column justify-content-end ${styles.text} h-100`}
        >
          <p>Vị trí - Chức vụ</p>
          <h5>{name}</h5>
          <p>{introduction}</p>
          <div className={`d-flex align-items-center ${styles.social}`}>
            <Link href="/" passHref={true}>
              <a>
                <Image src={"/facebook-icon.svg"} alt="" />
              </a>
            </Link>
            <Link href="/" passHref={true}>
              <a>
                <Image src={"/linkedln-icon.svg"} alt="" />
              </a>
            </Link>
            <Link href="/" passHref={true}>
              <a>
                <Image src={"/instagram-icon.svg"} alt="" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderSlide;
