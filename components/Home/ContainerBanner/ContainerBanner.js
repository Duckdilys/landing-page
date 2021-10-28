import {
  Line,
  LayoutContainer,
  ContainerBanner as Container,
} from "../../container";
import styles from "./ContainerBanner.module.scss";

const ContainerBanner = () => {
  return (
    <Container
      className={`${styles.banner} d-flex justify-content-start align-items-end`}
    >
      <LayoutContainer className={styles.container}>
        <div data-aos="fade-right" className={styles.content}>
          <h3 className={styles.title}>Giải pháp 4.0</h3>
          <Line className={styles.line} />
          <p className={styles.text}>
            Hệ sinh thái giải pháp toàn diện về dữ liệu, quảng cáo, truyền thông
            và mạng xã hội nội bộ cho doanh nghiệp, tổ chức, cơ quan nhà nước.
          </p>
        </div>
      </LayoutContainer>
    </Container>
  );
};

export default ContainerBanner;
