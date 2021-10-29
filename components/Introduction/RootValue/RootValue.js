import React from "react";
import { Container } from "react-bootstrap";
import styles from "./RootValue.module.scss";
import { Logo } from "../../container";
import Circle from "./Circle/Circle";
const RootValue = ({ data }) => {
  return (
    <div className={styles["container-bg"]}>
      <Container className={`text-center ${styles.container}`}>
        <h4>Giá trị cốt lõi</h4>
        <p className={styles.intro}>
          Chúng tôi tập trung vào phát triển con người và văn hóa doanh nghiệp.
          Với 5 giá trị cốt lõi, nhân sự của chúng tôi luôn luôn phát triển và
          hoàn thiện với tinh thần{" "}
        </p>
        <h5>
          “Sáng tạo, chủ động, phát huy tính đồng đội, trách nhiệm với bản thân,
          công ty và khách hàng.”
        </h5>
        <div
          className={`rounded-circle d-flex justify-content-center align-items-center position-relative ${styles["big-circle"]}`}
        >
          <div
            className={`rounded-circle d-flex justify-content-center align-items-center position-relative ${styles["small-circle"]}`}
          >
            <Logo width="120" height="80" />
          </div>
          <div className={styles["container-circle"]}>
            {data.map((item, index) => {
              return (
                <div
                  style={{
                    transform: `rotate(${
                      Math.round(360 / data.length) * index
                    }deg)`
                  }}
                  className={styles["circle-element"]}
                  key={item.title}
                >
                  <div
                    style={{
                      transform: `rotate(-${
                        Math.round(360 / data.length) * index
                      }deg)`,
                    }}
                    className={`d-flex justify-content-center align-items-center flex-column ${styles.element}`}
                  >
                    <Circle style={{ background: item.backgroundColor, boxShadow: `${item.shadow}` }}>
                      {index + 1}
                    </Circle>
                    <span className={styles.text}>{item.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RootValue;
