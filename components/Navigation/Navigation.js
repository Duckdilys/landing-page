import { Container, Image } from "../container";
import { Logo } from "../container";
import Link from "next/link";
import paths from "./path";
import styles from "./Navigation.module.scss";
const Navigation = () => {
  return (
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
  );
};

export default Navigation;
