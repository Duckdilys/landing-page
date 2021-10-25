// import { Container } from "react-bootstrap";
import Container from '../container/layout/Container';
import { Logo } from "../container";
import Link from "next/link";
import paths from "./path";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <Container className={styles.container}>
      <nav className={`d-flex justify-content-between align-items-center ${styles.nav}`}>
        <Logo />
        <ul className={`${styles.paths} d-flex align-items-center`}>
          {paths.map((path) => {
            return (
              <li key={path.name}>
                <Link href={path.path}>
                  {path.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Container>
  );
};

export default Navigation;
