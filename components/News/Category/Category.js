import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Category.module.scss";
import { categoryActions } from "../../../store/slices/category-slice";
import { useRouter } from "next/router";
const Category = ({ categories, type, matchMedia, onResetPage }) => {
  const dispatch = useDispatch();
  const [position, setPosition] = useState(null);
  const router = useRouter();
  useEffect(() => {
    dispatch(categoryActions.changeCategoryHandler(0));
    // reset
  }, [dispatch]);
  const listRef = useRef();
  const changeType = (id, event) => {
    dispatch(categoryActions.changeCategoryHandler(id));
    const position = event.target.getBoundingClientRect();
    setPosition(position);
    if (onResetPage) {
      onResetPage()
    }
  };
  return (
    <div className={styles.category}>
      {!matchMedia && <h6>Danh mục tin tức</h6>}
      <div className={styles.flow}>
        <ul>
          <li
            className={type === 0 ? styles.active : ""}
            onClick={(event) => changeType(0, event)}
          >
            TẤT CẢ
          </li>
          {categories?.map((category, index) => {
            return (
              <li
                ref={listRef}
                onClick={(event) => changeType(category.categoryId, event)}
                className={type === category.categoryId ? styles.active : ""}
                key={index}
              >
                {category.title.toUpperCase()}
              </li>
            );
          })}
          {matchMedia && (
            <span
              style={
                position
                  ? { width: position?.width, left: position?.left - 23 }
                  : null
              }
              className={styles.line}
            />
          )}
        </ul>
      </div>
    </div>
  );
};

export default Category;
