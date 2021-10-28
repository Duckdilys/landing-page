import {
  LayoutContainer,
  SwiperContainer,
  Grid,
  Button,
} from "../../container";
import React from "react";
import { SwiperSlide } from "swiper/react";
import { Row, Col } from "react-bootstrap";
import styles from "./News.module.scss";
import Slide from "./Slide/Slide";
import New from "./New/New";
const News = ({ news }) => {
  return (
    <div className={styles.container}>
      <LayoutContainer className={styles.contain}>
        <h4 data-aos="zoom-in">Tin Tức</h4>
        <Row>
          <Col data-aos="fade-right" xs={12} sm={12} md={6} lg={6}>
            <SwiperContainer
              config={{
                speed: 1000,
                left: styles["button-left"],
                right: styles["button-right"],
              }}
              navigation
              loop
              pagination
            >
              {news.map((item, index) => {
                if (index <= 1) {
                  return (
                    <SwiperSlide key={index}>
                      <Slide
                        src={item.image}
                        type={item.type}
                        title={item.title}
                      />
                    </SwiperSlide>
                  );
                }
              })}
            </SwiperContainer>
          </Col>
          <Col data-aos="fade-left" xs={12} sm={12} md={6} lg={6}>
            <Grid className={styles.grid}>
              <h5>Tin gần đây</h5>
              {news.map((item, index) => {
                if (index > 1) {
                  return (
                    <New
                      key={index}
                      src={item.image}
                      title={item.title}
                      content={item.content}
                      date={item.date}
                    />
                  );
                }
              })}
            </Grid>
            <Button className={styles.button}>Xem tất cả</Button>
          </Col>
        </Row>
      </LayoutContainer>
    </div>
  );
};
export default News;
