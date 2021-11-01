import { Swiper } from "swiper/react";
import React, { useRef } from "react";
import styles from "./Swiper-Container.module.scss";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { ArrowLeft } from "../../../public/Icon";
SwiperCore.use([Navigation, Pagination]);
const SwiperContainer = ({
  children,
  className,
  slidesPerView,
  loop,
  delay,
  navigation,
  pagination,
  config,
  aos
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <Swiper
      data-aos={aos}
      slidesPerView={slidesPerView || "auto"}
      onInit={
        navigation
          ? (swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          : null
      }
      pagination={pagination ? { clickable: true } : false}
      className={`${styles.swiper} ${className}`}
      loop={loop ? true : false}
      autoplay={{
        delay: delay,
      }}
      {...config}
    >
      {children}
      {navigation && (
        <>
          <div
            className={`${
              config && config.left ? config.left : ""
            } ${styles.left}`}
            ref={prevRef}
          >
            <ArrowLeft />
          </div>
          <div
            className={`${
              config && config.right ? config.right : ""
            } ${styles.right}`}
            ref={nextRef}
          >
            <ArrowLeft />
          </div>
        </>
      )}
    </Swiper>
  );
};

export default SwiperContainer;
