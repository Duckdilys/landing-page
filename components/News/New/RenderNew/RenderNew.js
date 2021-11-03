import React from "react";
import styles from "./RenderNew.module.scss";
import Image from "next/dist/client/image";
import Link from "next/link";
import { removeUnicode } from "../../../../util";
const RenderNew = ({ name, date, type, url_cover, image }) => {
  return (
    <div className={styles.new}>
      <div className={`position-relative ${styles.image}`}>
        <Image
          src={url_cover}
          layout="responsive"
          alt=""
          width="100%"
          height="auto"
          objectFit="cover"
          {...image}
        />
      </div>
      <div
        className={`d-flex justify-content-between align-items-center ${styles.time}`}
      >
        <h6>{type}</h6>
        <p>{date}</p>
      </div>
      <Link className={styles.link} href={`/news/${removeUnicode(name)}`}>
        {name}
      </Link>
    </div>
  );
};

export default RenderNew;
