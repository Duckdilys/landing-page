import React from "react";
import Position from "./Position/Position";
import styles from "./Positions.module.scss";
import { Grid, Pagination, SkeletonLoading } from "../../container";
import useMedia  from "../../../hook/use-media";
const Positions = ({ positions, totalDocuments, page, isLoading }) => {
  const matchMedia = useMedia('(max-width: 576px)')
  return (
    <div className={styles.container}>
      <Grid className={styles.grid}>
        {isLoading ? (
          <>
            {Array.from(Array(8).keys()).map((item) => {
              return (
                <SkeletonLoading
                  key={item}
                  times={3}
                  src
                  imageClassName={styles.image}
                  classContainer={`d-flex justify-content-between align-items-center`}
                  containerSkeleton={styles.skeleton}
                />
              );
            })}
          </>
        ) : (
          <>
            {positions.length === 0 && <p className={`text-center ${styles.empty}`}>Không có dữ liệu</p>}
            {positions.length > 0 &&
              positions.map((item, index) => {
                return (
                  <Position
                    key={index}
                    title={item?.title}
                    salary={item?.salary}
                    types={[item?.career, item?.level, item?.work_type]}
                    url={item?.cover_url ? item?.cover_url : "/position.png"}
                    place={item?.work_address}
                    id={item.id}
                    isMobile={matchMedia}
                    time_start={item?.created_at}
                    time_end={item?.end_time}
                    seo_id={item?.seo_id}
                  />
                );
              })}
          </>
        )}
      </Grid>
      {positions.length > 0 && (
        <Pagination
          perPage={8}
          currentPage={page}
          totalDocuments={totalDocuments}
          className={styles.pagination}
        />
      )}
    </div>
  );
};

export default Positions;
