import React from "react";
import { Button } from "../../container";
import styles from "./SuccessModel.module.scss";
import Image from "next/image";
const SuccessModel = ({
  onRemoveModel,
  className,
  title,
  contentMessage,
  error,
}) => {
  return (
    <div
      className={`${styles.box} ${
        error ? styles.error : ""
      } text-center ${className}`}
    >
      <div className={styles.img}>
        <div
          className={`position-relative rounded-circle d-flex justify-content-center align-items-center text-center ${
            error ? styles.error : ""
          } ${styles.image}`}
        >
          <Image
            src={error ? "/error-icon.svg" : "/success-icon.svg"}
            alt=""
            width="21"
            height="21"
          />
        </div>
      </div>
      <h4>{title ? title : "Chúng tôi đã nhận được thông tin của bạn"}</h4>
      <p>
        {contentMessage
          ? contentMessage
          : "Chúng tôi sẽ liên hệ với bạn sau 2-3 ngày làm việc. Hãy để ý email để tránh không bị bỏ những thông tin mới nhất từ chúng tôi nhé."}
      </p>
      <Button
        options={{
          onClick: onRemoveModel,
        }}
      >
        {error ? "Thử lại" : "Tôi đã hiểu"}
      </Button>
    </div>
  );
};

export default SuccessModel;
