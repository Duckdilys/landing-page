import React from "react";
import styles from "./Slide.module.scss";
import { Button, Container } from "../../container";
import Link from "next/link";
import useMedia from "../../../hook/use-media";
const Slide = ({ style, title, type, id }) => {
  const isMobile = useMedia('(max-width: 768px)')
  return (
    <div style={{ ...style }} className={styles.slide}>
      <Container className={`${styles.text} container-text`}>
        <div className={`${styles.container}`}>
          <span>{type}</span>
          <h2>{title}</h2>
          {!isMobile && <Link href={`/news/$${id}`}>
            <a>
              <Button className={styles.button}>Tìm hiểu thêm</Button>
            </a>
          </Link>}
        </div>
      </Container>
    </div>
  );
};

export default Slide;
