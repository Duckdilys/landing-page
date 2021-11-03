import React from "react";
import Position from "./Position/Position";
import styles from "./Positions.module.scss";
import { Grid, Pagination } from "../../container";
import usePagination from "../../../hook/use-pagination";
const Positions = ({ positions }) => {
  const {
    goToNextPage,
    goToPrevPage,
    goToPage,
    getPaginationRender,
    getDataRender,
    currentPage,
    totalDocuments
  } = usePagination(positions, 3);
  return (
    <div className={styles.container}>
      <Grid className={styles.grid}>
        {getDataRender().map((item, index) => {
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
      <Pagination
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
        goToPage={goToPage}
        currentPage={currentPage}
        allPagination={getPaginationRender()}
        totalDocuments={totalDocuments}
      />
    </div>
  );
};

export default Positions;
