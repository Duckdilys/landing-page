import React from "react";
import Box from "./Box/Box";
import styles from './Overview.module.scss';
const Overview = ({overview}) => {
    const getOverviewStatic = Object.values(overview);
    const titles = ['Mức lương', 'Cấp bậc', 'Kinh nghiệm', 'Hình thức làm việc', 'Số lượng cần tuyển', 'Địa chỉ làm việc', 'Hạn nộp hồ sơ'];
    return(
        <div className={styles.container}>
            <h5>Tổng quan về công việc</h5>
            <div className={styles.box}>
                {titles.map((item, index) => {
                    return <Box key={index} title={item} content={getOverviewStatic[index]}/>
                })}
            </div>
        </div>
    )
}

export default Overview;