import React, { useCallback, useEffect, useState } from "react";
import { Container, Image } from "../container";
import { Logo } from "../container";
import Link from "next/link";
import paths from "./path";
import styles from "./Navigation.module.scss";
const Navigation = () => {
  const [navIsScrolled, setNavIsScrolled] = useState(false);
  const scrollWindowHandler = useCallback(() => {
    const valueOffset = window.scrollY;
    if (valueOffset > 50) {
      setNavIsScrolled(true);
    } else {
      setNavIsScrolled(false);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", scrollWindowHandler);
  }, [scrollWindowHandler]);
  return (
    <div className={`${styles["nav-fix"]} ${navIsScrolled && styles['nav-fix-scrolled']}`}>
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
                    className={`position-relative ${styles.dropdown}`}
                    key={path.name}
                  >
                    <Link href={path.path} passHref={true}>
                      <a>
                        {path.name}
                        <Image src={"/Icon/arrow-bottom-icon.svg"} alt="" />
                      </a>
                    </Link>
                    <ul className={styles['list-dropdown']}>
                      <li><Link href="/">Giải pháp mạng xã hội nội bộ cho doanh nghiệp và tổ chức</Link></li>
                      <li><Link href="/">Giải pháp mạng xã hội nội bộ cho doanh nghiệp và tổ chức</Link></li>
                      <li><Link href="/">Giải pháp mạng xã hội nội bộ cho doanh nghiệp và tổ chức</Link></li>
                      <li><Link href="/">Giải pháp mạng xã hội nội bộ cho doanh nghiệp và tổ chức</Link></li>
                    </ul>
                  </li>
                );
              }
              return (
                <li key={path.name}>
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
