import React from "react";
import { LayoutContainer, Grid } from "../../container";
import LayoutProduct from "./LayoutProduct";

const Product = ({ product, title, className, classNameContainer, classNameGrid }) => {
  return (
    <div className={`${className}`}>
      <LayoutContainer className={classNameContainer}>
        <h4>{title ? title : "Sản Phẩm"}</h4>
        <Grid className={classNameGrid}>
          {product.map((item, index) => {
            let src = "/demo-image.png";
            if(item.infos && item.infos.length > 0){
              src = item.infos[0].src
            }
            return (
              <LayoutProduct
                aos="fade-up"
                key={index}
                src={src}
                title={item.title}
                content={item.content}
                path={"/"}
              />
            );
          })}
        </Grid>
      </LayoutContainer>
    </div>
  );
};

export default Product;
