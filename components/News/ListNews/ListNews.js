import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { ContainerSmall, Grid, SkeletonLoading } from "../../container";
import Category from "../Category/Category";
import New from "../New/New";
import styles from "./ListNews.module.scss";
import useMedia from "../../../hook/use-media";
const ListNews = ({ news, categories, isLoading, perPage, renderPagination}) => {
  const matchMedia = useMedia("(max-width: 991px)");
  const type = useSelector((state) => state.category.category);
  const [isResetPage, setIsResetPage] = useState(false);
  const renderTypes = useMemo(() => {
    return categories.map((category) => {
      return {
        categoryId: category.id,
        title: category.title,
      };
    });
  }, [categories]);
  
  const onResetPage = () => { 
    setIsResetPage(prev => !prev)
  }
  
  const turnLoadingToArray = Array.from(Array(perPage).keys()).map((item) => {
    return (
      <SkeletonLoading key={item} times={2} src imageClassName={styles.image} />
    );
  });
  return (
    <>
      {matchMedia && (
        <Category
          type={type}
          categories={renderTypes}
          matchMedia={matchMedia}
        />
      )}
      <ContainerSmall className={styles.container}>
        <Grid className={styles.grid}>
          {!matchMedia && (
            <Category
              onResetPage={onResetPage}
              type={type}
              categories={renderTypes}
              matchMedia={matchMedia}
            />
          )}
          <New
            matchMedia={matchMedia}
            isLoading={isLoading}
            postTypes={renderTypes}
            news={news}
            turnLoadingToArray={turnLoadingToArray}
          >
            {
              renderPagination({isResetPage, onResetPage})
            }
           
          </New>
        </Grid>
      </ContainerSmall>
    </>
  );
};
export default ListNews;
