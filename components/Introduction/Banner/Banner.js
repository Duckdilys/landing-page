import React from "react";
import { BannerPage } from "../../container";
import styles from "./Banner.module.scss";
const Banner = ({ data }) => {
  return (
    <>
      <BannerPage
        style={{background: data?.cover_url ? `url(${data?.cover_url})` : ''}}
        classNameBanner={styles.container}
        classNameBox={styles["box-container"]}
        title={data?.title || "Giới thiệu về chúng tôi"}
        introduction={data?.content || ""}
      />
    </>
  );
};

export default Banner;
