import React from "react";
import { useDispatch } from "react-redux";
import styles from "./Category.module.scss";
import { categoryActions } from "../../../store/slices/category-slice";
const Category = ({ categories, type }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.category}>
      <h6>Danh mục tin tức</h6>
      <ul>
        <li
          className={type === "all" ? styles.active : ""}
          onClick={() => dispatch(categoryActions.changeCategoryHandler("all"))}
        >
          TẤT CẢ
        </li>
        {categories?.map((category, index) => {
          return (
            <li
              onClick={() =>
                dispatch(categoryActions.changeCategoryHandler(category))
              }
              className={type === category ? styles.active : ''}
              key={index}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
