import React from "react";
import { Button } from "../../container";
import styles from "./SuccessModel.module.scss";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { modelActions } from "../../../store/slices/model-slice";
const SuccessModel = ({onRemoveModel, className}) => {
  const dispatch = useDispatch();
  return (
    <div className={`${styles.box} text-center ${className}`}>
      <div className={styles.img}>
        <div
          className={`position-relative rounded-circle d-flex justify-content-center align-items-center text-center ${styles.image}`}
        >
          <Image src="/success-icon.svg" alt="" width="21" height="21" />
        </div>
      </div>
      <h4>Chúng tôi đã nhận được thông tin của bạn</h4>
      <p>
        Chúng tôi sẽ liên hệ với bạn sau 2-3 ngày làm việc. Hãy để ý email để
        tránh không bị bỏ những thông tin mới nhất từ chúng tôi nhé.
      </p>
      <Button
        options={{
          onClick: onRemoveModel,
        }}
      >
        Tôi đã hiểu
      </Button>
    </div>
  );
};

export default SuccessModel;
