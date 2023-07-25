import {
  LayoutContainer,
  SwiperContainer,
  Grid,
  Button,
  Image
} from "../../container";
import React from "react";
import { SwiperSlide } from "swiper/react";
import { Row, Col } from "react-bootstrap";
import styles from "./News.module.scss";
import Slide from "./Slide/Slide";
import New from "./New/New";
import Link from "next/link";
import useMedia from "../../../hook/use-media";
import { SerializeImage } from "../../../util";
const News = ({ news, highlightPosts }) => {
  const matchMedia = useMedia("(max-width: 768px)");
    return (
    <div className={styles.container}>
      <LayoutContainer className={styles.contain}>
        <h4>Tin Tức</h4>
        <Row>
          <Col data-aos="fade-right" xs={12} sm={12} md={6} lg={6}>
            <SwiperContainer
              config={{
                speed: 700,
                left: styles["button-left"],
                right: styles["button-right"],
              }}
              className={styles.swiper}
              containerPagination={styles.pagination}
              navigation={matchMedia ? false : true}
              loop
              delay={5000}
              pagination
              classNameActiveBullet={styles.active}
              classNameNormalBullet={styles.normal}
              
            >
              {highlightPosts?.result?.items.map((item, index) => {
                return (
                  <SwiperSlide key={item.id}>
                    <Slide
                      src={item.cover_url}
                      type={item.type || "Dashboard"}
                      title={item.title}
                      id={item.id}
                      seo_id={item?.seo_id}
                      contentClassName={styles['overlay']}
                    />
                  </SwiperSlide>
                );
              })}
            </SwiperContainer>
          </Col>
          <Col data-aos="fade-left" xs={12} sm={12} md={6} lg={6}>
            <Grid className={styles.grid}>
              {news.map((item, index) => {
                if (index >= 1) {
                  return (
                    <New
                      key={index}
                      src={item.cover_url}
                      title={item.title}
                      content={item.content}
                      date={item.created_at}
                      id={item.id}
                      seo_id={item?.seo_id}
                    />
                  );
                }
              })}
            </Grid>
            <Link passHref={true} href={`/news`}>
              <a>
                <Button className={`d-flex align-items-center ${styles.button}`}>Xem tất cả <Image src={'/arrow-right-icon.svg'} alt=""/> </Button>
              </a>
            </Link>
          </Col>
        </Row>
      </LayoutContainer>
    </div>
  );
};
export default News;
