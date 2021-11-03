import React from "react";
import Position from "./Position/Position";
import styles from "./Positions.module.scss";
import { Grid } from "../../container";
const Positions = ({ positions }) => {
  return (
    <div className={styles.container}>
      <Grid className={styles.grid}>
        {positions.map((item, index) => {
          return (
            <Position
              key={index}
              title={item.title}
              date={item.date}
              salary={item.salary}
              types={item.refer_fields}
              url={item.url_cover}
              place={item.place}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default Positions;
