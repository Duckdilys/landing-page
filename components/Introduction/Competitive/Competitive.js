import React from "react";
import { CardContent, Grid, ContainerSmall } from "../../container";
import styles from "./Competitive.module.scss";
const Competitive = () => {
  return (
    <ContainerSmall>
      <h4>Thế mạnh cạnh tranh</h4>
      <Grid config={{
        'data-aos': 'fade-up',
        'data-aos-offset': 300
      }} className={styles.grid}>
        <CardContent
          aos='fade-right'
          iconSrc={"/project_icon.png"}
          lineClassName={styles.line}
          content="Giải quyết các thách thức trong kinh doanh của bạn với công nghệ Big Data, Data Mining, AI."
          title="Công nghệ cao"
        />
        <CardContent
          aos='fade-up'
          iconSrc={"/project_icon.png"}
          iconChangeInHover={'/Icon/Card/white-card.svg'}
          lineClassName={styles.line}
          content="Sử dụng bộ chỉ số phân tích chuyên biệt, chúng tôi giúp bạn xây dựng một giải pháp hoàn chỉnh, tập trung phục vụ toàn diện các nhu cầu đặc thù."
          title="Giải pháp chuyên sâu"
        />
        <CardContent
          aos='fade-left'
          iconSrc={"/Icon/people-icon.svg"}
          lineClassName={styles.line}
          content="Các chuyên gia của chúng tôi cam kết đồng hành để phân tích, xây dựng và trình diễn bộ dữ liệu chuyên biệt cho doanh nghiệp của bạn."
          title="chuyên gia đồng hành"
        />
      </Grid>
    </ContainerSmall>
  );
};

export default Competitive;
