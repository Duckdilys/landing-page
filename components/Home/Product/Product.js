import React from "react";
import { LayoutContainer, Grid, SwiperContainer } from "../../container";
import LayoutProduct from "./LayoutProduct";
import useMedia from "../../../hook/use-media";
import { SwiperSlide } from "swiper/react";
import styles from "./Product.module.scss";
const Product = ({
  product,
  title,
  className,
  classNameContainer,
  classNameGrid,
}) => {
  const tabletView = useMedia("(max-width: 991px)");
  const _renderProducts = product.map((item, index) => {
    let src = "/demo-image.png";
    if (item.infos && item.infos.length > 0) {
      src = item.infos[0].src;
    }
    return (
      <LayoutProduct
        aos="fade-up"
        key={index}
        src={src}
        title={item.title}
        content={item.content}
        path={"/"}
        tabletView={tabletView}
      />
    );
  });
  return (
    <div className={`${className}`}>
      <LayoutContainer className={classNameContainer}>
        <h4>{title ? title : "Sản Phẩm"}</h4>
        {!tabletView && (
          <Grid className={classNameGrid}>{_renderProducts}</Grid>
        )}
        {tabletView && (
          <SwiperContainer
            pagination
            classNameNormalBullet={styles.normal}
            classNameActiveBullet={styles.bullet}
            className={styles.container}
            slidesPerView="auto"
            spaceBetween={17}
            config={{
              autoResize: false,
            }}
          >
            {_renderProducts.map((item, index) => {
              return (
                <SwiperSlide className={styles["slide-swiper"]} key={index}>
                  {item}
                </SwiperSlide>
              );
            })}
          </SwiperContainer>
        )}
      </LayoutContainer>
    </div>
  );
};

export default Product;
