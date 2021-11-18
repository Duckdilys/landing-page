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
          className={type === 0 ? styles.active : ""}
          onClick={() => dispatch(categoryActions.changeCategoryHandler(0))}
        >
          TẤT CẢ
        </li>
        {categories?.map((category, index) => {
          return (
            <li
              onClick={() =>
                dispatch(categoryActions.changeCategoryHandler(category.categoryId))
              }
              className={type === category.categoryId ? styles.active : ''}
              key={index}
            >
              {category.title.toUpperCase()}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
