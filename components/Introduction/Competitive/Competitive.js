import React from "react";
import { CardContent, Grid, LayoutContainer } from "../../container";
import styles from "./Competitive.module.scss";
const Competitive = () => {
  return (
    <LayoutContainer>
      <h4>Thế mạnh cạnh tranh</h4>
      <Grid className={styles.grid}>
        <CardContent
          iconSrc={"/project_icon.png"}
          lineClassName={styles.line}
          content="Giải quyết các thách thức trong kinh doanh của bạn với công nghệ Big Data, Data Mining, AI."
          title="Công nghệ cao"
          options={{
              onMouseEnter: () => console.log(1),
              onMouseLeave: () => console.log(0)
          }}
        />
        <CardContent
          iconSrc={"/project_icon.png"}
          lineClassName={styles.line}
          content="Sử dụng bộ chỉ số phân tích chuyên biệt, chúng tôi giúp bạn xây dựng một giải pháp hoàn chỉnh, tập trung phục vụ toàn diện các nhu cầu đặc thù."
          title="Giải pháp chuyên sâu"
        />
        <CardContent
          iconSrc={"/project_icon.png"}
          lineClassName={styles.line}
          content="Các chuyên gia của chúng tôi cam kết đồng hành để phân tích, xây dựng và trình diễn bộ dữ liệu chuyên biệt cho doanh nghiệp của bạn."
          title="chuyên gia đồng hành"
        />
      </Grid>
    </LayoutContainer>
  );
};

export default Competitive;
