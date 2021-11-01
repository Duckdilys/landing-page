import React from "react";
import styles from "./Slide.module.scss";
import { Button, Container } from "../../container";
import Link from "next/link";
import { removeUnicode } from "../../../util";
const Slide = ({ style, title, type }) => {
  return (
    <div style={{ ...style }} className={styles.slide}>
      <Container className={styles.text}>
        <div className={`${styles.container} container-text`}>
          <span>{type}</span>
          <h2>{title}</h2>
          <Link href={`/news/${removeUnicode(title)}`}>
            <a>
              <Button>Tìm hiểu thêm</Button>
            </a>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Slide;
