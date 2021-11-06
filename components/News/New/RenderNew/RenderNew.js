import React from "react";
import styles from "./RenderNew.module.scss";
import Image from "next/dist/client/image";
import Link from "next/link";
import { removeUnicode } from "../../../../util";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../../../store/slices/category-slice";
const RenderNew = ({ name, date, type, url_cover, image }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.new}>
      <div className={`position-relative ${styles.image}`}>
        <Link passHref={true} href={`/news/${removeUnicode(name)}`}>
          <a>
          <Image
            src={url_cover}
            layout="responsive"
            alt=""
            width="297px"
            height="166px"
            objectFit="cover"
            {...image}
          />
          </a>
        </Link>
      </div>
      <div
        className={`d-flex justify-content-between align-items-center ${styles.time}`}
      >
        <h6 onClick={() => dispatch(categoryActions.changeCategoryHandler(type))}>{type}</h6>
        <p>{date}</p>
      </div>
      <Link className={styles.link} href={`/news/${removeUnicode(name)}`}>
        {name}
      </Link>
    </div>
  );
};

export default RenderNew;
