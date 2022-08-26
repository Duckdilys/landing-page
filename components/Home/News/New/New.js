import React from "react";
import { Col, Row } from "react-bootstrap";
import { Image } from "../../../container";
import Link from "next/link";
import styles from "./New.module.scss";
import useMedia from "../../../../hook/use-media";
import { StringToHTML } from "../../../container";
const New = ({ src, title, date, content, id, seo_id }) => {
  const matchMedia = useMedia('(max-width: 576px)');
  return (
    <Row>
      <Col
        xs={6}
        sm={6}
        md={6}
        lg={6}
        className={`${styles.image} ${styles.contain} position-relative`}
      >
        <Link href={`/news/${id}/${seo_id}`} passHref={true}>
          <a>
            <Image size={512} isApplied={true} className={styles.image} src={src} alt="" />
          </a>
        </Link>
      </Col>
      <Col xs={6} sm={6} md={6} lg={6} className={styles.content}>
        <Link href={`/news/${id}/${seo_id}`}>{title}</Link>
        {!matchMedia && <div className={styles["text-content"]}>{<StringToHTML string={content}/>}</div>}
        <p className={styles.date}>{date}</p>
      </Col>
    </Row>
  );
};
// user agent to check it's bot or not
// HEAD => add ld+json
export default New;
