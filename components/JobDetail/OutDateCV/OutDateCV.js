import React from "react";
import styles from "./OutDateCV.module.scss";
import { Button } from "../../container";
import { useDispatch } from "react-redux";
import { modelActions } from "../../../store/slices/model-slice";
const OutDateCV = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.outdate}>
      <h4>Vị trí này đã hết hạn ứng tuyển</h4>
      <p>
        Nếu bạn quan tâm đến vị trí này, vui lòng gửi lại CV của bạn tại đây.
        Chúng tôi sẽ lưu lại hồ sơ của bạn và liên hệ ngay khi có vị trí phù
        hợp.
      </p>
      <Button
        options={{
          onClick: () => dispatch(modelActions.openModelHandler()),
        }}
      >
        Gửi CV
      </Button>
    </div>
  );
};

export default OutDateCV;
