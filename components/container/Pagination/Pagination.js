import React from "react";
import styles from "./Pagination.module.scss";
import Image from "next/image";
const Pagination = ({
  className,
  goToNextPage,
  goToPrevPage,
  currentPage,
  allPagination,
  totalDocuments,
  goToPage,
}) => {
  // fake pagination, not call api, just data for totally
  return (
    <ul
      className={`d-flex justify-content-center align-items-center ${styles.container} ${className}`}
    >
      <li
        className={currentPage === 1 ? styles.disabled : ""}
        onClick={goToPrevPage}
      >
        <Image
          src={"/Icon/arrow-left-orange-icon.svg"}
          alt=""
          height="14"
          width="7"
        />
      </li>
      {allPagination.map((pagination) => {
        return (
          <li
            className={currentPage === pagination ? styles.active : ""}
            onClick={goToPage.bind(null, +pagination)}
            key={pagination}
          >
            {pagination}
          </li>
        );
      })}
      <li
        className={currentPage === totalDocuments ? styles.disabled : ""}
        onClick={goToNextPage}
      >
        <Image
          src={"/Icon/arrow-right-orange-icon.svg"}
          alt=""
          height="14"
          width="7"
        />
      </li>
    </ul>
  );
};

export default Pagination;
