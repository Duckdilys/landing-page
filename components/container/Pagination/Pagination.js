import React, { useEffect } from "react";
import styles from "./Pagination.module.scss";
import Image from "next/image";
import usePagination from "../../../hook/use-pagination";
import { useRouter } from "next/router";
import Link from "next/link";
import useMedia from "../../../hook/use-media";
const Pagination = ({
  className,
  perPage,
  totalDocuments,
  currentPage,
  isResetPage,
  onResetPage,
}) => {
  // fake pagination, not call api, just data for totally
  const {
    goToNextPage,
    goToPrevPage,
    getTotalPagination,
    page,
    changePageHandler,
  } = usePagination(perPage, currentPage, totalDocuments);
  const isMobile = useMedia("(max-width: 768px)");
  const Router = useRouter();

  useEffect(() => {
    if (isResetPage) {
      changePageHandler(1);
      if (onResetPage) {
        onResetPage()
      }
    }
  }, [isResetPage]);

  return (
    <>
      {totalDocuments === 0 && null}
      <ul
        className={`d-flex justify-content-center align-items-center ${styles.container} ${className}`}
      >
        <li
          className={`${currentPage === 1 ? styles.disabled : ""} ${
            styles["btn--direction"]
          }`}
          onClick={goToPrevPage}
        >
          <Image
            src={"/Icon/arrow-left-orange-icon.svg"}
            alt=""
            height={isMobile ? "8px" : "12px"}
            width={isMobile ? "9px" : "15px"}
          />
        </li>
        {page !== 1 && (
          <Link
            href={`${Router.pathname}?page=${page - 1}`}
            passHref={true}
            scroll={false}
          >
            <a onClick={() => changePageHandler(page - 1)}>
              <li>{page - 1}</li>
            </a>
          </Link>
        )}
        <Link
          href={`${Router.pathname}?page=${page}`}
          passHref={true}
          scroll={false}
        >
          <a onClick={() => changePageHandler(+page)}>
            <li className={styles.active}>{page}</li>
          </a>
        </Link>
        {page !== getTotalPagination && (
          <Link
            href={`${Router.pathname}?page=${page + 1}`}
            passHref={true}
            scroll={false}
          >
            <a onClick={() => changePageHandler(page + 1)}>
              <li>{page + 1}</li>
            </a>
          </Link>
        )}

        <li
          className={`${
            currentPage === getTotalPagination ? styles.disabled : ""
          } ${styles["btn--direction"]}`}
          onClick={goToNextPage}
        >
          <Image
            src={"/Icon/arrow-right-orange-icon.svg"}
            alt=""
            height={isMobile ? "8px" : "12px"}
            width={isMobile ? "9px" : "15px"}
          />
        </li>
      </ul>
    </>
  );
};

export default Pagination;
