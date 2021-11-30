import React from "react";
import Link from "next/link";
import { Image } from "../../../container";
import styles from "./RenderSlide.module.scss";
const RenderSlide = ({ name, introduction, url_cover, socials }) => {
  return (
    <div className={styles.container}>
      <Image src={url_cover} alt="" />

      <div className={styles.content}>
        <div
          className={`d-flex flex-column justify-content-end ${styles.text} h-100`}
        >
          <p>Vị trí - Chức vụ</p>
          <h5>{name}</h5>
          <p className={styles.intro}>{introduction}</p>
          <div className={`d-flex align-items-center ${styles.social}`}>
            {socials &&
              socials?.map((item, index) => {
                if (item.src !== "null" || item.src) {
                  return (
                    <Link href={item.src} key={index} passHref={true}>
                      <a>
                        <Image
                          className={item.type === 'fb' && styles.img}
                          src={
                            item.type === "fb"
                              ? "/fb-orange-icon.svg"
                              : item.type === "Noron"
                              ? "/noron-orange-icon.svg"
                              : ""
                          }
                          alt=""
                        />
                      </a>
                    </Link>
                  );
                }
                return "";
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderSlide;
