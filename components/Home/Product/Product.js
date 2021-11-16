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
            return (
              <LayoutProduct
                aos="fade-up"
                key={item.id}
                src={item?.infos[0]?.src || "/demo-image.png"}
                title={item.title}
                content={item.content}
                path={item.website}
              />
            );
          })}
        </Grid>
      </LayoutContainer>
    </div>
  );
};

export default Product;
