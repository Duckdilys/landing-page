import React from "react";
import { ContainerSmall, SwiperContainer } from "../../container";
import { SwiperSlide } from "swiper/react";
import RenderSlide from "./RenderSlide/RenderSlide";
import styles from "./Founder.module.scss";
const Founder = ({ dataFounder }) => {
  return (
    <ContainerSmall>
      <h4>Sáng Lập - Cố Vấn</h4>
      <SwiperContainer
        config={{
          breakpoints: {
            200: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          },
          left: styles.left,
          right: styles.right,
          "data-aos-delay": 1000,
          "data-aos-offset": 300,
        }}
        aos="fade-up"
        className={styles.swiper}
        loop
        navigation
        pagination
        clickable={true}
      >
        {dataFounder.items[0] ? (
          dataFounder.items[0]?.map((founder, index) => {
            return (
              <SwiperSlide key={index}>
                <RenderSlide
                  name={founder.name}
                  introduction={founder.introduction}
                  url_cover={founder.image}
                />
              </SwiperSlide>
            );
          })
        ) : (
          <p className={"text-center pt-5"}>Không có dữ liệu</p>
        )}
      </SwiperContainer>
    </ContainerSmall>
  );
};

export default Founder;
