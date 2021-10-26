import { LayoutContainer, SwiperContainer, Grid, Button } from "../../container";
import React, { useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import { Row, Col } from "react-bootstrap";
import styles from "./News.module.scss";
import Slide from "./Slide/Slide";
import New from "./New/New";
import useFetch from '../../../hook/use-fetch';
const News = () => {
  
    const {isLoading, fetchDataFromServer, error, data} = useFetch();
    useEffect(() => {
        fetchDataFromServer({
          url: '/api/fake-post'
        })
    }, [fetchDataFromServer]);
    console.log(data);
  return (
    <div className={styles.container}>
      <LayoutContainer className={styles.contain}>
        <h4>Tin Tức</h4>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
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
              <SwiperSlide>
                <Slide
                  src={"/Rectangle 134.png"}
                  type="Tin Dashboard"
                  title="Dashboard điều hành HSSK"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Slide
                  src={"/Rectangle 134.png"}
                  type="Tin Dashboard"
                  title="Dashboard điều hành HSSK"
                />
              </SwiperSlide>
            </SwiperContainer>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Grid className={styles.grid}>
              <h5>Tin gần đây</h5>
              <New
                src={"/Rectangle 186.png"}
                title="Bao cao"
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, quas?"
                date="1/1/2020"
              />
              <New
                src={"/Rectangle 186.png"}
                title="Bao cao"
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, quas?"
                date="1/1/2020"
              />
            </Grid>
            <Button className={styles.button}>Xem tất cả</Button>
          </Col>
        </Row>
      </LayoutContainer>
    </div>
  );
};

export default News;
