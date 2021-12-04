import React from "react";
import { BoxLayout, ContainerBanner } from "..";
import { StringToHTML } from "..";
import styles from './styles.module.scss';
const BannerPage = ({
  classNameBanner,
  title,
  introduction,
  classNameBox,
  style,
  children
}) => {
  return (
    <>
      <ContainerBanner className={classNameBanner} style={{...style}} />
      <BoxLayout className={`${styles.container} ${classNameBox}`}>
        {title && <h4>{title}</h4>}
        {introduction && <StringToHTML string={introduction}/>}
        {children}
      </BoxLayout>
    </>
  );
};

export default BannerPage;
