import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { ContainerSmall, Grid } from "../../container";
import Category from "../Category/Category";
import New from "../New/New";
import styles from "./ListNews.module.scss";
const ListNews = ({ news, categories }) => {
  const type = useSelector((state) => state.category.category);
  const renderTypes = useMemo(() => {
    return categories.map((category) => {
      return category.title.toUpperCase();
    });
  }, [categories]);
  return (
    <ContainerSmall className={styles.container}>
      <Grid className={styles.grid}>
        <Category type={type} categories={renderTypes} />
        <New postTypes={renderTypes} news={news} />
      </Grid>
    </ContainerSmall>
  );
};
export default ListNews;
