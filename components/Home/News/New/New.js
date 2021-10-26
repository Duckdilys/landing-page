import React from "react";
import { Col, Row } from "react-bootstrap";
import { Image } from "../../../container";
import Link from "next/link";
import { removeUnicode } from "../../../../util";
import styles from "./New.module.scss";
const New = ({ src, title, date, content }) => {
  return (
    <Row>
      <Col xs={12} sm={12} md={6} lg={6} className={styles.image}>
        <Image src={src} alt="" />
      </Col>
      <Col xs={12} sm={12} md={6} lg={6} className={styles.content}>
        <Link href={`/${removeUnicode(title)}`}>{title}</Link>
        <p className={styles['text-content']}>{content}</p>
        <p className={styles.date}>{date}</p>
      </Col>
    </Row>
  );
};

export default New;
