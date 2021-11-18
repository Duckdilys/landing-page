import React from "react";
import { BannerPage } from "../../container";
import styles from "./Banner.module.scss";
const Banner = ({ data }) => {
  return (
    <>
    {
      data && 
      <BannerPage
        classNameBanner={styles.container}
        classNameBox={styles["box-container"]}
        title={data?.title || "Giới thiệu về chúng tôi"}
        introduction={data?.content || "Không có thông tin"}
      />
    }
    </>
  );
};

export default Banner;
