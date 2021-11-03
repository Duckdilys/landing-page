import React from "react";
import styles from "./BreadCrumb.module.scss";
import Image from "next/image";
import Link from "next/link";
const BreadCrumb = ({ date, paths, className }) => {
  return (
    <div
      className={`d-flex justify-content-between align-items-center ${styles["bread-crumb"]} ${className}`}
    >
      <ul>
        <Link href="/" passHref={true}>
          <a>
            <li>
              <Image src="/home-icon.svg" width="20px" height="20px" alt="" />
              <span>
                <Image
                  src="/arrow-bread-crumb-icon.svg"
                  height="10px"
                  width="6px"
                  alt=""
                />
              </span>
            </li>
          </a>
        </Link>
        {paths &&
          paths.map((path, index) => {
            console.log(path);
            return (
              <Link href={"/"} key={index}>
                <a>
                  <li className={path.color ? styles.color : ''}>
                    {path.name}{" "}
                    {index !== paths.length - 2 && (
                      <span>
                        <Image
                          src={"/arrow-bread-crumb-icon.svg"}
                          alt=""
                          width="6px"
                          height="10px"
                        />
                      </span>
                    )}
                  </li>
                </a>
              </Link>
            );
          })}
      </ul>
      {date && (
        <div className={`d-flex align-items-center ${styles.date}`}>
          <Image src={"/clock-icon.svg"} alt="" width="16px" height="16px" />
          <span>{date}</span>
        </div>
      )}
    </div>
  );
};

export default BreadCrumb;
