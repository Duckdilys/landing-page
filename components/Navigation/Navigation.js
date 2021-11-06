import React, { useCallback, useEffect, useState, useRef } from "react";
import { Container, Image } from "../container";
import { useRouter } from "next/router";
import { Logo } from "../container";
import Link from "next/link";
import paths from "./path";
import styles from "./Navigation.module.scss";
const Navigation = () => {
  const router = useRouter();
  const [navIsScrolled, setNavIsScrolled] = useState(false);

  const scrollWindowHandler = useCallback(() => {
    const valueOffset = window.scrollY;
    if (valueOffset > 100) {
      setNavIsScrolled(true);
    } else {
      setNavIsScrolled(false);
    }
  }, []);
  const listRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", scrollWindowHandler);
  }, [scrollWindowHandler]);
  return (
    <div
      className={`${styles["nav-fix"]} ${
        navIsScrolled && styles["nav-fix-scrolled"]
      }`}
    >
      <Container className={styles.container}>
        <nav
          className={`d-flex justify-content-between align-items-center ${styles.nav}`}
        >
          <Link href="/" passHref={true}>
            <a>
              <Logo />
            </a>
          </Link>
          <ul className={`${styles.paths} d-flex align-items-center`}>
            {paths.map((path, index) => {
              if (index === 2) {
                return (
                  <li
                    className={`position-relative ${styles.dropdown} ${
                      router.pathname === path.path && styles.active
                    }`}
                    key={path.name}
                  >
                    <Link href={path.path} passHref={true}>
                      <a className='d-flex justify-content-between align-items-center'>
                        {path.name}
                        <svg
                          width="14"
                          height="8"
                          viewBox="0 0 14 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.23793 -4.99558e-07L6.99984 4.7619L11.7617 -8.32597e-08L13.6665 0.952381L6.99984 7.61905L0.33317 0.95238L2.23793 -4.99558e-07Z"
                            fill="#1D1D1D"
                          />
                        </svg>
                      </a>
                    </Link>
                    <ul ref={listRef} className={`${styles["list-dropdown"]}`}>
                      <li>
                        <Link href="/">
                          Giải pháp mạng xã hội nội bộ cho doanh nghiệp và tổ
                          chức
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          Giải pháp mạng xã hội nội bộ cho doanh nghiệp và tổ
                          chức
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          Giải pháp mạng xã hội nội bộ cho doanh nghiệp và tổ
                          chức
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          Giải pháp mạng xã hội nội bộ cho doanh nghiệp và tổ
                          chức
                        </Link>
                      </li>
                    </ul>
                  </li>
                );
              }
              return (
                <li
                  className={router.pathname === path.path ? styles.active : ""}
                  key={path.name}
                >
                  <Link href={path.path}>{path.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default Navigation;
