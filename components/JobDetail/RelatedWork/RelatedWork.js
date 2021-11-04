import React from "react";
import styles from "./RelatedWork.module.scss";
import Position from "../../Recruit/Positions/Position/Position";
import { Grid } from "../../container";
const RelatedWork = ({ relatedWork }) => {
  return (
    <div className={styles.container}>
      <h4>Công việc liên quan</h4>
      <Grid className={styles.grid}>
        {relatedWork.map((work, index) => {
          return (
            <Position
              key={index}
              url={work.url_cover}
              title={work.title}
              date={work.date}
              place={work.place}
              salary={work.salary}
              types={[...work.refer_fields]}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default RelatedWork;
