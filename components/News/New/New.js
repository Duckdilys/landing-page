import React, { useCallback, useEffect, useState } from "react";
import { Grid, Pagination } from "../../container";
import { useSelector } from "react-redux";
import styles from "./New.module.scss";
import RenderNew from "./RenderNew/RenderNew";
import usePagination from "../../../hook/use-pagination";
const New = ({ news }) => {
  const [posts, setPosts] = useState(news);
  const category = useSelector((state) => state.category.category);
  const {
    goToNextPage,
    goToPrevPage,
    getDataRender,
    getPaginationRender,
    currentPage,
    totalDocuments,
    goToPage,
  } = usePagination(posts, 2);
  const filterPostByCategory = useCallback(() => {
    if (category === "all") {
      return setPosts(news);
    }
    const filterPost = news.filter((post) => {
      return post.type.toString() === category.toString();
    });
    setPosts(filterPost);
  }, [category, news]);
  useEffect(() => {
    filterPostByCategory();
  }, [filterPostByCategory]);
  return (
    <div className={styles.container}>
      <h5>Tin gần đây</h5>
      <Grid className={styles.grid}>
        {getDataRender().map((post, index) => {
          return (
            <RenderNew
              key={index}
              date={post.date}
              name={post.name}
              type={post.type}
              url_cover={post.url_cover}
            />
          );
        })}
      </Grid>
      <Pagination
        allPagination={getPaginationRender()}
        currentPage={currentPage}
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
        totalDocuments={totalDocuments}
        goToPage={goToPage}
      />
    </div>
  );
};

export default New;
