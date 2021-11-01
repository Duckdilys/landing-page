import React from "react";
import { SwiperSlide } from "swiper/react";
import { SwiperContainer } from "../../container";
import styles from "./SwiperBackground.module.scss";
import Slide from "../Slide/Slide";

const SwiperBackground = ({ posts }) => {
  return (
    <SwiperContainer
      className={styles.swiper}
      pagination
      loop
      delay={5000}
      slidesPerView={1}
      classActiveCurrent={styles.current}
      containerPagination={styles.pagination}
      classNameNormalBullet={styles["normal-pagination"]}
      classNameActiveBullet={styles["active-pagination"]}
    >
      {posts.map((post, index) => {
        return <SwiperSlide key={index}>
            <Slide style={{background: `url('${post.url}')`}} title={post.title} type={post.type}/>
        </SwiperSlide>;
      })}
    </SwiperContainer>
  );
};

export default SwiperBackground;
