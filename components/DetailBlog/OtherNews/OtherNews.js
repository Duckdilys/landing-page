import React from "react";
import RenderNew from "../../News/New/RenderNew/RenderNew";
import { Grid } from "../../container";
import styles from "./OtherNews.module.scss";
const OtherNews = ({ data }) => {
  return (
    <div className={styles.news}>
      <h4>Tin tức khác</h4>
      <Grid className={styles.grid}>
        {data.news.map((item, index) => {
          if (index < 4) {
            return (
              <RenderNew
                key={index}
                name={item.name}
                date={new Date().toLocaleDateString("vi-vn")}
                type={item.type}
                url_cover={item.url_cover}
                image={{
                    height: '166px',
                    width: '297px'
                }}
              />
            );
          }
        })}
      </Grid>
    </div>
  );
};

export default OtherNews;
