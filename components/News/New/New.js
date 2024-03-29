import React, { useCallback, useEffect } from 'react';
import { Grid } from '../../container';
import styles from './New.module.scss';
import RenderNew from './RenderNew/RenderNew';
const New = ({ news, isLoading, turnLoadingToArray, matchMedia, children }) => {
  return (
    <div className={styles.container}>
      {news.length === 0 && !isLoading && <p className='text-center pt-3'>Không có dữ liệu</p>}
      {news.length > 0 && (
        <Grid className={styles.grid}>
          {isLoading && turnLoadingToArray}
          {!isLoading &&
            news &&
            news.map((post) => {
              return (
                <RenderNew
                  key={post.id}
                  date={post.created_at}
                  name={post.title}
                  type={post?.category?.title}
                  url_cover={post.cover_url}
                  category_id={post.category_new_id}
                  id={post.id}
                  seo_id={post.seo_id}
                />
              );
            })}
        </Grid>
      )}
      {children}
    </div>
  );
};

export default New;
