import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { ContainerSmall, Grid, SkeletonLoading } from "../../container";
import Category from "../Category/Category";
import New from "../New/New";
import styles from "./ListNews.module.scss";
const ListNews = ({ news, categories, isLoading, perPage }) => {
  const type = useSelector((state) => state.category.category);
  const renderTypes = useMemo(() => {
    return categories.map((category) => {
      return {
        categoryId: category.id,
        title: category.title,
      };
    });
  }, [categories]);
  const turnLoadingToArray = Array.from(Array(perPage).keys()).map((item) => {
    return (
      <SkeletonLoading key={item} times={2} src imageClassName={styles.image} />
    );
  });
  return (
    <ContainerSmall className={styles.container}>
      <Grid className={styles.grid}>
        <Category type={type} categories={renderTypes} />
        <New isLoading={isLoading} postTypes={renderTypes} news={news} turnLoadingToArray={turnLoadingToArray}/>
      </Grid>
    </ContainerSmall>
  );
};
export default ListNews;
