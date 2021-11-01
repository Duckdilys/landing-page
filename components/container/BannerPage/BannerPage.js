import React from "react";
import { BoxLayout, ContainerBanner } from "..";

const BannerPage = ({ classNameBanner, title, introduction, classNameBox }) => {
  return (
    <>
      <ContainerBanner className={classNameBanner} />
      <BoxLayout className={classNameBox}>
          {title && <h4>{title}</h4>}
          {introduction && <p>{introduction}</p>}
      </BoxLayout>
    </>
  );
};

export default BannerPage;
