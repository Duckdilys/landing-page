import React from "react";
import styles from "./Slide.module.scss";
import { Button, Container } from "../../container";
import Link from "next/link";
import useMedia from "../../../hook/use-media";
import { useRouter } from "next/router";
const Slide = ({ style, title, type, id, seo_id, prefixURL }) => {
  const router = useRouter();
  const isMobile = useMedia('(max-width: 768px)')
  return (
    <Link href={`${prefixURL}/${seo_id}`} passHref={true}><div style={{ ...style }} className={styles.slide}>
      <Container className={`${styles.text} container-text container`}>
        <div className={`${styles.container}`}>
          <span>{type}</span>
          <h2>{title}</h2>
          {!isMobile && <Link href={`${prefixURL}/${seo_id}`}>
            <a>
              <Button className={styles.button}>Tìm hiểu thêm</Button>
            </a>
          </Link>}
        </div>
      </Container>
    </div>
    </Link>
  );
};

export default Slide;
