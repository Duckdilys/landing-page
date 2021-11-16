import React from "react";
import { Col, Row } from "react-bootstrap";
import { Image } from "../../../container";
import Link from "next/link";
import { removeUnicode } from "../../../../util";
import styles from "./New.module.scss";
const New = ({ src, title, date, content }) => {
  return (
    <Row>
      <Col
        xs={12}
        sm={12}
        md={6}
        lg={6}
        className={`${styles.image} position-relative`}
      >
        <Image
          className={styles.image}
          src={src}
          alt=""
        />
      </Col>
      <Col xs={12} sm={12} md={6} lg={6} className={styles.content}>
        <Link href={`/${removeUnicode(title)}`}>{title}</Link>
        <p className={styles["text-content"]}>{content}</p>
        <p className={styles.date}>{date}</p>
      </Col>
    </Row>
  );
};
// user agent to check it's bot or not
// HEAD => add ld+json
export default New;
