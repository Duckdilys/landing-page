import React from "react";
import { LayoutContainer, SwiperContainer, Image } from "../../container";
import styles from "./Partner.module.scss";
import { SwiperSlide } from "swiper/react";
const Partner = () => {
  const _renderSlider = (number) => {
    const array = [];
    // fake slider
    for (let i = 0; i < number; i++) {
      array.push(
        <SwiperSlide data-aos="fade-up" className="position-relative" key={i}>
          <Image layout="fill" src={"/partner.png"} alt="" />
        </SwiperSlide>
      );
    }
    return array;
  };
  return (
    <div className={styles["container-middle"]}>
      <h4 data-aos="zoom-in">Đối tác</h4>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className={styles.background}>
        <LayoutContainer className={styles["container-bg"]}>
          <SwiperContainer
            className={styles.swiper}
            navigation
            config={{
              left: styles.left,
              right: styles.right,
              breakpoints: {
                320: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                576: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                768: {
                    slidesPerView: 4,
                },
                991: {
                  slidesPerView: 5,
                  spaceBetween: 64,
                },
              },
            }}
            loop
          >
            {_renderSlider(5)}
          </SwiperContainer>
        </LayoutContainer>
      </div>
    </div>
  );
};

export default Partner;
