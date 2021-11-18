import React from "react";
import { CardContent, Grid, ContainerSmall } from "../../container";
import styles from "./Competitive.module.scss";
const Competitive = ({ data }) => {
  return (
    <ContainerSmall>
      <h4>Thế mạnh cạnh tranh</h4>
      <Grid
        config={{
          "data-aos": "fade-up",
          "data-aos-offset": 300,
        }}
        className={styles.grid}
      >
        {data ? (
          data?.map((item, index) => {
            return (
              <CardContent
                key={index}
                iconSrc={item?.src || "/project_icon.png"}
                lineClassName={styles.line}
                title={item?.title || "không có tiêu đề"}
                content={item?.content || "Không có tiêu đề"}
              />
            );
          })
        ) : (
          <p className="pt-5 text-center">Không có dữ liệu</p>
        )}
      </Grid>
    </ContainerSmall>
  );
};

export default Competitive;
