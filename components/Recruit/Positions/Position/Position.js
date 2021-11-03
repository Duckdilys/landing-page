import React from "react";
import styles from "./Position.module.scss";
import Image from "next/image";
import Link from "next/link";
import Type from "./Type/Type";
const Position = ({ url, title, date, place, salary, types }) => {
  return (
    <div
      className={`d-flex justify-content-between align-items-center ${styles.container}`}
    >
      <div className={`position-relative ${styles.image}`}>
        {url && (
          <Image
            src={url}
            alt=""
            width="100%"
            height="auto"
            layout="responsive"
          />
        )}
      </div>
      <div className={styles.content}>
        <div className="d-flex justify-content-between align-items-center">
          <Link href="/" passHref={true}>
            <a>
              <h5>{title}</h5>
            </a>
          </Link>
          <div className={styles.date}>
            <span>Mới</span>
            <span>{date}</span>
          </div>
        </div>
        <div className={`d-flex align-items-center ${styles.places}`}>
          <div className="d-flex align-items-center">
            <Image src="/map-icon.svg" alt="" width="13px" height="16px" />
            <span>{place}</span>
          </div>
          <div className="d-flex align-items-center">
            <Image src="/salary-icon.svg" alt="" width="8px" height="15px" />
            <span>{salary}</span>
          </div>
        </div>
        <div className={`d-flex align-items-center ${styles.flex}`}>
          {typeof types === "array" &&
            types.map((type, index) => {
              return <Type key={index}>{type}</Type>;
            })}
        </div>
      </div>
    </div>
  );
};

export default Position;
