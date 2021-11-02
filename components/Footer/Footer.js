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
    <>
      <footer className={styles.footer}>
        <LayoutContainer className={styles["container-footer"]}>
          <Grid className={styles.grid}>
            <div
              data-aos="fade-right"
              className={`d-flex flex-column justify-content-between`}
            >
              <Logo className={styles.logo} />
            </div>
            <ul className={styles.list}>
              {paths.map((item, index) => {
                return (
                  <li
                    data-aos="fade-up"
                    data-aos-delay={index * 250}
                    key={item.name}
                    data-aos-offset={120}
                  >
                    <Link href={item.path}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
            <ul className={styles["list-contact"]}>
              <li data-aos="fade-up">Thông tin liên hệ</li>
              <li data-aos="fade-up" data-aos-delay={250}>
                <Image
                  src="/Icon/house-icon.svg"
                  alt=""
                  width="20"
                  height="20"
                />
                <span>Văn phòng Số 24, ngõ 224 Trung Kính, Hà Nội</span>
              </li>
              <li data-aos="fade-up" data-aos-delay={500}>
                <Image
                  src="/Icon/mail-icon.svg"
                  alt=""
                  width="20"
                  height="20"
                />
                <span>Email: contact@mhsolution.vn</span>
              </li>
              <li data-aos="fade-up" data-aos-delay={750}>
                <Image
                  src="/Icon/phone-icon.svg"
                  alt=""
                  width="20"
                  height="20"
                />
                <span>Điện thoại: 0975718168</span>
              </li>
              <li data-aos="fade-up" data-aos-delay={1000}>
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
      <LayoutContainer className={`d-flex justify-content-between align-items-center ${styles["footer-container"]}`}>
        <div className={`d-flex align-items-center ${styles.text}`}>
          <Image
            src="/copy-right.svg"
            alt="copy-right"
            width="17.5"
            height="17.5"
          />
          <span>Copyright 2020</span>
        </div>
        <div className={`d-flex align-items-center ${styles['social-links']}`}>
          <Link href="https://www.facebook.com/mhsolution.vn" passHref={true}>
            <a>
              <Image
                src={"/facebook-white-icon.svg"}
                alt=""
                width="17"
                height="17"
              />
            </a>
          </Link>
          <Link href="/" passHref={true}>
            <a>
              <Image
                src={"/linkedln-white.svg"}
                alt=""
                width="17"
                height="17"
              />
            </a>
          </Link>
        </div>
      </LayoutContainer>
    </>
  );
};

export default Footer;
