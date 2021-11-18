import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import { SwiperContainer } from "../../container";
import styles from "./SwiperBackground.module.scss";
import Slide from "../Slide/Slide";
const SwiperBackground = ({ posts }) => {
  return (
    <SwiperContainer
      className={styles.swiper}
      pagination
      delay={5000}
      navigation
      loop
      slidesPerView={1}
      classActiveCurrent={styles.current}
      containerPagination={styles.pagination}
      classNameNormalBullet={styles["normal-pagination"]}
      classNameActiveBullet={styles["active-pagination"]}
      config={{
        onTransitionEnd: function () {
          const indexActive = this.realIndex;
          this.slides.forEach((slide) => {
            const textSlider = slide.querySelector(".container-text");
            if (!textSlider) {
              return;
            }
            textSlider.classList.remove(styles["swiper-back-active"]);
          });
          const textItem =
            this.slides[indexActive].querySelector(".container-text");
          textItem.classList.add(styles["swiper-back-active"]);
        },
        right: `${styles.right} ${styles.button}`,
        left: `${styles.left} ${styles.button}`,
        // onInit: function () {
        //   const index = this.realIndex;
        //   const textItem = this.slides[index].querySelector(".container-text");
        //   if (!textItem) {
        //     return;
        //   }
        //   textItem.classList.add(styles["swiper-back-active"]);
        // },
        speed: 1000
      }}
    >
      {posts.map((post, index) => {
        return (
          <SwiperSlide key={index}>
            <Slide
              style={{ background: `url('${post.cover_url}')` }}
              title={post.title}
              type={post.category?.title}
            />
          </SwiperSlide>
        );
      })}
    </SwiperContainer>
  );
};

export default SwiperBackground;
