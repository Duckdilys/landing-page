import React from "react";
import styles from "./Position.module.scss";
import Image from "next/image";
import Link from "next/link";
import Type from "./Type/Type";
import useMedia from "../../../../hook/use-media";
const Position = ({
  url,
  title,
  place,
  salary,
  types,
  id,
  isMobile,
  time_start,
  time_end,
}) => {
  return (
    <Link href={`/recruit/${id}`}>
      <a>
        <div
          className={`${styles.container} ${
            Date.now() > time_end && styles.disabled
          }`}
        >
          <div
            className={`${!isMobile && "d-flex justify-content-between"} ${
              styles.wrap
            }`}
          >
            {!isMobile && (
              <div
                className={`position-relative ${styles.image} ${
                  Date.now() > time_end ? styles.finished : ""
                }`}
              >
                {url && <Image src={url} alt="" width="92px" height="80px" />}
                {Date.now() > time_end && (
                  <span className={styles["expired-time"]}>Đã hết hạn</span>
                )}
              </div>
            )}
            <div className={styles.content}>
              <div
                className={`d-flex justify-content-between align-items-center flex-wrap`}
              >
                <div>
                  <h5>{title}</h5>
                </div>

                {Date.now() < time_end &&
                  Date.now() < time_start + 14 * 24 * 60 * 60 * 1000 && (
                    <span className={styles.new}>Mới</span>
                  )}
                {Date.now() > time_end && isMobile && (
                  <span className={`${styles.new} ${styles.old}`}>
                    Đã hết hạn
                  </span>
                )}
              </div>
              <div className={styles.information}>
                <p className={styles.salary}>
                  <svg
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 0.166626C1.17157 0.166626 0.5 0.838199 0.5 1.66663V3.54163C0.5 3.74873 0.667893 3.91663 0.875 3.91663H15.125C15.3321 3.91663 15.5 3.74873 15.5 3.54163V1.66663C15.5 0.838199 14.8284 0.166626 14 0.166626H2Z"
                      fill="#1D1D1D"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.5 5.79163C0.5 5.58452 0.667893 5.41663 0.875 5.41663H15.125C15.3321 5.41663 15.5 5.58452 15.5 5.79163V10.6666C15.5 11.4951 14.8284 12.1666 14 12.1666H2C1.17157 12.1666 0.5 11.4951 0.5 10.6666V5.79163ZM10.25 8.41663C10.25 8.00241 10.5858 7.66663 11 7.66663H12.5C12.9142 7.66663 13.25 8.00241 13.25 8.41663C13.25 8.83084 12.9142 9.16663 12.5 9.16663H11C10.5858 9.16663 10.25 8.83084 10.25 8.41663Z"
                      fill="#1D1D1D"
                    />
                  </svg>
                  <span>{salary}</span>
                </p>
                <div className="d-flex align-items-center flex-wrap">
                  <p className={styles.date}>
                    <svg
                      width="14"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.79292 16.8564C10.8419 14.8861 13.6663 11.4091 13.6663 7.1475C13.6663 3.56787 10.6816 0.666016 6.99967 0.666016C3.31778 0.666016 0.333008 3.56787 0.333008 7.1475C0.333008 11.4091 3.15746 14.8861 6.20643 16.8564C6.99967 17.369 6.99967 17.369 7.79292 16.8564ZM6.99967 10.666C8.84062 10.666 10.333 9.17363 10.333 7.33268C10.333 5.49173 8.84062 3.99935 6.99967 3.99935C5.15872 3.99935 3.66634 5.49173 3.66634 7.33268C3.66634 9.17363 5.15872 10.666 6.99967 10.666Z"
                        fill="#1D1D1D"
                      />
                    </svg>
                    <span>{place}</span>
                  </p>
                  <p>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="8" cy="8" r="7.5" fill="#45403E" />
                      <path
                        d="M7.9925 0.5C3.8525 0.5 0.5 3.86 0.5 8C0.5 12.14 3.8525 15.5 7.9925 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 7.9925 0.5ZM8 14C4.685 14 2 11.315 2 8C2 4.685 4.685 2 8 2C11.315 2 14 4.685 14 8C14 11.315 11.315 14 8 14Z"
                        fill="#45403E"
                      />
                      <path
                        d="M8.375 4.25H7.25V8.75L11.1875 11.1125L11.75 10.19L8.375 8.1875V4.25Z"
                        fill="white"
                      />
                    </svg>
                    <span>
                      Hạn ứng tuyển:{" "}
                      {new Date(time_end).toLocaleDateString("vi-vn")}
                    </span>
                  </p>
                </div>
              </div>
              {!isMobile && types && (
                <div className={`d-flex align-items-center ${styles.flex}`}>
                  {types.map((type, index) => {
                    return (
                      <Type className={styles["work-type"]} key={index}>
                        {type}
                      </Type>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div className={`d-flex align-items-center ${styles.flex}`}>
            {types &&
              isMobile &&
              types.map((type, index) => {
                return (
                  <Type className={styles["work-type"]} key={index}>
                    {type}
                  </Type>
                );
              })}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Position;
