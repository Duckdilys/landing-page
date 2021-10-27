import React from "react";
import { LayoutContainer, Logo, Grid } from "../container";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
const paths = [
  {
    name: "Trang chủ",
    path: "/",
  },
  {
    name: "Giới thiệu",
    path: "/",
  },
  {
    name: "Sản phẩm",
    path: "/",
  },
  {
    name: "Tin Tức",
    path: "/",
  },
  {
    name: "Tuyển dụng",
    path: "/",
  },
  {
    name: "Liên hệ",
    path: "/",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <LayoutContainer className={styles["container-footer"]}>
        <Grid className={styles.grid}>
          <div className={`d-flex flex-column justify-content-between`}>
            <Logo className={styles.logo} />
            <div className={`d-flex align-items-center ${styles.text}`}>
              <Image
                src="/copy-right.svg"
                alt="copy-right"
                width="17.5"
                height="17.5"
              />
              <span>Copyright 2020</span>
            </div>
          </div>
          <ul className={styles.list}>
            {paths.map((item) => {
              return (
                <li key={item.name}>
                  <Link href={item.path}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul className={styles['list-contact']}>
            <li>Thông tin liên hệ</li>
            <li>
              <Image src="/Icon/house-icon.svg" alt="" width="20" height="20" />
              <span>Văn phòng Số 24, ngõ 224 Trung Kính, Hà Nội</span>
            </li>
            <li>
              <Image src="/Icon/mail-icon.svg" alt="" width="20" height="20" />
              <span>Email: contact@mhsolution.vn</span>
            </li>
            <li>
              <Image src="/Icon/phone-icon.svg" alt="" width="20" height="20" />
              <span>Điện thoại: 0975718168</span>
            </li>
            <li>
              <Image src="/Icon/web-icon.svg" alt="" width="20" height="20" />
              <a
                rel="noreferrer"
                href="https://www.facebook.com/mhsolution.vn"
                target="_blank"
              >
                Facebook: https://www.facebook.com/mhsolution.vn
              </a>
            </li>
          </ul>
        </Grid>
      </LayoutContainer>
    </footer>
  );
};

export default Footer;
