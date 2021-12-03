import React from "react";
import Link from "next/link";
import { Image } from "../../../container";
import styles from "./RenderSlide.module.scss";
import { StringToHTML } from "../../../container";
const RenderSlide = ({ name, introduction, url_cover, socials, job_title }) => {
  return (
    <div className={styles.container}>
      <Image src={url_cover} alt="" />

      <div className={styles.content}>
        <div
          className={`d-flex flex-column justify-content-end ${styles.text} h-100`}
        >
          <p className={styles.title}>{job_title}</p>
          <h5>{name}</h5>
          <div className={styles.intro}>
            <StringToHTML string={introduction} />
          </div>
          <div className={`d-flex align-items-center ${styles.social}`}>
            {socials &&
              socials?.map((item, index) => {
                if (item.src !== "null" || item.src) {
                  return (
                    <a href={item.src} target="_blank" rel="noreferrer" key={index}>
                      <Image
                        className={item.type === "fb" && styles.img}
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
