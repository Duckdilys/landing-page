import React from "react";
import styles from "./RenderNew.module.scss";
import { Image } from "../../../container";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../../../store/slices/category-slice";
const RenderNew = ({ name, date, type, url_cover, image, category_id, id, className, routeClassName, seo_id }) => {
  const dispatch = useDispatch();
  return (
    <div className={`${styles.new} ${className}`}>
      <div className={`position-relative ${styles.image}`}>
        <Link passHref={true} href={`/new/${seo_id}`}>
          <a>
            <Image
              size={512}
              isApplied={true}
              alt=""
              src={url_cover}
            />
          </a>
        </Link>
      </div>
      <div
        className={`d-flex justify-content-between align-items-center ${styles.time} ${routeClassName}`}
      >
        <h6 onClick={() => dispatch(categoryActions.changeCategoryHandler(category_id))}>{type}</h6>
        <p>{date}</p>
      </div>
      <Link className={styles.link} href={`/new/${seo_id}`}>
        {name}
      </Link>
    </div>
  );
};

export default RenderNew;
