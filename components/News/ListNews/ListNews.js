import React, { useMemo } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ContainerSmall, Grid } from "../../container";
import Category from "../Category/Category";
import New from "../New/New";
import styles from "./ListNews.module.scss";
const ListNews = ({ news }) => {
  const router = useRouter();

  const type = useSelector((state) => state.category.category);
  const renderTypes = useMemo(() => {
    return news.map((post) => {
      return post.type;
    });
  }, [news]);
  return (
    <ContainerSmall className={styles.container}>
      <Grid className={styles.grid}>
        <Category type={type} category={renderTypes} />
        <New postTypes={[...new Set(renderTypes)]} news={news} />
      </Grid>
    </ContainerSmall>
  );
};
export default ListNews;
