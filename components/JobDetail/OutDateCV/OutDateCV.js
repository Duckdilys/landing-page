import React from "react";
import styles from "./OutDateCV.module.scss";
import { Button } from "../../container";
import { useDispatch } from "react-redux";
import { modelActions } from "../../../store/slices/model-slice";
const OutDateCV = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.outdate}>
      <h4>Công việc đã hết hạn ứng tuyển</h4>
      <p>
        Bạn quan tâm công việc này? Hãy gửi lại CV của bạn tại đây và chúng tôi
        sẽ liên hệ lại với bạn khi có công việc phù hợp.
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
