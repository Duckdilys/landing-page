import React, { useEffect, useState } from "react";
import Box from "./Box/Box";
import styles from "./Overview.module.scss";
import { Button } from "../../container";
import { useDispatch } from "react-redux";
import { modelActions } from "../../../store/slices/model-slice";
const Overview = ({ overview, timeIsExpire }) => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(null);
  useEffect(() => {
    if (overview.end_time) {
      setDate(new Date(overview.end_time).toLocaleDateString("vi-vn"));
    }
  }, [overview.end_time]);
  return (
    <div className={styles.container}>
      <h5>Tổng quan về công việc</h5>
      <div className={styles.box}>
        <Box
          title="Mức lương"
          content={overview?.salary}
          className={styles.salary}
        />
        {/* <Box title="Cấp bậc" content={overview?.level} /> */}
        <Box title="Kinh nghiệm" content={overview?.work_experience} />
        <Box title="Hình thức làm việc" content={overview?.work_type} />
        <Box title="Số lượng cần tuyển" content={overview?.number_recruits} />
        <Box title="Địa chỉ làm việc" content={overview?.work_address} />
        <Box
        className={styles.hidden}
          title="Hạn nộp hồ sơ"
          content={date ? date : "Không giới hạn thời gian"}
        />
        {!timeIsExpire && <div className={styles.button}>
          <Button options={{
            onClick: () => dispatch(modelActions.openModelHandler())
          }}>Ứng tuyển ngay</Button>
        </div>}
      </div>
    </div>
  );
};

export default Overview;
