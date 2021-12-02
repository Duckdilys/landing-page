import React from "react";
import styles from "./RelatedWork.module.scss";
import Position from "../../Recruit/Positions/Position/Position";
import { Grid } from "../../container";
import { SkeletonLoading } from "../../container";
import useMedia from "../../../hook/use-media";
const RelatedWork = ({ related_jobs }) => {
  const isMobile = useMedia("(max-width: 576px)");
  console.log(related_jobs);
  return (
    <div className={styles.container}>
      <h4>Công việc liên quan</h4>
      <Grid className={styles.grid}>
        {related_jobs?.map((work, index) => {
          return (
            <Position
              key={index}
              url={work.infos[0] ? work.infos[0]?.src : "/static_recruit.png"}
              title={work?.title}
              date={new Date(work?.created_at).toLocaleDateString("vi-vn")}
              place={work?.work_address}
              salary={work?.salary}
              types={[work?.work_type, work?.level, work?.career]}
              isMobile={isMobile}
              id={work.id}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default RelatedWork;
