import { Line, LayoutContainer, ContainerBanner as Container, SwiperContainer } from '../../container';
import { SwiperSlide } from 'swiper/react';
import styles from './ContainerBanner.module.scss';
const ContainerBanner = ({ banner }) => {
  return (
    <SwiperContainer
      pagination
      containerPagination={styles.pagination}
      classNameActiveBullet={styles.active}
      classNameNormalBullet={styles.bullet}
      delay={5000}
      config={{
        speed: 1000,
      }}
      className={styles.swiper}
      loop
    >
      {(banner ||[]).map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <Container
              className={`${styles.banner} d-flex justify-content-start align-items-end`}
              style={{ background: `url('${item?.src_image}')` }}
            >
              <LayoutContainer className={styles.container}>
                <div data-aos='fade-up' className={styles.content}>
                  <h3 className={styles.title}>{item?.title}</h3>
                  {item?.content && <Line className={styles.line} />}
                  <p className={styles.text}>{item?.content}</p>
                </div>
              </LayoutContainer>
            </Container>
          </SwiperSlide>
        );
      })}
    </SwiperContainer>
  );
};

export default ContainerBanner;
