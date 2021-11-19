import React from "react";
import Position from "./Position/Position";
import styles from "./Positions.module.scss";
import { Grid, Pagination } from "../../container";
const Positions = ({ positions, totalDocuments, page }) => {
  return (
    <div className={styles.container}>
      <Grid className={styles.grid}>
        {positions.length === 0 && <p>Không có dữ liệu</p>}
        {positions.length > 0 &&  positions.map((item, index) => {
          return (
            <Position
              key={index}
              title={item?.title}
              date={new Date(item?.created_at).toLocaleDateString('en-us')}
              salary={item?.salary}
              types={[item?.level]}
              url={item.infos[0] ? item.infos[0]?.src : '/position.png'}
              place={item?.work_address}
              id={item.id}
            />
          );
        })}
      </Grid>
      {totalDocuments !== 0 && <Pagination perPage={8} currentPage={page} totalDocuments={totalDocuments}/>}
    </div>
  );
};

export default Positions;
