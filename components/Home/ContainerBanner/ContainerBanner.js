import { Line, LayoutContainer } from "../../container";
import styles from "./ContainerBanner.module.scss";

const ContainerBanner = () => {
  return (
    <div
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
    </div>
  );
};

export default ContainerBanner;
