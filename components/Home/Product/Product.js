import React from "react";
import { LayoutContainer, SwiperContainer } from "../../container";
import LayoutProduct from "./LayoutProduct";
import useMedia from "../../../hook/use-media";
import { SwiperSlide } from "swiper/react";
import styles from "./Product.module.scss";
const listIcon = [
  "/five-star-icon.svg",
  "/ad-icon.svg",
  "/noron-orange-icon.svg",
  "/control-icon.svg",
];
const hoverIcon = [
  "/five-star-white-icon.svg",
  "/ad-white-icon.svg",
  "/noron-white-icon.svg",
  "/social-white-icon.svg",
];
const Product = ({
  product,
  title,
  className,
  classNameContainer,
}) => {
  const tabletView = useMedia("(max-width: 991px)");
  const _renderProducts = product.map((item, index) => {
    return (
      <LayoutProduct
        aos="fade-up"
        key={index}
        src={item?.cover_url || "/banner_product_2.png"}
        title={item.title}
        content={item?.short_content || ""}
        path={`/product/${item.seo_id}`}
        tabletView={tabletView}
        iconSrc={item?.icon_hover_url || hoverIcon[index]}
        srcSet={item?.icon_url || listIcon[index]}
      />
    );
  });
  return (
    <div className={`${className}`}>
      <LayoutContainer
        className={`${styles["container-product"]} ${classNameContainer}`}
      >
        <h4>{title ? title : "Giải pháp"}</h4>
        
        <SwiperContainer
          pagination={(_renderProducts?.length > 4 && tabletView) ? true : false}
          classNameNormalBullet={styles.normal}
          classNameActiveBullet={styles.bullet}
          className={`${styles.container}`}
          slidesPerView="auto"
          spaceBetween={tabletView ? 17 : 24}
        >
          {_renderProducts.map((item, index) => {
            return (
              <SwiperSlide className={styles["slide-swiper"]} key={index}>
                {item}
              </SwiperSlide>
            );
          })}
        </SwiperContainer>
      </LayoutContainer>
    </div>
  );
};

export default Product;
